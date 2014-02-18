module.exports =
  fixer:
    expand: true
    flatten: true
    src:    [ "<%= dir.css %>/styles.css"
              "<%= dir.css %>/_vendor.css"
              "<%= dir.css %>/_theme.css"
              "<%= dir.css %>/_bs-*.css"
              "<%= dir.css %>/_bs.css"
            ]
    dest:     "<%= dir.css %>"

  theme:
    expand: true
    flatten: true
    src: "<%= dir.css %>/_theme.css"
    dest:     "<%= dir.css %>"

  vendor:
    expand: true
    flatten: true
    src: "<%= dir.css %>/_vendor.css"
    dest:     "<%= dir.css %>"

  bootstrap:
    expand: true
    flatten: true
    src: [
      "<%= dir.css %>/_bs-*.css"
      "<%= dir.css %>/_bs.css"
    ]
    dest:     "<%= dir.css %>"

  build:
    expand: true
    flatten: true
    src: "<%= dir.css %>/styles.css"
    dest:     "<%= dir.css %>"

  test:
    expand: true
    flatten: true
    src:    [ "<%= dir.css %>/development/dev/test.css"]
    dest:     "<%= dir.css %>/development/dev/testprefix"
