abcde
=====

Assemble Bootstrap crafted development environment featuring Grunt &amp; Handlebars including Javascript. This is my custom static site development environment.

This is a work in progress as I move my working environment from dev machine to public github. Need to generalize files.


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
