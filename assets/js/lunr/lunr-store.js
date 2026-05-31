---
layout: none
---

var store = [
  {%- assign docs = site.ctf -%}

  {%- for doc in docs -%}
  {
    "title": {{ doc.title | jsonify }},
    "excerpt": {{ doc.content | strip_html | strip_newlines | jsonify }},
    "categories": {{ doc.categories | jsonify }},
    "tags": {{ doc.tags | jsonify }},
    "url": {{ doc.url | relative_url | jsonify }}
  }{%- unless forloop.last -%},{%- endunless -%}
  {%- endfor -%}
];