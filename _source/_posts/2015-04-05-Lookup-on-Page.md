---
layout: post
title: Adding Lookup Field to a Page in Dynamics NAV
date: 2015-04-05
thumbnail: https://s3.amazonaws.com/ptsteadman-images/lookup.jpg
tags:
- Resources
- NAV
category: "Dynamics NAV"
author: Patrick Steadman
lede: "One of the problems I faced in building a non-trivial application that consumed NAV Web Services was figuring out how to join fields from different tables."
---

One of the problems I faced in building a non-trivial application that consumed
NAV Web Services was figuring out how to "join" fields from different tables.
For example, when exposing a list of jobs from a job table which includes a
resource needed for the job, you might need more than just the resource id
that's a field in the table: you might also need the resource name and
description.  While this is easy to get for one record, what about when you
need a few hundred records in a table that has been dynamically filtered?  When
exposing a Page as a web service, it's easy to include the fields of the table
that the page is based on, but it's less clear how to include fields from
another table.

Forum posts like [this](http://dynamicsuser.net/forums/p/32550/170843.aspx) led me to believe that I couldn't expose flow fields in a Page web service, and I would get exceptions when I tried to expose all the fields of a table.  In fact, it's perfectly possible to expose a flow field: it's **flow filters** that don't work with web services.  But, I also didn't want to modify the underlying [job] table to add a flow field, and didn't see an easy way of adding a flow field to a Page.  I tried "joining" the data in the C# application, but found network overhead made the application unusuably slow.

The solution to this problem was to use C/AL code to the Page to effectively create a lookup / flow field.  This way, the data is "pre-joined" before leaving the NAV Server, which is fast and clean, but you didn't modify any tables.  Here's how it's done:

Step 1. **Add a Field with SourceExpression Set to a Function Name**

To start, we create a Page using the wizard that includes all of the fields of an underlying table.  Then, we create manually add fields that will contain the lookup data from other tables.  The text in the SourceExpression column will be the name of the function that populates this field.
![Add a Field with SourceExpression Set to a Function Name](http://ptsteadman.github.io/images/lookup-1.PNG)


Step 2. **Create Function in the Page's C/AL Code**

With the Page field designer open, go to the functions tab of C/AL Globals form, and add a function with the name of the text in the SourceExpression column.  Set the return type of the function with the "Locals" button, and a function trigger will appear in the C/AL code editor for your page.  Add code to the body of the function trigger that will be called for each record to provide a value for the field.
![Create Function in the Page's C/AL Code](http://ptsteadman.github.io/images/lookup-2.PNG)


