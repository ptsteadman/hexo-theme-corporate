---
layout: post
title: Spaces for Newline Indents in VS
date: 2015-03-23
category: ".NET"
tags: 
- C#
- Visual Studio
thumbnail: https://s3.amazonaws.com/ptsteadman-images/vs.jpg
lede: "Visual Studio displays tabs as having the same 
width as four spaces.  But if you're collaborating with someone working 
in another text editor like vim, your automatically-inserted tabs will
appear larger than four spaces."
featured: true
---

It's really annoying when Visual Studio shows you this:

{% img  http://ptsteadman.github.io/images/vs1.png  %}


But github or vim shows you the same file like this:

{% img  http://ptsteadman.github.io/images/vim1.png  %}

If you use the "show whitespace" Visual Studio chord `(CTRL-R, CTRL-W)`, 
you'll see that visual studio inserts tabs instead of spaces by
default for newline indent:

{% img  http://ptsteadman.github.io/images/ws.png  %}

Visual Studio displays tabs as having the same 
width as four spaces.  But if you're collaborating with someone working 
in another text editor like vim, your automatically-inserted tabs will
appear larger than four spaces.

Here's how to make visual studio insert spaces instead of tabs on newline indents:
go to `Tools->Options->Text Editor->All Languages->Tabs`:

{% img  http://ptsteadman.github.io/images/spaces.png  %}

That's better:

{% img  http://ptsteadman.github.io/images/ws2.png  %}
