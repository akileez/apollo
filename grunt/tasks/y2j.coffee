module.exports =
  options:
    minify: false
    bdir: '<%= dir.build %>/'
    preview: false
  all:
    files: [
      src: [
        "<%= dir.views %>/*.{html,hbs}"
        "<%= dir.docs %>/**/*.{html,hbs}"
        "<%= dir.articles %>/**/*.{html,hbs}"
        "<%= dir.blog %>/*.{html,hbs}"
        "<%= dir.styleguide %>/**/*.{html,hbs}"
      ]
      dest: "<%= dir.json %>/manifests/map.json"
    ]

  blog:
    files: [
      src: [
        "<%= dir.blog %>/posts/**/*.{html,hbs}"
      ]
      dest: "<%= dir.json %>/manifests/posts.json"
    ]
