---
layout: post
title: Static NGINX Locations
date: 2015-04-01
category: NGINX
tags:
- Web Development
thumbnail: https://s3.amazonaws.com/ptsteadman-images/nginx-proxy.png
lede: "Everytime I finish a project, I have to relearn how to add new 'locations' (paths) to the NGINX virtual host."
featured: true
---

I try to get a lot of mileage out of the single AWS t2.micro instance I keep running, 
which means I have many different projects running on different paths on a single server.  Everytime I finish a project, I have to relearn how to add new "locations" (paths) to the NGINX virtual host.

I was really frustrated when I couldn't figure out how to add a static location for the Jekyll
website I created for the game I'm developing.  I kept trying to do something like this:

    location / {
      root /home/ubuntu/personal-website;
    }
    location /array {
      root /home/ubuntu/array-website/_site;
    }

But everytime I tried to visit [http://ptsteadman.com/array], I would get a 404 error.
I tried a bunch of things: I changed the "root" of the the `/` location to my game website, and it worked.  But no matter what I did, after using `sudo service nginx restart`,
trying to visit the `/array` location still resulted in a 404.  I couldn't add the new route/location.

Eventually, I realized that the text after the slash in the location is the directory that 
NGINX will try to find in the "root" location.  So, `location /array` will look for the directory (or file)
`array` in whatever directory "root" is set to.  So, I created a symlink to the root of my
static jekyll site with the command `ln -s /home/ubuntu/array-website/_site /home/ubuntu/array`, and 
then I could set up my nginx config file in `sites-enabled` as below:

    location / {
      root /home/ubuntu/personal-website;
    }
    location /array {
      root /home/ubuntu;
    }

I think this stuff is all pretty obvious to someone who really understands NGINX and file serving,
but I only touch NGINX when I've finished a project and feel impatient to deploy.  I think it's very confusing
that NGINX seems to handle paths differently between `/` locations and and `/foo` locations, 
but a real understanding of NGINX might clear things up.

