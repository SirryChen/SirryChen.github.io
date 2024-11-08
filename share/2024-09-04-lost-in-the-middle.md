---
title: Lost in the Middle Challenge
description: to discuss the problem in LLM named "lost in the middle"
mathjax: true
tags:
  - 人工智能AI
date: 2024-09-05
modified: 2024-09-07
swiper_index: 3
layout: post
---



## 1.问题提出

### 1.1 Lost in the middle

<blockquote style="border-left: 3px solid red; padding-left: 10px; color: red; font-size: 120%; margin-bottom: 15px;">
    23年11月：<a href="https://aclanthology.org/2024.tacl-1.9/" style="color: red;">Lost in the Middle: How Language Models Use Long Contexts</a>
</blockquote>


文中使用了两种任务来衡量模型性能
- multi-document question answering(e.g. who got the first nobel prize in physics)
- key-value retrieval

##### 观察到的现象
- 当问题的答案位于长文本的文首或者文末时，模型（即使是经过长文本训练）能够回答出问题答案的频率，大于答案分布在文本中部的情况。
- 并且模型性能随着答案的位置的变化，整体呈现出U形的连续渐变性。
- 部分情况下，当答案放置在长文本中部，模型的性能甚至 < 没有额外输入直接进行回答
- U形的性能变化曲线只出现在**足够大**的模型上（😳相似的训练策略，为什么结果不同？）


<!-- 图片和注解的网格容器 -->
<div style="display: grid; grid-template-columns: 1fr 3fr; gap: 0px; text-align: center;">

    <!-- 第一行 -->
    <!-- 第一幅图 -->
    <div>
        <img src="../file/img/lost in the middle/U-shaped-lost-in-the-middle.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">模型性能呈现出U形</p>
    </div>

    <!-- 第二幅图 -->
    <div>
        <img src="../file/img/lost in the middle/retrieval-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">随着问题答案位置的变化，模型性能在retrieval任务上呈现出U形</p>
    </div>

    <!-- 第二行 -->
    <!-- 第三幅图 -->
    <div>
        <img src="../file/img/lost in the middle/llama_2_20_total_documents.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">模型的参数量、微调策略对U形的影响</p>
    </div>

    <!-- 第四幅图 -->
    <div>
        <img src="../file/img/lost in the middle/QA-u-shape-lost-in-the-middle.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">随着问题答案位置的变化，模型性能在question-answering任务上呈现出U形</p>
    </div>

</div>

<!-- 引用部分 -->
<div style="text-align: center;">
    <p><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
</div>



##### 观测结论
大模型（无论是否经过指令微调）的性能都呈现出U形，即对长文本中信息的使用缺乏稳健性。


### 1.2 Same Task, More Tokens

<blockquote style="border-left: 3px solid red; padding-left: 10px; color: red; font-size: 120%; margin: 15px;">
    23年11月：<a href="https://aclanthology.org/2024.acl-long.818/" style="color: red;">Same Task, More Tokens: the Impact of Input Length on the Reasoning Performance of Large Language Models</a>
</blockquote>


为探究输入长度对模型推理能力的影响，提出了Flexible LENgth Question Answering dataset (FLenQA)数据集，包括三个**推理**任务（均为两段式，即会有两个关键信息分布在长文本中,其余为无关信息）：
- Monotone Relations(e.g. X>Y & Y>Z  ->  X>Z?true:false)
- People In Rooms
- A simplified version of Ruletaker

##### 观察到的现象
1. 仅通过**重复**所有**关键信息**来扩大文本长度，随着长度增加，模型性能也会下降
2. 两个关键信息相邻，随机分布在长文本中，效果为**文末 > 文首 > 中间 > 随机**，且随文本长度增加，模型性能下降（文末>文首的情况与lost in the middle不太相符）
3. 当冗余信息与关键信息来自于相同任务时（即relevant），模型性能的下降**小于**冗余信息无关的情况
4. 随着文本长度增加，next word prediction的准确度上升，reason的性能下降
5. 部分情况下（GPT4, Mixtral 8x7B）CoT能缓解文本长度对模型性能的影响
6. 随着文本长度增加，CoT prompt下，模型倾向于先回答再推理 -> 对指令的遵循能力下降？

