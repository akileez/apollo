Apollo
=====

Assemble Bootstrap crafted development environment featuring Grunt &amp; Handlebars including Javascript. This is my custom static site development environment.

This is a **work in progress** as I move my working environment from dev machine to public github. Need to generalize files.

more infomation in the [wiki](https://github.com/akileez/apollo/wiki) until I get everything running and site generated.
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

* [arkkimaagi Assemble template](https://github.com/Arkkimaagi/assemble-website-template)
--Arkkimaggi showed me what was possible with Assemble through his helpers and project structure.   
* [badsyntax form helpers](https://github.com/badsyntax/handlebars-form-helpers)
--badsyntax showed me how to contstruct helpers without adding tons of html and most of all creating form helpers. 
* [The Assemble Team](https://github.com/assemble/assemble)
--jonschlinkert and doowb for without them, none of this would be possible.  
