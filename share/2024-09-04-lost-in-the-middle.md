---
title: Lost in the middle
description: to discuss the problem in LLM named "lost in the middle"
mathjax: true
tags:
  - 人工智能AI
date: 2024-09-5 20:01:00
swiper_index: 3
---

### 1.问题提出

> 23年11月：[Lost in the Middle: How Language Models Use Long Contexts](https://aclanthology.org/2024.tacl-1.9/) 

文中使用了两种任务
- multi-document question answering(e.g. who got the first nobel prize in physics)
- key-value retrieval

观察到的现象：
- 当问题的答案位于长文本的文首或者文末时，模型（即使是经过长文本训练）能够回答出问题答案的频率，大于答案分布在文本中部的情况。
- 并且模型性能随着答案的位置的变化，整体呈现出U形的连续渐变性。
- 部分情况下，当答案防止在长文本中部，模型的性能甚至 < 没有额外输入直接进行回答

<!-- <div style="text-align: center;">
    <img src="../file/img/lost in the middle/U-shaped-lost-in-the-middle.svg" alt="alt text" style="width: 70%; height: auto;">
    <p style="text-align: center; font-style: italic;">在长文本中，随着问题答案位置的变化，模型性能呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
</div>
<div style="text-align: center;">
    <img src="../file/img/lost in the middle/retrieval-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 70%; height: auto;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">在长文本中，随着问题答案位置的变化，模型性能在retrieval任务上呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
</div>
<div style="text-align: center;">
    <img src="../file/img/lost in the middle/QA-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 70%; height: auto;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">在长文本中，随着问题答案位置的变化，模型性能在question-answering任务上呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
</div> -->

<div style="display: flex; align-items: stretch; justify-content: center;">
    <!-- 左侧的图片容器 -->
    <div style="flex: 1; text-align: center; margin-right: 20px; display: flex; flex-direction: column; justify-content: center;">
        <img src="../file/img/lost in the middle/U-shaped-lost-in-the-middle.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic;">在长文本中，随着问题答案位置的变化，模型性能呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
    </div>
    
    <!-- 右侧的两幅图容器 -->
    <div style="flex: 1; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
        <!-- 第一幅图 -->
        <div style="margin-bottom: 20px;">
            <img src="../file/img/lost in the middle/retrieval-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 70%; height: auto;">
            <p style="text-align: center; font-style: italic; font-size: 80%;">在长文本中，随着问题答案位置的变化，模型性能在retrieval任务上呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
        </div>
        <!-- 第二幅图 -->
        <div>
            <img src="../file/img/lost in the middle/QA-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 70%; height: auto;">
            <p style="text-align: center; font-style: italic; font-size: 80%;">在长文本中，随着问题答案位置的变化，模型性能在question-answering任务上呈现出U形<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
        </div>
    </div>
</div>


观测结论：大模型（无论是否经过指令微调）的性能都呈现出U形，即对长文本中信息的使用缺乏稳健性

> 24年7月：[Same Task, More Tokens: the Impact of Input Length on the Reasoning Performance of Large Language Models](https://aclanthology.org/2024.acl-long.818/)

提出了Flexible LENgth Question Answering dataset (FLenQA)数据集，包括三个**推理**任务（均为两段式，即会有两个关键信息分布在长文本中,其余为无关信息）：
- Monotone Relations(e.g. X > Y & Y > Z ->  X>Z?true:false)
- People In Rooms
- A simplified version of Ruletaker

观察到的现象：
1. 仅通过**重复**所有关键信息来扩大文本长度，随着长度增加，模型性能也会下降
2. 两个关键信息相邻，随机分布在长文本中，效果为`文末 > 文首 > 中间 > 随机`，且随文本长度增加，模型性能下降（文末>文首的情况与lost in the middle不太相符）


