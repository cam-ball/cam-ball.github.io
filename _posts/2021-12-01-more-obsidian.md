---
title: More Obsidian Posting
tags: obsidian markdown notcode notnotcode
excerpt_separator: <!-- excerpt-end -->
---

Well, I'm still doing it.

After my [previous post]({% post_url 2021-06-20-obsidian %}), the aforementioned D&D campaign began
in earnest. With Obsidian as a DM screen, the game went swimmingly and I was able to focus on
learning how to run a game without also having to juggle window management.  Since then, I've
transitioned more of my general note keeping to Obsidian, and some recent additions to my
configuration have motivated me to give a brief update.

<!-- excerpt-end -->

#### Mobile App
After being in closed beta for quite some time, the official Obsidian mobile app was released for
Android and iOS in July. It's surprisingly similar to the desktop application, with the majority of
differences that I've noticed being a QoL updates to the interface to make basic markdown syntax a
little more accessible on a mobile device. I think it's a really nice interface and have found it to
be a pleasant user experience for both quick notes and also longer-form mobile typing. In fact, this
post was initially drafted on my phone a few days after installing the app!

I'm slowly working on migrating some personal notes from Google Keep into Obsidian mobile, moving
over notes as reach for them in my day-to-day. I don't anticipate completely dropping Keep because
the multi-user editing is really useful, but I'm excited about that being a collaboration tool
exclusively, rather than a mish-mash of half-complete thoughts that are spread across all of my
Google accounts.

#### Multi-Device Syncing
Transitioning all of my devices to use the exact same note-taking interface has been nice in the
sense that having a single, consistent interface is something that is really useful for obvious
reasons. That said, having that very-nice-and-consistent-interface present with a discrepancy
between the content on those devices was frustrating, at best.

Anyone even moderately familiar with Obsidian will know that one of their big selling points is a
paid syncing feature, which gives the user access to cloud syncing with end-to-end encryption across
as many devices as you like. I tried the service out for a month earlier this year, and while I
thought it was fine, it didn't feel like I was getting enough benefit to justify the cost.

For starters, my subscription period was before the release of the mobile app, so the only devices
that were being synced were my personal laptop and my work laptop, which have very little subject
overlap in notes. My personal notes are mostly related to TTRPGs and shower-thought style lists,
whereas work notes include job-related TODOs and professional development notes. While there is some
benefit to accessing those shower thoughts on my work computer, I don't have too many shower
thoughts in the middle of the work day, and certainly not enough that I can justify paying for the
first party sync for it.

My other issue with first-party syncing was speed. While my regularly-edited notes have a pretty
small footprint, the addition of the SRD content covered in my last post made the sync process take
around an hour for a first-time sync. On one hand, I can appreciate that the developers probably
didn't intend for the software to be used like this. On the other hand, that SRD content amounts to
a total of 892 plain text files at the time of writing, which is a total of 2Mb on my drive. I could
certainly organize those notes a little better, but I don't think it's unreasonable to expect a sync
of that size to take less than an hour.

So, in brief, the built-in sync wasn't a great fit for me.

Because both of my primary computers are running Manjaro, and there is no critical or compromising
information kept in my vault, I decided to set up syncing with a combination of a private GitHub
repo and cron. I won't go into the technical details here, because it turns out that many, many
people have done the exact same thing. They're probably better at technical writing than I am, so
for setup guides you can check out the [resources](#resources) at the bottom at this post.

My laptop configuration is already mostly driven by dotfiles, which are stored in a private git
repo, so I used that repo to share a couple of super simple scripts across devices.

One script, `sync_obsidian` just pulls the my obsidian repo from GitHub, and then commits all
changes with a commit message that includes the time stamp of the sync. This script is run via cron
every 30 minutes on my personal computer, and once every hour on my work computer.

The other, `sync_and_launch_obsidian` simply calls `sync_obsidian` and then launches the
application. I was already having to use a custom launcher for the app because the Linux
distribution of Obsidian is an AppImage, so the launcher script just replaced the AppImage
executable in that launcher. The sync and launch script is nice, because as long as I don't go out
of my way to launch Obsidian directly from the AppImage, I can be assured that my notes are synced
upon launching the application.

Now that the mobile app is also in the picture, it is also mostly integrated this workflow. It's a
little less smooth on mobile because I haven't found an unobtrusive way to automate the sync, but
it's also less important that mobile is seamless, because I use that interface significantly less
often than the other two locations. As it is right now, after making a change to a note on mobile, I
manually run the `sync_obsidian` script, and there is currently no equivalent for
`sync_and_launch_obsidian`. That will probably eventually be ironed out, but it hasn't felt worth it
yet. As it stands, setting up automation on that front will probably be more inconvenient than the
net convenience gained by having it, so it doesn't feel pressing.

I've been using this structure across all three devices for about two months now and I honestly
couldn't be happier with the result. There are some things left to iron out, such as better mobile
automation, more robust conflict resolution, and maybe adding a windows device into the mix. That
said, what is there now is perfectly functional, and I made sure to sit on it for a while before
talking about it here.

#### Resources
1. [How I Put My Mind In Version Control](https://medium.com/analytics-vidhya/how-i-put-my-mind-under-version-control-24caea37b8a5)
2. [Obsidian Git plugin](https://github.com/denolehov/obsidian-git) (I don't use this, but it's
   probably more straightforward than what I did do :sweat_smile:)
3. [Setting Up Git Syncing for Obsidian on Android](https://lucidhacker.substack.com/p/setting-up-git-syncing-for-obsidian)
