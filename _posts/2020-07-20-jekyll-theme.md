---
title: A Little Less Hyde
tags: jekyll bootstrap
---

The theme for this site is a clone of [this wonderful theme by start bootstrap](https://github.com/jeromelachaud/freelancer-theme)
Or, rather, the bones of it is. I'm currently in the process of updating the code to work a little better with Jekyll, as well as moving things
around to expand that theme from a single-page portfolio into a true Jekyll-based blog.

This is a quick little post to remind me what I've done, and also to give me some data to play with when setting up the formatting of the blog.
I intended to go into a little more detail here, but this is just going to have to do for now :)

Here's what I've done so far:
- Convert theme away from a gem-based approach, allowing for more flexibilty and editability.
- Updated posts -> projects collection, which keeps base theme portfolio functionality while still allowing for blog posts like this!
- Moving configuration points out of `config.yml`
  - This is still a work in progress. The original theme didn't make use of the `_data` directory at all, so there is a lot of noise in the configuration file
- DRY'd up some views

Things to do:
- The asset loading here is just bizzare, everything is loaded through the `_includes` directory
- Bootstrap is super out of date
- Clean up blog & post formatting
- The projects section needs to be wrapped up. There are only two projects listed, and the images for them are not great
- General fleshing out of ideas. I have a pretty hard time talking unprompted, and that's really what the big issue is here.
  I'll keep finding excuses to not write posts until the site is 'perfect', which isn't going to make for a very interesting or good site
