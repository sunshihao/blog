---
layout: post
title:  "Welcome to Jekyll!"
date:   2025-02-12 11:36:31 +0800
categories: jekyll update
lang: zh
---
{% for lang in site.languages %}
    {% if lang == site.default_lang %}
<a href=" {{ page.url }}">{{ lang }}</a>
    {% else %}
<a href="/{{ lang }}{{ page.url }}">{{ lang }}</a>
    {% endif %}
{% endfor %}

<div>123</div>

{% for lang in site.languages %}
    {% if lang == site.active_lang %}
{{ lang }}
    {% else %}
        {% if lang == site.default_lang %}
<a href=" {{ page.url }}">{{ lang }}</a>
        {% else %}
<a href="/{{ lang }}{{ page.url }}">{{ lang }}</a>
        {% endif %}
    {% endif %}
{% endfor %}



您可以在您的“_posts”目录中找到这篇文章。继续编辑它并重新构建站点以查看您的更改。您可以通过多种不同的方式重建站点，但最常见的方法是运行 'jekyll serve'，它会启动 Web 服务器并在文件更新时自动重新生成您的站点。

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