<!-- 图片和注解的网格容器 -->
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0px; text-align: center;">

    <!-- 第一行 -->
    <!-- 第一幅图 -->
    <div>
        <img src="../file/img/lost in the middle/identity_control.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">重复关键信息</p>
    </div>

    <!-- 第二幅图 -->
    <div>
        <img src="../file/img/lost in the middle/accuracy_per_positions.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">关键信息相邻&不同分布位置</p>
    </div>

    <!-- 第三幅图 -->
    <div>
        <img src="../file/img/lost in the middle/accuracy_per_padding.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">冗余信息与关键信息相关/不相关</p>
    </div>

    <!-- 第二行 -->
    <!-- 第四幅图 -->
    <div>
        <img src="../file/img/lost in the middle/nwp_vs_reasoning_all_models.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">next word prediction & reasoning</p>
    </div>

    <!-- 第五幅图 -->
    <div>
        <img src="../file/img/lost in the middle/intro_plot_w_cot.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">CoT的缓解作用</p>
    </div>

    <!-- 第六幅图 -->
    <div>
        <img src="../file/img/lost in the middle/early_response.svg" alt="alt text" style="width: 90%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">模型倾向于先回答再推理</p>
    </div>

</div>

<!-- 引用部分 -->
<div style="text-align: center; margin-top: 5px;">
    <p><a href="https://aclanthology.org/2024.tacl-1.9/">Same Task, More Tokens</a> Levy et al., 2024</p>
</div>


##### 观测结论
- 随着文本长度增大，模型性能均有下降
- 在无CoT，推理任务，任意文本长度情况下，不同关键信息位置，模型的性能<span style="color: red;">文末 > 文首 > 中间 > 随机</span>


## 2.原因猜想

上述两篇论文的共同点在于，模型无法有效利用位于模型中部的信息。下面概述一些可能的原因。

### 2.1 模型结构

