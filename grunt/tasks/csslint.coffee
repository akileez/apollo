module.exports =
  options:
    csslintrc: "<%= dir.grunt %>/config/csslint.json"
  theme:
    src: ['<%= dir.css %>/_theme.css']
  vendor:
    src: ['<%= dir.css %>/_vendor.css']
  bootstrap:
    src: ['<%= dir.css %>/_bs.css']
  style:
    src: ['<%= dir.css %>/style.css']
  bs:
    src: ['<%= dir.css %>/_bs-*.css']
