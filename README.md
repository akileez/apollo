Apollo
=====

This is an Assemble Bootstrap crafted _development environment_ featuring Grunt &amp; Handlebars -- including Javascript. This is how I develop static sites. I don't expect this project to work the way you do. It works the way I do, think and process information. It is being posted for public comsumption to help others generate ideas for their own build systems. I have been educated by the open source community and this is my way of giving back. 

This is a **work in progress** as I move my working environment from private to public. Everything is subject to change without notice. 

further infomation can be found in the [wiki](https://github.com/akileez/apollo/wiki) until I get a demo site generated.

My initial goals for this project:
---
* build an environment (psuedo application) for me by me. I did not wish to depend on any commerical products or other open source boilerplates/scaffolders/build systems.
* automation of sitemaps, navigation, forms, tables and styleguide. Basically, anything I dislike doing the long way, by hand.
* learn javascript!
* familarize myself with the public interface of git. I have been using it privately for a while but the public interface offerred new challenges like dealing with others. I am not a social animal.

Caveats:  
* _heavy use of handlebars._ very little html code. Practically everything is a helper. Logic all over the place. Not the prescribed way to use Handlebars. This was done because I find coding html to be tedious. Especially remembering attributes for various tags. Using handlebars helpers allowed me to incorporate functionality. I can focus on producing.
* _heavy use of partials/includes._ I love modularity, flexibility and DRY. It can be difficult to follow the code based on all the moving parts.
* _unorthodox project setup._ from directory structure (multiple folders for compartmentalization) to node modules (dependencies linked or loaded separately to reduce project size and take advantage of my development environment -- homebrew/zsh/globally installed modules -- i.e., the command line.)
* _noob._ first year into javascript. my code is inefficient. I learn best by example when I can understand what is going on. I should really start reading the books.

## Requirements (still developing...)
node, shelljs (not necessary)

## Settings (still developing...)

Change options.cson to suit your particular environment.

## Command Line Replacements
Replaced following grunt tasks with command line equivalents executed via grunt-shell  
* grunt-sync (rsync)  
* grunt-rsync (rsync)  
* grunt-eslint (node eslint)  
* grunt-htmlinspector (node htmlinspector)  
* grunt-contrib-compress (gzip)  
* grunt-rename (mv)  
* grunt-csscomb (node csscomb)
* grunt-contrib-imagemin (various command line tools -- need to document)

Many THANKS to, and heavily influncened by:

* [arkkimaagi Assemble template](https://github.com/Arkkimaagi/assemble-website-template): @Arkkimaggi showed me what was possible with Assemble through his helpers (in particular, the styleguide) and project structure.   
* [badsyntax form helpers](https://github.com/badsyntax/handlebars-form-helpers): @badsyntax showed me how to contstruct helpers without adding tons of html and most of all creating form helpers. 
* [The Assemble Team](https://github.com/assemble/assemble): @jonschlinkert and @doowb for without them, none of this would be possible.  
* others. will add in time.
