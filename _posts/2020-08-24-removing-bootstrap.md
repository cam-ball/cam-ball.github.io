---
title: To-Doing TODOs
tags: jekyll uikit
---

As mentioned in my previous post, I had pretty hastily set up this site by using a preexisting jekyll theme that I thought looked 'nice enough'
to keep as a placeholder. The theme definitely served its purpose in bridging the gap between motivation bursts, but it was difficult to work with
and the file structure was confusing and didn't properly use a lot of jekyll's built-in magic.

So, step-by-step, the things I listed as next steps and their resolutions:

#### The asset loading here is just bizzare, everything is loaded through the `_includes` directory
  I cleaned most of this up. More about this in the next section, but I am no longer loading the front-end frameworks through the `_includes`
  directory, which I think helps a lot. Another thing that I neglected to mention before is a lot of site data was being stored directly in the
  configuration metadata for the site. Jekyll has a lot of neat ways to store structured data, and while that configuration file is one of them
  (if you squint), it's not ideal. As such, I've cleaned this up substantially, but I'm certain I'm not done here.

#### Bootstrap is super out of date
  I spent a while trying to update from Bootstrap 3 to Bootstrap 4 but it was giving me a lot of headaches and, frankly, I've never been crazy about
  Bootstrap in the first place. After poking around a little bit, I decided to instead pull in [UIKit](https://uikitstacks.com/). I chose UIKit because
  1) I have past experience in it (though it was over 6 years ago, at this point), 2) Glancing at my options, it was 'still relevant' to someone,
  and 3) I've always liked how it looks. It's nice and clean.

  Removing Bootstrap means that I was able to completely throw out the rest of the theme and start from scratch-ish without having to redesign the whole
  site. As it is, I removed a lot of fluff. The current view is functionally very similar (I removed one or two things that I didn't feel too attached to)
  but has been almost completely rewritten in place, using the new front-end. I will be moving the view around to be a little more exciting, but I think
  it already looks a lot cleaner.

  Beyond vague no-longer-tethered-to-a-pre-existing-themes plans, the other main thing I need to take care of here is adding a new color scheme. The UIKit
  install I chose didn't allow for easy color scheme creation, but that's something that I can take care of with relative ease now that the site is
  all set. I'm saving it for a rainy day.

#### Clean up blog & post formatting
  I think it's cleaner! I also think that I didn't do any of the hard work here, just used the built-in styles I had available to me :sweat_smile:

#### The projects section needs to be wrapped up. There are only two projects listed, and the images for them are not great
  I removed the images. I added the site itself as the third project. I'm looking forward to not having that section be self-referential.

#### General fleshing out of ideas. I have a pretty hard time talking unprompted, and that's really what the big issue is here.
  I only added a little more content, but I'm here writing a blog post, and that ain't nothin', right?

Now that the site format is more manageable, I'm hoping to start using this space more purposefully. I'd like to commit to a post per month.
Because my previous post was just over a month ago, I feel that this is manageable and hopefully will happen somewhat organically.
That said, I'd also like the next post to not be about the place where that post is hosted, so we'll see how that actually goes.

