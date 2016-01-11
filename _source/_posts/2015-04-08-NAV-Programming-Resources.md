---
layout: post
title: NAV Web Service Programming Resources
date: 2015-04-08
thumbnail: https://s3.amazonaws.com/ptsteadman-images/NAV.jpg
category: "Dynamics NAV"
tags:
- NAV
- Resources
lede: "Here are some of the resources I found helpful for learning to develop Dynamics NAV web service based applications."
---

Here are some of the resources I found helpful for learning to develop Dynamics NAV web service based applications.

#### C/AL Programming:

[Introduction to CAL Programming](http://www.consultec.es/DocTutoriales/Introduction_to_CAL_Programming.pdf)
This provides a good overview of the basics of CAL programming, which can become necessary in building a web service applications when a custom codeunit or page extension is required.

#### Setting up Web Services:
[Vjecko Web Service Recorded Session](http://vjeko.com/blog/connecting-to-nav-through-web-services-recorded-session)
Vjecko.com has a lot of detailed articles about web service programming, but this older post has a pdf and recorded session that shows how to expose and connect to web services from a .NET application.  Unfortunately, he shows how to create Web Service references in .NET using the now-deprecated Web Refrence method (from .NET 2) instead of the more current Service Reference method.

[Using Service Reference to Connect to Web Services](http://blogs.msdn.com/b/freddyk/archive/2010/01/20/connecting-to-nav-web-services-from-c-using-service-reference-config-file-version.aspx)
This explains how to use Service Reference, using code instead of XML web.config configuration, which I found difficult to configure.  (Each time I updated the service reference, I would have to reconfigure the XML).

#### NAV Upgrade Process:
[Migration to SQL Server from C/SIDE Database](http://saurav-nav.blogspot.com/2012/12/nav-2013-upgrade-part-iv-sql-migration.html)
In order to use web services, you don't need to be using the Role Tailored Client, but you must be using the a SQL server based NAV database.  Web Services can be configured and exposed using the Classic Client for SQL Server Databases.

[Debugging Code Called by Web Services](http://blogs.msdn.com/b/nav/archive/2012/03/05/rtc-debugging.aspx)
C/AL code won't necessarily execute the same as it did in the Classic Client when called  as a Web Service.  C/AL code called as web service execute in the NAV Server tier, instead of the client.  [Certain functions](http://msdn.microsoft.com/en-us/library/ff477107.aspx) aren't available for code running in the NAV Server, and some design changes need to be made (for example, CONFIRM dialogue boxes don't make sense in the context of a web service).  To debug the codeunits called through web services (or the Role Tailored Client), you will need to use Visual Studio.
[More information.](http://msdn.microsoft.com/en-us/library/dd338765.aspx#SU)

#### Deploying a .NET Application:
[Deploying to IIS](http://www.asp.net/mvc/overview/deployment/visual-studio-web-deployment/deploying-to-iis)  After you've built a .NET application that consumes .NET web services, you'll have to find a way to deploy it on your servers, or Azure.  Connection strings can be used to specify different NAV servers for different environments (like development, QA, and prod).

