---
title: Joining Derived Tables in Arel
tags: code ruby rails
---

### Schema outline:

{% highlight ruby linenos %}
# app/models/dog.rb
class Dog < ApplicationRecord
  has_many :walks
end

# app/models/walk.rb
class Walk < ApplicationRecord
  belongs_to :dog
end
{% endhighlight %}

{% highlight ruby linenos %}
# db/schema.rb
create_table "dogs", force: :cascade do |t|
  t.string "name", null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
end

create_table "walks", force: :cascade do |t|
  t.integer "dog_id", null: false
  t.date "date_taken", null: false
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["dog_id"], name: "index_walks_on_dog_id"
end

add_foreign_key "walks", "dogs"
{% endhighlight %}

### join with a single derived table
{% highlight sql linenos %}
SELECT
  dogs.name,
  this_week_walks.walks_taken AS walks_taken_this_week,
  previous_walks.walks_taken AS walks_taken_previously
FROM dogs
LEFT OUTER JOIN (
  SELECT
    dog_id,
    count(id) AS walks_taken
  FROM walks
  WHERE walks.date_taken BETWEEN '2022-09-18' AND '2022-09-24'
  GROUP BY dog_id
) this_week_walks
  ON this_week_walks.dog_id = dogs.id
LEFT OUTER JOIN (
  SELECT
    dog_id,
    count(id) AS walks_taken
  FROM walks
  WHERE walks.date_taken < '2022-09-18'
  GROUP BY dog_id
) previous_walks
  ON previous_walks.dog_id = dogs.id
{% endhighlight %}

ignoring how disgustingly inefficient this example is (the same result can be
achieved with a single join and creative use of conditionals inside of a
`SUM`), let's convert this to Arel


{% highlight ruby linenos %}
walks = Walk.arel_table
dogs = Dog.arel_table

this_week_walks = walks
  .project(
    walks[:dog_id],
    walks[:id].count.as('walks_taken'),
  )
  .where(walks[:date_taken].between(Date.new(2022, 9, 18)..Date.new(2022, 9, 24)))
  .group(walks[:dog_id])
  .as('this_week_walks')

previous_walks = walks
  .project(
    walks[:dog_id],
    walks[:id].count.as('walks_taken'),
  )
  .where(walks[:date_taken].lt(Date.new(2022, 9, 18)))
  .group(walks[:dog_id])
  .as('previous_walks')

result = Dog
  .select(
    dogs[:name],
    this_week_walks[:walks_taken].as('walks_taken_this_week'),
    previous_walks[:walks_taken].as('walks_taken_previously'),
  )
  .joins(
    dogs
      .outer_join(this_week_walks)
      .on(this_week_walks[:dog_id].eq(dogs[:id]))
      .join_sources
  )
  .joins(
    dogs
      .outer_join(previous_walks)
      .on(previous_walks[:dog_id].eq(dogs[:id]))
      .join_sources
  )
{% endhighlight %}

TODO:
- remove date logic, just do a single derived table, applications be damned
  - dont forget to update sql chunk for this
- add an additional example of a more complicated derived table (with joins, etc) to drive the use case home
- actually write english
  - break code blocks out into smaller chunks to help explanations
  - link to some resources for more basic arel functionality
- comment code blocks
