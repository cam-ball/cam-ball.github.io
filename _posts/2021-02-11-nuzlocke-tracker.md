---
title: Knee-jerk React-ion
tags: react pokemon development nuzlocke
---

Whenever someone mentions front-end development and my relationship to it, the hairs on the back of my neck stand up, nearby windows shatter, and the room temperature drops by 10 degrees.
I'm not sure why front-end development is so harrowing for me, and why, of all the things in my domain, that's The Thing that triggers impostor syndrome.

My last front-end heavy position was using AngularJS (no, no, not Angular 2+, the original one) in an application that was already somewhat established when I started working with that company,
and a lot of the application stack was lost on me as a newbie in ways that I'm only starting to piece together now, six years later, and very far removed from the project.

So, in an attempt to avoid that bizarrely emotional turmoil, I'm trying to use some of my time off to get a little more comfortable with front-end dev and modernize my framework knowledge.
React has, from my limited view, been the darling of the JS framework world for a while now, and so that is where I'm spending some time.

In a seemingly unrelated side-note, I have also recently begun my first ever Pokemon [Nuzlocke Challenge](https://bulbapedia.bulbagarden.net/wiki/Nuzlocke_Challenge), and it is going... fine. It's fine, totally fantastic and not in anyway emotionally or mentally taxing. It's fine.

{% include embeded_image.html url="/assets/img/posts/2021-02-11-nuzlocke-tracker/goodtime.png" description="The calm assurance of someone having a great time" %}

Something that is giving me some trouble in an otherwise definitely-going-very-well-don't-worry-about-it run of this beloved children's game is keeping track of which Pokemon I have encountered and on which routes,
which is something that is fundamentally required of playing this particular bastardization of Pokemon.

All of this is to say that I'm trying to kill these two Spearow with one stone (Geodude?) and build out a Nuzlocke challenge tracker.
Currently, this is built using React, Bootstrap for UI, and [pokedex-promise-2](https://github.com/PokeAPI/pokedex-promise-v2) interface for [PokeAPI](https://pokeapi.co/) to populate the site data.

There isn't much so far, just a region selector and a table view that lists all of the named areas within a region.

{% include embeded_image.html url="/assets/img/posts/2021-02-11-nuzlocke-tracker/tracker.png" description="" %}

The basic interface will include, per region:
  - a list of all locations within the region
  - a dropdown for each of those regions to select which pokemon was caught in that area
  - a place to note the name of aforementioned Pokemon
  - a place to denote whether that Pokemon is still in this plane of existence (whether or not the pokemon has been released, per the rules of the challenge)

I've paused on this for now because of a snag I've hit with the API (or, possibly, with my understanding of how the API data is populated), but I'm hoping to outline the details of that
and what steps (if any!) I'm taking to resolve it when I'm out of those specific woods.

This is a really nice toy project because the MVP is so straighforward but there's a lot of room for improvement and I feel like there's potential to make a genuinely usable, dynamic tool.
After completing the features above, I'd like to add:
  - JSON imports and exports for moving data between sessions
  - [react-select](https://react-select.com/home) integration for easier dropdown selection
  - light/dark mode skin swapping
  - settings for tweaking individual rules and accommodation for popular house rules

All of these things should be perfectly achievable, and are a little more enticing than figuring out a data structure right now, so I hope I can move on to them soon.

By the end of this, I don't think I'll be a React wizard, but I'll still be alive and kickin', which is more than I can say for my starter, Crusher.
{% include embeded_image.html url="/assets/img/posts/2021-02-11-nuzlocke-tracker/crusher.png" description="Crush not, lest ye be crushed" %}
