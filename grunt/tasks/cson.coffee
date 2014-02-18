module.exports =
  options:
    rootObject: false

  assemble:
    files: [
      expand: true
      cwd:    "<%= dir.cson %>"
      src:    ["**/*.cson", "!_grunt/**", "!_less/**"]
      dest:   "<%= dir.json %>"
      ext:    ".json"
    ]

  # less:
  #   files: [
  #     expand: true
  #     cwd:    "<%= dir.cson %>/_less"
  #     src:    ["**/*.cson"]
  #     dest:   "<%= dir.styles %>/config"
  #     ext:    ".json"
  #   ]

  grunt:
    files: [
      expand: true
      cwd:    "<%= dir.cson %>/_grunt"
      src:    ["**/*.cson"]
      dest:   "<%= dir.grunt %>/config"
      ext:    ".json"
    ]
