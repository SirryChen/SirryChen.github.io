---
layout: academic
homepage: true
description: "Sirry Chen (陈思远), Ph.D. student at Fudan University, working on language models, natural language processing, and data mining."
---
<section id="about" class="home-section about-section">
  <h1>About me</h1>
  <p>I am <strong>Sirry Chen <span lang="zh">(陈思远)</span></strong>, a Ph.D. student at <strong><a href="https://www.fudan.edu.cn/">Fudan University</a></strong>, advised by <a href="http://www.fudan-disc.com/people/zywei">Prof. Zhongyu Wei <span lang="zh">(魏忠钰)</span></a>. I work with the <a href="http://www.fudan-disc.com/">Data Intelligence and Social Computing Lab</a> and <a href="https://www.sii.edu.cn/czrl/list.htm">Shanghai Innovation Institute</a>.</p>
  <p>I received my bachelor's degree from <strong>Nanjing University of Aeronautics and Astronautics</strong> in 2025, where I was advised by <a href="https://lipiji.com/">Prof. Piji Li <span lang="zh">(李丕绩)</span></a>.</p>
  <p>My research interests include <strong>large language models</strong>, <strong>natural language processing</strong>, and <strong>data mining</strong>. My recent work explores speech language models for medical consultation and graph learning for social media bot detection.</p>
  <p class="contact-note">I welcome discussions and research collaborations. Feel free to <a href="mailto:{{ site.owner.email }}">get in touch</a>.</p>
</section>

<section id="education" class="home-section">
  <h2>Academic background</h2>
  <div class="education-list">
    <div class="education-item"><p class="education-date">2025.09 — Present</p><div><h3><a href="https://www.fudan.edu.cn/">Fudan University</a> &amp; <a href="https://www.sii.edu.cn/czrl/list.htm">Shanghai Innovation Institute</a></h3><p>Ph.D. student · Data Intelligence and Social Computing Lab</p><p>Advisor: <a href="http://www.fudan-disc.com/people/zywei">Prof. Zhongyu Wei</a></p></div></div>
    <div class="education-item"><p class="education-date">2021.09 — 2025.06</p><div><h3>Nanjing University of Aeronautics and Astronautics</h3><p>Bachelor's degree · <a href="https://changkong.nuaa.edu.cn/zkcxbzl/list.htm">Changkong College</a> × <a href="https://ai.nuaa.edu.cn/main.htm">College of AI</a></p><p>Advisor: <a href="https://lipiji.com/">Prof. Piji Li</a></p></div></div>
  </div>
  <details class="earlier-education"><summary>Earlier education</summary><p>2018.09 — 2021.06 · Chongqing High School, Chongzhou, Sichuan</p></details>
</section>


<section id="news" class="home-section">
  <h2>News</h2>
  <ul class="news-list">
  {% for item in site.data.news %}
    <li><span class="news-date">{{ item.date }}</span><span>{{ item.text }} {% if item.url %}<a href="{{ item.url | relative_url }}">{{ item.label }} →</a>{% endif %}</span></li>
  {% endfor %}
  </ul>
</section>
