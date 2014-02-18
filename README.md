abcde
=====

Assemble Bootstrap crafted development environment featuring Grunt &amp; Handlebars including Javascript. This is my custom static site generator development environment.

This is a work in progress as I move my working environment from dev machine to public github. Need to generalize files.

Directory structure

Top Level:
 
	 .
	├── app
	├── build
	├── grunt
	├── node_modules
	├── packs
	├── temp
	└── test
	
	7 directories

App Level:

	.
	├── assemble
	│   ├── config
	│   ├── data
	│   ├── helpers
	│   ├── partials
	│   ├── plugins
	│   └── templates
	├── assets
	│   ├── data
	│   ├── fonts
	│   ├── ico
	│   ├── img
	│   ├── pdf
	│   └── php
	├── scripts
	│   ├── coffee
	│   └── js
	└── styles
	    ├── config
	    ├── css
	    └── less
	
	21 directories

## Requirements

node, shelljs

## Settings

Change options.cson to suit your particular environment.

## Command Line Replacements
Replaced grunt tasks which are run via the command line via grunt-shell  
* grunt-sync (rsync)  
* grunt-rsync (rsync)  
* grunt-eslint (node eslint)  
* grunt-htmlinspector (node htmlinspector)  
* grunt-compress (gzip)  
* grunt-rename (mv)  
