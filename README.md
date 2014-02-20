Apollo
=====

Assemble Bootstrap crafted development environment featuring Grunt &amp; Handlebars including Javascript. This is my way of building static sites.

This is a **work in progress** as I move my working environment from dev machine to public github. Everything is subject to change without notice. 

more infomation in the [wiki](https://github.com/akileez/apollo/wiki) until I get a demo site generated.

My initial goals for this project:
---
* build an environment (psuedo application). no dependendices on commerical products.
* automation of sitemaps, navigation, forms, tables and styleguide. anything I dislike doing by hand.
* learn javascript
* familarize myself with git

Caveats:  
* _heavy use of handlebars._ very little html code. Practically everything is a helper. Logic all over the place. Not the prescribed way to use Handlebars.
* _heavy use of partials/includes._ I love modularity, flexibility and DRY. It can be difficult to follow the code based on all the moving parts.
* _unorthodox project setup._ from directory structure (multiple folders for compartmentalization) to node modules (dependencies linked or loaded separately to take advantage of my development machine -- homebrew/zsh/globally installed modules)
* _noob._ first year into javascript. my code is inefficient. I learn best by example when I can understand what is going on.

## Requirements
node, shelljs

## Settings

Change options.cson to suit your particular environment.

## Command Line Replacements
Replaced grunt tasks which are run on the command line via grunt-shell  
* grunt-sync (rsync)  
* grunt-rsync (rsync)  
* grunt-eslint (node eslint)  
* grunt-htmlinspector (node htmlinspector)  
* grunt-compress (gzip)  
* grunt-rename (mv)  
* grunt-csscomb (node csscomb)

Many THANKS to, and heavily influncened by:

* [arkkimaagi Assemble template](https://github.com/Arkkimaagi/assemble-website-template): Arkkimaggi showed me what was possible with Assemble through his helpers (in particular, the styleguide) and project structure.   
* [badsyntax form helpers](https://github.com/badsyntax/handlebars-form-helpers): badsyntax showed me how to contstruct helpers without adding tons of html and most of all creating form helpers. 
* [The Assemble Team](https://github.com/assemble/assemble): jonschlinkert and doowb for without them, none of this would be possible.  