["Lost in the middle"](https://aclanthology.org/2024.tacl-1.9/)中认为，decoder-only模型在训练时使用的mask可能会导致在每一个时间点，模型倾向于关注之前的tokens，而encoder-decoder模型则能关注到两边的tokens。为了探究是否是模型结构的影响，文中挑选了两组模型进行实验。
<br>
**encoder-decoder**: 
Flan-T5-XXL(<a href="https://huggingface.co/google/flan-t5-xxl/blob/main/tokenizer_config.json#:~:text=%22model_max_length%22%3A%20512%2C" style="font-size: smaller;">model_max_length: 512 tokens</a>), 
Flan-UL2(<a href="https://huggingface.co/google/flan-ul2/blob/main/tokenizer_config.json#:~:text=%22model_max_length%22%3A%202048%2C" style="font-size: smaller;">model_max_length: 2k</a>)<br>
**decoder-only**: 
Mpt-30b-instruct(<a href="https://huggingface.co/mosaicml/mpt-30b-instruct/blob/main/tokenizer_config.json#:~:text=%22model_max_length%22%3A%208192%2C" style="font-size: smaller;">model_max_length: 8k</a>), 
Longchat-13b-16k(<a href="https://huggingface.co/lmsys/longchat-13b-16k/blob/main/tokenizer_config.json#:~:text=%22model_max_length%22%3A%2016384%2C" style="font-size: smaller;">model_max_length: 16k</a>)


根据下图，随着输入文本长度增长，对于关键信息位于**文首**或**文末**，两类模型性能均有下降；对于关键信息分布在**中间**的情况，两个encoder-decoder模型的性能下降幅度更大。

<div style="text-align: center;">
    <img src="../file/img/lost in the middle/qa_decoder_only_vs_encoder_decoder.svg" alt="image" style="width: 100%; height: auto; margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">在不同输入长度下，decoder-only V.S. encoder-decoder<br><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
</div>

> We hypothesize that encoder-decoder models may make better use of their context windows because their bidirectional encoder allows processing each document in the context of future documents, potentially improving relative importance estimation between documents.

根据上述原文，论文由模型Flan-UL2-2k在2k输入情况下，表现出最佳的稳健性，得出“encoder-decoder模型得益于其双向编码，能够最佳地利用其窗口大小”的结论。但是其余两个decoder-only模型为8k和16k的窗口大小，其在2k输入情况下表现出略差的稳健性是可能的，因此论文中的结论并不具有说服力，我认为应该增加大于8k输入的对比实验。


### 2.2 Pretraining & Fine-Tuning对模型造成影响

["Make Your LLM Fully Utilize the Context"](https://arxiv.org/abs/2404.16811) 中认为，在自回归的预训练过程中，代理任务（e.g., next token prediction）的训练目标会使得模型更倾向于关注邻近token，在后续生成过程中，处于**文末**的token对生成有更大的影响。

同时，大模型在经过预训练后，会进行指令微调来弥补预训练代理任务与下游任务(e.g., dialog)的gap。["Lost in the middle"](https://aclanthology.org/2024.tacl-1.9/) 中也认为，由于在指令微调过程中，指令通常是被放置在**文首**，这可能会驱使模型**习惯地**将更多的注意力放在输入文本的开头，从而导致对文本中部的忽略。

此外，"Lost in the middle"通过实验发现，即使没有加入指令进行微调，模型的性能仍然呈现U形。论文中解释如下：
- 过去的工作已经发现，无指令 微调的模型对最近的token即文末有更高的关注度（recency bias）
- 而其对文首的关注，则可能来自于预训练任务中混入类似的指令微调数据，例如StackOverflow中的数据

从上述文章的分析来看，预训练和微调使得模型倾向于关注输入文本的文首和文末。当关键信息放置于文首或文末时，模型能够更容易地捕获这些关键信息，做出更准确地回答。

<span style="color: orange;">
许多文章都类似地表达了类似的猜想，并以<strong>hypothesize</strong>起手，依据假设提出了解决方法，却缺乏对这个猜想的实验验证。要验证这个猜想，我认为可以设计几个实验：
</span>

<ul style="color: orange;">
  <li>将指令微调的instrction固定地放在输入文本中央，对模型进行微调，理想情况下，模型会关注到文首和放置instruction的地方，即这两个位置的attention score会较高。</li>
  <li>将所有人为设定的指令、模板、special token都放置在输入末尾，对模型进行微调，理想情况下，模型会对文末高度关注，对文首的关注与中部相近，即attention score曲线类似于指数曲线。</li>
</ul>

<span style="color: orange;">
若两个实验均符合依据假设做出的推论，则认为微调给模型的关注带来了偏置。
</span>


### 2.3 Attention分布不均

受微调对模型关注位置影响的启发，对ChatGLM2-6B-32K的attention score可视化，可以更直观地展现模型对文首和文末的注意，以及对文本中部的忽视。

<div style="text-align: center;">
    <img src="../file/img/lost in the middle/chatglm32katt.png" alt="image" style="width: 50%; height: auto; margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">ChatGLM2-6B-32K的attention score可视化<br><a href="https://aclanthology.org/2024.acl-long.736/">Never Lost in the Middle</a> He et al., Aug 2024</p>
</div>

从数据的角度看，如果将数据集中大量重复的instructions、query看作special token（大部分的指令集和问题模板都是人工针对不同的任务编写，是一个有限集，经过tokenizer之后token序列一致，可以看作一组特定的token序列集），则对于一定数量的训练数据，是由instruction(special token) + text + query(special token)组成，这与预训练过程中的[cls] + text + [seq]非常相似。

大模型的训练数据量是庞大的，使得text的取值范围很广，找到从text到answer的正确映射是非常困难的。当模型不知道关注长文本中哪一部分时，文本的attention score会较低，由于softmax [(Attention Is Off By One)](https://www.evanmiller.org/attention-is-off-by-one.html?continueFlag=5d0e431f4edf1d8cccea47871e82fbc4)]对方差的不断扩大，会将注意力积聚到special token上（即使它们并不那么重要）。这在StreamingLLM中被利用来做Attention Sink。

<div style="text-align: center;">
    <img src="../file/img/lost in the middle/StreamingLLM-attention_weights.svg" alt="image" style="width: 90%; height: auto; margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">在经过第三层后的注意力中，前几个token的注意力巨增<br><a href="https://iclr.cc/virtual/2024/poster/18794/">Efficient Streaming Language Models with Attention Sinks</a> Xiao et al., Sep 2023</p>
</div>

## 3.尝试解决

最近有许多工作，依据初步的实验，对原因进行了猜想，并以猜想作为假设，采取了一系列措施，尝试解决这个问题


### 3.1 Never Lost in the Middle

<blockquote style="border-left: 3px solid red; padding-left: 10px; color: red; font-size: 120%; margin-bottom: 10px;">
    24年8月：<a href="https://aclanthology.org/2024.acl-long.736/" style="color: red;">Never Lost in the Middle: Mastering Long-Context Question Answering with Position-Agnostic Decompositional Training</a>
</blockquote>

这篇文章的猜想是文首的attention scores在预训练和微调后很大，而中部包含关键信息的文本的值很小，导致模型无法关注到关键信息，最终导致模型性能下降。

基于这个猜想，构建了一个多文档的多步推理问答数据集，要求模型在回答问题之前，1.复述问题，2.找到与问题相关的文档序号。希望通过这两个额外任务能够迫使模型关注到文本中部的内容，而不仅仅是文首的问题和文末的指令。

<div style="text-align: center;">
    <img src="../file/img/lost in the middle/never-lost-in-the-middle.png" alt="image" style="width: 70%; height: auto; margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">问答流程构建</p>
</div>

将一个文档重复20次作为输入，可视化微调后模型attention scores如下图，依据此作者认为模型关注到了context中的内容，捕获到了关键信息。<span style="color: orange;">但是为什么要用ChatGLM2-6B-32K作为对比，而不用原始的Ziya-LLaMa-13B-v1.1？</span>

<!-- 图片和注解的网格容器 -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0px; text-align: center;">

    <!-- 第一幅图 -->
    <div>
        <img src="../file/img/lost in the middle/chatglm32katt.png" alt="alt text" style="width: 100%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">ChatGLM2-6B-32K</p>
    </div>

    <!-- 第二幅图 -->
    <div>
        <img src="../file/img/lost in the middle/never-lost-in-the-middle-finetune.png" alt="alt text" style="width: 100%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">Finetuned Ziya-LLaMa-13B-v1.1(authors')</p>
    </div>

</div>


### 3.2 Make Your LLM Fully Utilize the Context

<blockquote style="border-left: 3px solid red; padding-left: 10px; color: red; font-size: 120%; margin-bottom: 10px;">
    24年4月：<a href="https://arxiv.org/abs/2404.16811" style="color: red;">Make Your LLM Fully Utilize the Context</a>
</blockquote>

这篇文章的猜想是在长文本训练过程中不充分的监督，导致模型“不知道”关键信息可能会出现在文本中的任何位置。（其实就是模型无法关注到文本中部）

基于这个猜想，这篇文章提出了一种训练策略INformation-INtensive (IN2) training，包含两种问题：
- fine-grained information awareness：试图告诉模型关键信息可能出现在任意一个地方
- integration and reasoning of information：试图告诉模型关键信息可能有多处，并需要推理

<div style="text-align: center;">
    <img src="../file/img/lost in the middle/make-your-LLM-fully-utilize-the-context-method.svg" alt="image" style="width: 70%; height: auto; margin-bottom: 10px;">
    <p style="text-align: center; font-style: italic; font-size: 80%;">IN2 training的两种数据构建过程</p>
</div>

### 3.3 Found in the Middle

<blockquote style="border-left: 3px solid red; padding-left: 10px; color: red; font-size: 120%; margin-bottom: 10px;">
    24年7月：<a href="https://aclanthology.org/2024.findings-acl.890/" style="color: red;">Found in the Middle: Calibrating Positional Attention Bias Improves Long Context Utilization</a>
</blockquote>

这篇文章的猜想是信息所在位置会对注意力造成偏置，使得模型在输出时倾向于依赖处于前面的文本。与之前两篇文章不同的是，这篇文章并不关注这个偏置从何而来，而是关注有什么因素能决定这个模型对文本的注意力分布。

<!-- 图片和注解的网格容器 -->
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0px; text-align: center;">

    <!-- 第一幅图 -->
    <div>
        <img src="../file/img/lost in the middle/vicuna_rel_pos.png" alt="alt text" style="width: 100%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">模型的输出与文首的相关性高</p>
    </div>

    <!-- 第二幅图 -->
    <div>
        <img src="../file/img/lost in the middle/vicuna_attn_weight.png" alt="alt text" style="width: 100%; height: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">平均注意力呈现出U形</p>
    </div>

</div>

通过实验，发现注意力的分布由两个因素决定：
- 文本分布的位置
- 文本与输出的关联性（在输出未知时，这个因素是无法提前获得的）

因此，输入中第$k$ 篇文档$x^{doc}_{k}$ 的注意力可表示为

$$Attn(x^{doc},k)=f(rel(x^{doc}_k), bias(k)),$$

其中的$f$是一个函数。通过实验，可以证明这个函数是单调递增的，因此，不失一般性地使用线性模型替代$f$ ，将上式重写为

$$Attn(x^{doc},k)=rel(x^{doc}_k) + bias(k) + \epsilon,$$

其中$\epsilon$ 是噪声。此时，这篇文章非常巧妙地运用这个线性模型的性质，借助于一个dummy document获得与位置无关的“文本与输出的关联性”，即

$$ rel(x^{doc})=Attn(x^{doc},k)-Attn(x^{dum},k)+rel(x^{dum}).$$

注意到当dummy document任意选择并固定时，$rel(x^{dum})$ 是一个常量，因此可忽略。最后，将$Attn(x^{doc},k)-Attn(x^{dum},k)$ 作为校准的与位置无关的注意力。

<span style="color: orange;">突然想到，如果在transformer中，不加位置编码，那么对于模型来说输入是无序的。那么是否能够设计“一种仅在文档内部进行位置信息标注，而不同文档间位置无关”的位置编码方式。此时，在全局注意力下，不存在距离文首\文末（或者说instruction\query）更近的文档，是否与这篇文章提出的方法等效。</span>


## 4.这仍是一个开放问题

对于产生lost in the middle的原因，最开始的["Lost in the middle"](https://aclanthology.org/2024.tacl-1.9/)中提出三种不同的原因，之后的大部分文章都基于“Attention weight的U形分布”与“不同关键信息位置分布下 模型性能呈U形分布”的相似性，着重关注如何增大关键信息的attention，即让模型能充分利用输入，更关注于关键信息。

但是这两种U形分布真的有很大的关系吗？注意到attention的U形分布主要出现于第三层或更高层之后，并不是从第一层开始。即attention的U形分布，是在多次信息广播融合之后，文首或文末此时已经包含丰富的全文信息（Bert中将放置于文首的CLS代表全文信息的聚合，用于情感分类等任务），模型对这些位置有很高的attention也无可厚非。

至于文首和文末的高attention是否会“不小心”波及处于文首文尾附近的文本，导致如果这些文本恰好包含关键信息，使得模型的输出更合情合理，则又是一种猜测了。


<div style="display: flex; justify-content: center;">
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0px; text-align: center;">
    
    <!-- 第一幅图 -->
    <div>
        <img src="../file/img/lost in the middle/U-shaped-lost-in-the-middle.svg" alt="alt text" style="height: 80%; width: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">关键信息的位置分布对模型性能的U形分布</p>
        <p style="text-align: center; font-style: italic; font-size: 80%;"><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle</a> Liu et al., 2023</p>
    </div>

    <!-- 第二幅图 -->
    <div>
        <img src="../file/img/lost in the middle/chatglm32katt.png" alt="alt text" style="height: 80%; width: auto; margin-bottom: 10px;">
        <p style="text-align: center; font-style: italic; font-size: 80%;">不同位置文本获得的attention的U形分布</p>
        <p style="text-align: center; font-style: italic; font-size: 80%;"><a href="https://aclanthology.org/2024.acl-long.736/">Never Lost in the Middle</a> He et al., Aug 2024</p>
    </div>

  </div>
</div>


## References
- <span style="text-align: left; font-style: italic;"><a href="https://aclanthology.org/2024.tacl-1.9/">Lost in the Middle: How Language Models Use Long Contexts</a> Liu et al., Nov 2023</span>
- <span style="text-align: left; font-style: italic;"><a href="https://aclanthology.org/2024.tacl-1.9/">Same Task, More Tokens: the Impact of Input Length on the Reasoning Performance of Large Language Models</a> Levy et al., 2024</span>
- <span style="text-align: left; font-style: italic;"><a href="https://aclanthology.org/2024.acl-long.736/">Never Lost in the Middle: Mastering Long-Context Question Answering with Position-Agnostic Decompositional Training</a> He et al., Aug 2024</span>
- <span style="text-align: left; font-style: italic;"><a href="https://arxiv.org/abs/2404.16811">Make Your LLM Fully Utilize the Context</a> An et al., Apr 2024</span>
- <span style="text-align: left; font-style: italic;"><a href="https://aclanthology.org/2024.findings-acl.890/">Found in the Middle: Calibrating Positional Attention Bias Improves Long Context Utilization</a> Hsieh et al., Jul 2024</span>
- <span style="text-align: left; font-style: italic;"><a href="https://iclr.cc/virtual/2024/poster/18794/">Efficient Streaming Language Models with Attention Sinks</a> Xiao et al., Sep 2023</span>