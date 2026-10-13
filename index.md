---
layout: academic
homepage: true
description: "Sirry Chen (陈思远), Ph.D. student at Fudan University, working on language models, natural language processing, and data mining."
---
<section id="about" class="home-section about-section">
  <h1>About me</h1>
  <p>I am <strong>Sirry Chen <span lang="zh">(陈思远)</span></strong>, a Ph.D. student at <strong>Fudan University</strong>, advised by <a href="http://www.fudan-disc.com/people/zywei">Prof. Zhongyu Wei <span lang="zh">(魏忠钰)</span></a>. I work with the <a href="http://www.fudan-disc.com/">Data Intelligence and Social Computing Lab</a> and <a href="https://www.sii.edu.cn/main.htm">Shanghai Innovation Institute</a>.</p>
  <p>I received my bachelor's degree from <strong>Nanjing University of Aeronautics and Astronautics</strong> in 2025, where I was advised by <a href="https://lipiji.com/">Prof. Piji Li <span lang="zh">(李丕绩)</span></a>.</p>
  <p>My research interests include <strong>large language models</strong>, <strong>natural language processing</strong>, and <strong>data mining</strong>. My recent work explores speech language models for medical consultation and graph learning for social media bot detection.</p>
  <p class="contact-note">I welcome discussions and research collaborations. Feel free to <a href="mailto:{{ site.owner.email }}">get in touch</a>.</p>
</section>

<section id="news" class="home-section">
  <h2>News</h2>
  <ul class="news-list">
  {% for item in site.data.news %}
    <li><span class="news-date">{{ item.date }}</span><span>{{ item.text }} {% if item.url %}<a href="{{ item.url | relative_url }}">{{ item.label }} →</a>{% endif %}</span></li>
  {% endfor %}
  </ul>
</section>

<section id="publications" class="home-section">
  <h2>Publications</h2>
  {% include publications.html %}
</section>

<section id="education" class="home-section">
  <h2>Education</h2>
  <div class="education-list">
    <div class="education-item"><p class="education-date">2025.09 — Present</p><div><h3>Fudan University</h3><p>Ph.D. student · Data Intelligence and Social Computing Lab</p><p>Advisor: <a href="http://www.fudan-disc.com/people/zywei">Prof. Zhongyu Wei</a><br>Affiliated with Shanghai Innovation Institute</p></div></div>
    <div class="education-item"><p class="education-date">2021.09 — 2025.06</p><div><h3>Nanjing University of Aeronautics and Astronautics</h3><p>Bachelor's degree · Changkong College</p><p>Advisor: <a href="https://lipiji.com/">Prof. Piji Li</a></p></div></div>
  </div>
  <details class="earlier-education"><summary>Earlier education</summary><p>2018.09 — 2021.06 · Chongqing High School, Chongzhou, Sichuan</p></details>
</section>

<section id="honors" class="home-section">
  <h2>Selected honors</h2>
  <ul class="news-list">
    <li><span class="news-date">2024.10</span><span>National Scholarship</span></li>
    <li><span class="news-date">2024.01</span><span>First Prize, Shenzhen Zero One College Open Carnival</span></li>
    <li><span class="news-date">2022.12</span><span>National Second Prize, China Undergraduate Mathematical Contest in Modeling</span></li>
  </ul>
  <a class="more-link" href="{{ '/awards/' | relative_url }}">All honors &amp; service →</a>
</section>

<section id="resources" class="home-section">
  <h2>Projects &amp; notes</h2>
  <div class="resource-list">
    <a href="{{ '/works/' | relative_url }}"><strong>Research &amp; projects</strong><span>Open-source work and earlier projects →</span></a>
    <a href="{{ '/blogs/' | relative_url }}"><strong>Research notes</strong><span>Paper write-ups and demonstrations →</span></a>
    <a href="{{ '/share/' | relative_url }}"><strong>Study notes</strong><span>Course projects and reading notes →</span></a>
  </div>
</section>
