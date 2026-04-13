---
layout: default
title: Archive
---

# Archive

{% assign postsByYear = site.posts | group_by_exp:"post", "post.date | date: '%Y'" %}
{% for year in postsByYear %}
## {{ year.name }} Year
<ul class="archive-list">
  {% for post in year.items %}
  <li>
    <span class="archive-date">{{ post.date | date: "%m-%d" }}</span>
    <a href="{{ post.url }}">{{ post.title }}</a>
  </li>
  {% endfor %}
</ul>
{% endfor %}
