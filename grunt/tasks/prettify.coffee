module.exports =
  options:
    condense: true
    indent_size:  2
    indent_char:  ' '
    indent_inner_html: true
    indent_scripts: "normal"
    max_char:     0
    brace_style:  'collapse'
    wrap_line_length: 0
    preserve_newlines: true
    max_preserve_newlines: 0
    unformatted:  [
        'a'
        'abbr'
        'acronym'
        'address'
        'b'
        'bdo'
        'big'
        'cite'
        'code'
        'del'
        'dfn'
        'dt'
        'em'
        'font'
        'h1'
        'h2'
        'h3'
        'h4'
        'h5'
        'h6'
        'i'
        'ins'
        'kbd'
        'pre'
        'q'
        's'
        'samp'
        'small'
        'span'
        'strike'
        'strong'
        'sub'
        'sup'
        'tt'
        'u'
        'var'
    ]


  build:
    expand:     true
    cwd:        "<%= dir.build %>"
    src:        '**/*.html'
    dest:       "<%= dir.build %>"
    ext:        '.html'

  dist:
    expand:     true
    cwd:        "<%= dir.dist %>"
    src:        '**/*.html'
    dest:       "<%= dir.dist %>"
    ext:        '.html'
