# Hexo Corporate

Hexo Corporate is a full-featured Hexo theme based on the Metronic Corporate
Frontend freebie framework.  Live example available
[here](http://hexotest.computerlab.io).

This theme is useful for companies interested in using Hexo to create a
professional website with an attractive landing page, company blog, contact
information, and portfolio.  

*Features:*

- custom landing page / index 
- blog posts with tags and categories
- project portfolio
- contact form with google maps
- about page
- swiftype (search) integration
- multiple color schemes
- disqus integration
- social links
- metronic css framework
  [link](http://keenthemes.com/multi-purpose-corporate-frontend-themefreebie-corporate-frontend-theme/)


## Installation
- Create a new hexo project with `hexo init`.
- Install the theme by cloning this repository to the `themes` directory.

``` bash
git clone https://github.com/ptsteadman/hexo-theme-corporate.git themes/corporate;
```
- Copy the contents of `themes/corporate/_source` to `_source`, and copy the
  example site config `themes/corporate/_config.site.yml` to the project root,
  and rename it to `_config.yml`.

``` bash
cd path/to/project/;
cp themes/corporate/_source _source;
cp themes/corporate/_config.site.yml _config.yml;

```
- Remove the line containing `hexo-generator-index` from `package.json` in the
  project root.
- Install dependencies with `npm install`.

Version requirements?

### Enable

Modify `theme` setting in the project root `_config.yml` to `corporate`.

### Update

``` bash
cd themes/corporate
git pull
```

## Configuration

``` yml
# Header
menu:
  Home: /
  Archives: /archives
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```

- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles. `false` to hide the link.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar style. You can choose `left`, `right`, `bottom` or `false`.
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

## Metronic Freebie License

The Metronic css and javascript components are included with the following
license:

```
You are free to use this freebie theme in your any personal or commercial
projects. All used resources, plugins, stock images are subject to thier own
licenses!

The only limitation is that you are not permitted to use this theme in a stock
items that sold in any theme marketplaces(e.g: themeforest.net,
wrapbootstrap.com, etc...).
```

## Features

### Fancybox

Landscape uses [Fancybox] to showcase your photos. You can use Markdown syntax or fancybox tag plugin to add your photos.

```
![img caption](img url)

{% fancybox img_url [img_thumbnail] [img_caption] %}
```


## Development

### Requirements

- [Grunt] 0.4+
- Hexo 2.4+

### Grunt tasks

- **default** - Download [Fancybox] and [Font Awesome].
- **fontawesome** - Only download [Font Awesome].
- **fancybox** - Only download [Fancybox].
- **clean** - Clean temporarily files and downloaded files.

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/
[Grunt]: http://gruntjs.com/
