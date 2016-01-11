title: Notes On Creating A Hexo Theme 
date: 2016-01-02
tags:
- Programming
- Design
category: Hexo
lede: "Information about developing a Hexo theme, including common gotchas that we ran into.  This posts covers setting up a hexo development environment, and the seperation of theme and content."
thumbnail: https://s3.amazonaws.com/ptsteadman-images/hexo.png
---

<div class="image-strip">
{% img https://s3.amazonaws.com/ptsteadman-images/hexo.png  %}
</div>

## Setup

To Update NPM: `npm install npm@latest -g`.

In 2015 it makes sense to use NVM.  [NVM Installation
Instructions](http://linoxide.com/ubuntu-how-to/install-node-js-ubuntu).

Update NPM: `npm install npm@latest -g`

Hexo: why can't you use helper functions in source code? 
This should be in docs.

## Creating a Custom Index File in Hexo

Trying to generate a custom index file in source, hexo would ignore
`source/index.md` no matter what I did.  What I had to do was uninstall
`hexo-generator-index`.  [See
here](https://github.com/hexojs/hexo/issues/1077).  Then it works.  So, that
will be part of the setup for my theme.  But, it's worth it in order to properly
seperate the theme from the content, I think.  Having everyone edit the theme
index.ejs template is no good.

## Hexo Rendering Raw EJS File Problem I Encountered

Sometimes the server would keep rendering an old version of my code, but as
text.  So I'd see stuff like

	<% if (site.tags.length){ %>

The raw ejs, essentially.  Restarting the server or running `hexo clean` didn't
do anything.

After some time, I realized it was due to the gedit swap files being read by
hexo as the actual layout files: for example, `tag.ejs~`.  My `partial` helpers
looked like: `<%- partial('_partials/tag') %>`, and apparently hexo was reading
in `tag.ejs~` instead of `tag.ejs`.  And therefore, the ejs wasn't rendering.

To fix this, I simply changed my partial helper to `<%-
partial('_partials/tag.ejs') %>`.  Problem solved.

## Hexo Excerpt Variable

I was confused by the behavior of the hexo `excerpt` variable.  If you define
`excerpt: something` in the front matter, hexo ignores that.  Instead, to get it
to work, one needs to add a `<!-- more -->` comment in the source of the post.
Or, you can install a plugin that allows you to define custom excerpt in the
front matter.

## Scripts Directory

One of the things I really discovered too late is the "Scripts" directory in the
theme folder.  In Hexo, the various plugins drive the structure of the site, as
opposed to the placement of different files and directories, as in Jekyll.  The
plugins programatically create folder structure, etc, where in Jekyll I mostly
used the liquid markup to structure the site.  

The problem is, then, that the user wants to extend hexo to do some sort of
custom thing.  If one had to publish a new plugin, that'd be too much work.  But
the theme level scripts folder allows one to extend the base hexo functionality
in 'user space' effectively.
