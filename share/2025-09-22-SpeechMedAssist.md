---
title: Demo of LLM & SpeechLMs in Medical Consultation
description: used for presentation and test
mathjax: true
tags:
  - 人工智能AI
date: 2025-09-22
modified: 2024-09-22
swiper_index: 3
layout: post
---




## 1. Wild

### 1. Example 1
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">就是2月份咨询过的噢，因为当时是输卵管已经做过手术后，今天4月又怀孕了一次，左右都有了，双侧输卵管切除，今年4月份又搞了一次宫外孕。我现在想去做检查，想做试管了。医生，宫外孕的原因是什么？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250920_115710.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕通常是由于输卵管炎症、输卵管畸形或输卵管堵塞等原因导致的。当受精卵在输卵管内着床并生长时，就可能导致宫外孕。宫外孕的处理方式取决于病情的严重程度和患者的具体情况，可能包括药物治疗、手术治疗等。在治疗过程中，了解宫外孕的原因有助于预防类似情况的发生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您在2月份进行了输卵管手术，并且在今年4月份也进行了一次治疗。关于宫外孕的原因，它可能是由于多种因素引起的，如子宫内膜异位症、盆腔炎等。为了更准确地确定病因，建议您到医院进行详细的检查和咨询。此外，如果您有其他症状或不适感，请告诉我更多相关信息，以便我能够更好地帮助您。同时，保持良好的生活习惯也非常重要，包括充足休息、饮食均衡、避免过度劳累和精神紧张。希望我的回答能对您有所帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕通常是指受精卵在子宫腔外着床，多数情况下是在输卵管。原因可能包括输卵管炎症、子宫内膜异位、输卵管手术史、以及某些不正当的避孕方法等。这些情况可能导致输卵管狭窄或堵塞，从而阻止受精卵正常移动到子宫腔内。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕是指受精卵在子宫腔以外的部位着床发育的现象，最常见的是在输卵管内，也可能发生在卵巢、腹腔或宫颈等地方。宫外孕的主要原因包括：\n\n1. 输卵管异常：包括输卵管炎症、手术后的瘢痕形成或者先天性输卵管异常等。这些因素可能导致输卵管的阻塞或者狭窄，使得受精卵不能正常通过输卵管进入子宫腔，从而在输卵管内着床。\n\n2. 内分泌因素：如黄体酮分泌不足，可能影响受精卵的运输和着床。\n\n3. 免疫因素：体内某些免疫因子可能影响受精卵的运输和着床。\n\n4. 生活习惯和环境因素：如吸烟、饮酒、过度疲劳、精神压力大等都可能增加宫外孕的风险。\n\n至于你的情况，如果你打算再次尝试自然怀孕并且想要尽快成功，那么可以考虑进行一些辅助生殖技术，如试管婴儿（IVF）等。但是，这需要根据你的具体情况和身体状况来决定，建议你在专业医生的指导下进行。同时，保持良好的生活习惯，减少压力，保持积极的心态也是非常重要的。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">当然可以！你刚才说的是哎医生那个宫外孕的原因是什么呀。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕的原因可能包括输卵管炎症、之前有过输卵管手术或流产史、避孕失败等。建议详细咨询医生，进行相关检查以确定具体原因。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据患者的描述，她之前做过乳腺管手术，并且在四月份进行了宫外孕的治疗。现在她想要再次尝试怀孕，并且已经进行了第一次试管婴儿。关于宫外孕的原因，她需要咨询专业的医生以获得准确的诊断和建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的病史信息，以下是对宫外孕原因的分析及建议：\n\n---\n\n### **一、可能的宫外孕原因**\n1. **输卵管结构异常**  \n   - 输卵管手术（如输卵管结扎/修复术后）可能导致瘢痕形成或粘连，影响受精卵正常通过输卵管。\n   - 既往输卵管炎症未彻底治愈，可能遗留慢性炎症或狭窄。\n\n2. **盆腔环境改变**  \n   - 盆腔手术（如剖腹产、阑尾炎等）可能引发盆腔粘连，阻碍胚胎正常移动至子宫。\n\n3. **输卵管功能受损**  \n   - 手术或炎症可能导致输卵管蠕动功能减弱，受精卵滞留于输卵管内着床。\n\n4. **其他因素**  \n   - 子宫内膜异位症、子宫畸形、感染（如衣原体、淋球菌）等也可能增加风险。\n\n---\n\n### **二、建议进一步检查**\n1. **影像学检查**  \n   - **经阴道超声**：观察子宫及附件情况，排查残留包块或积液。  \n   - **输卵管造影（HSG）**：评估输卵管通畅度及形态。  \n   - **盆腔MRI**：若怀疑复杂病变（如陈旧性出血、粘连），可更清晰显示解剖结构。\n\n2. **实验室检查**  \n   - **血清β-hCG动态监测**：确认是否妊娠并排除滋养细胞疾病。  \n   - **感染指标**：如白带常规、衣原体/淋球菌检测，排查当前感染。\n\n3. **妇科内诊**  \n   - 检查宫颈举痛、附件区压痛等体征，辅助判断是否存在急性炎症。\n\n---\n\n### **三、治疗方向**\n1. **药物保守治疗**  \n   - 若为早期宫外孕且无破裂迹象，可考虑甲氨蝶呤（MTX）注射，需密切监测hCG下降情况。\n\n2. **手术治疗**  \n   - **腹腔镜探查**：直接观察输卵管、卵巢及盆腔情况，必要时行输卵管切除或保留术。  \n   - **开腹手术**：适用于复杂病例或合并其他盆腔病变。\n\n3. **后续生育规划**  \n   - 若双侧输卵管已切除或严重损伤，需评估试管婴儿（IVF）可行性。  \n   - 单侧输卵管可行整形手术，但成功率较低，需权衡利弊。\n\n---\n\n### **四、注意事项**\n- **紧急情况识别**：若出现剧烈腹痛、晕厥、阴道大量出血，立即急诊就医（警惕输卵管破裂）。  \n- **预防感染**：术后注意卫生，避免盆浴及性生活至医生允许。  \n- **心理支持**：反复宫外孕可能带来焦虑，建议寻求专业心理咨询。\n\n---\n\n请尽快至妇科门诊完善检查，并由医生制定个体化方案。早期干预可降低并发症风险，提高未来妊娠成功率。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，真是让人心疼啊。宫外孕的原因其实挺多的，常见的有输卵管炎症、手术后遗症或者是一些激素水平的问题。有时候呢，可能是因为输卵管的形状或者是发育不良导致的。你之前输卵管近端手术后出现不孕，可能也会有一定影响。不过呢，具体情况还是得让医生详细检查一下，才能找到真正的原因。你有没有考虑过再去医院做个详细的检查呢？ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕就是受精卵没在子宫里着床，而是在其他地方，比如输卵管。这种情况挺危险的，容易引起大出血。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">输卵管妊娠就是受精卵没在子宫里着床，而是在输卵管里。这通常是因为输卵管有阻塞或者炎症，影响了受精卵的正常移动。你之前有过输卵管手术和宫外孕经历，这些都增加了风险。你现在想再试一次，但最好先做全面检查，看看输卵管情况如何。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕就是受精卵没在子宫里着床，而是在其他地方，比如输卵管。你之前有过输卵管手术和感染，这可能是主要原因。你现在有什么症状吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">宫外孕的原因包括输卵管妊娠、卵巢妊娠、子宫颈管妊娠等。其中，输卵管妊娠是最常见的原因。宫外孕的主要症状包括腹痛、阴道出血等。如果您有这些症状，请及时咨询医生进行诊断和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 2. Example 2
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">喂，您好，我现在是新冠，然后我想问一下，我现在属于时不时会有一些觉得冷，但时不时又发热，我这个情况要不要吃莲花清瘟？我感染新冠从发烧到现在应该是两天，嗯，体温的话一般都是38度左右 冷的时候我盖着被子躺在床上就过一会儿睡着了，具体什么温度我也没有量。我可以吃布洛芬吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250920_124102.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能患有感冒或其他上呼吸道感染。在这种情况下，建议您先观察症状，多喝水，保持休息。如果症状持续加重或者持续时间过长，建议您去医院就诊，以便医生为您做出准确诊断并给予适当治疗。\n\n关于您提到的布洛芬（Ibuprofen），它是一种非处方药，通常用于治疗轻度至中度疼痛，如头痛、关节痛或牙痛。然而，在您的情况下，我建议您在尝试使用布洛芬之前咨询医生，因为并非所有发热都是由于新冠病毒引起的。医生会根据您的具体情况为您提供专业建议。同时，请注意遵循医生的建议和药物说明书，避免过量服用。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能正在经历一种叫做“寒热错杂”的症状，这是一种中医上常见的病症表现形式之一。这种情况下，患者会出现间断性的寒冷感和发热感交替出现的情况。\n\n为了更准确地判断病因，建议您提供更多关于当前症状的详细描述，例如发热的频率、持续时间以及是否伴随其他不适等。此外，了解您的个人健康状况和过去的疾病史也是必要的。如果您有任何疑问或需要进一步帮助，请随时告诉我。\n\n在目前的情况下，我建议您多休息，保持室内空气流通，避免受凉。同时，饮食上要注意均衡营养，增加摄入维生素C的食物，如新鲜水果和蔬菜。如果您的体温超过正常范围(通常为37.5°C)，或者出现其他严重症状，请及时就医并进行进一步检查以明确病因。除了新冠病毒感染外，还有其他可能导致类似症状的原因，比如感冒、流感等呼吸道病毒感染。因此，确诊还需要通过医生的专业诊断和相关实验室检查来确定。\n\n希望我的回答对您有所帮助。如果您有任何其他问题或需要进一步咨询，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对啊，如果你感觉发烧或者身体不适，布洛芬是可以服用的。但记得按说明书上的剂量，还有多喝水，注意休息哦！如果有更严重的不适，最好赶紧去看医生。希望你快快好起来！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，我是HuatuoGPT，一个医疗AI助手。首先，我要强调的是，我不能替代医生的诊断，但我可以提供一些可能的解释和建议。\n\n您的症状（时冷时热，发热）可能是由多种原因引起的，包括新冠病毒感染。新冠病毒感染的典型症状包括发热、咳嗽、呼吸困难等。然而，每个人的体验可能会有所不同，有些人可能会出现其他症状，如头痛、肌肉疼痛、喉咙痛、鼻塞、乏力、失去嗅觉或味觉等。\n\n如果您怀疑自己可能感染了新冠病毒，最好的做法是尽快进行新冠病毒检测。如果您的症状持续或者恶化，或者您有任何其他的健康问题，建议您尽快就医。\n\n关于您提到的体温问题，一般来说，新冠病毒感染的患者体温可能会升高到37.5°C以上。但是，这并不意味着所有发热的人都有感染新冠病毒，因为许多其他的疾病和状况也可能导致发热。\n\n布洛芬是一种非处方药，通常用于缓解轻度至中度的疼痛，如头痛、关节痛、牙痛、肌肉痛等。它也可以用于降低发热的体温。然而，是否应该使用布洛芬取决于您的个人健康状况和其他正在使用的药物。在开始任何新的药物治疗之前，都应该先咨询医生或药剂师的意见。\n\n总的来说，如果您有新冠病毒感染的疑虑，最好的做法是尽快进行检测。同时，保持充足的休息，多喝水，避免过度劳累，以帮助身体恢复。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">当然可以，我听到你那边有男声和女声在对话，然后还有电话铃声响起，接着是咔嗒声，最后是女声在说话。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">Based on your symptoms, it's possible you have the flu. I recommend seeing a doctor for a proper diagnosis and treatment.</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能需要咨询医生以获取专业意见。发热和寒战是新冠感染的常见症状，但也可能是其他疾病的迹象。建议您尽快联系医疗保健机构并告知您的症状和接触史。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您目前处于新冠感染后的恢复期（发热已退2天），但仍有“忽冷忽热”的症状。这种情况在新冠康复过程中较为常见，可能与以下原因相关：\n\n### 一、可能的原因分析\n1. **余邪未清**  \n   病毒残留或正气未复，导致营卫不和（中医角度），表现为寒热交替。\n   \n2. **气阴两虚**  \n   发热耗伤气血津液，出现乏力、低热、自汗等虚象。\n\n3. **脾胃失调**  \n   恢复期饮食不当或脾胃虚弱，影响水谷运化，导致体温波动。\n\n4. **其他并发症**  \n   如继发细菌感染、电解质紊乱等（需结合其他症状判断）。\n\n---\n\n### 二、建议处理方案\n#### （1）中药调理（需辨证后使用）\n- **推荐方剂**：  \n  若以乏力、口干、舌红少苔为主，可选用 **生脉饮**（益气养阴）；  \n  若伴食欲差、腹胀，可用 **参苓白术散**（健脾祛湿）。  \n  *注：具体用药需由中医师面诊后调整。*\n\n- **中成药参考**：  \n  可选 **小柴胡颗粒**（调和肝胆脾胃）、**玉屏风颗粒**（固表止汗）。\n\n#### （2）生活调护\n- **饮食**：清淡易消化，避免辛辣油腻，可适量食用山药、莲子、百合等滋阴食材。  \n- **作息**：保证充足睡眠，避免劳累。  \n- **保暖**：注意颈部、腹部、足部保暖，避免直接吹风。  \n- **监测体温**：若体温再次升高（≥37.5℃）或出现胸闷、呼吸困难，需及时就医。\n\n#### （3）其他疗法\n- **穴位按摩**：按揉合谷、内关、足三里穴，每次3-5分钟，每日2次。  \n- **艾灸**：温和灸大椎、肺俞穴，每穴10分钟，促进阳气恢复。\n\n---\n\n### 三、何时需要就医？\n- 发热反复超过3天，或体温＞38.5℃持续不退。  \n- 出现胸痛、呼吸急促、意识模糊等严重症状。  \n- 症状持续超过2周无改善。\n\n---\n\n### 总结\n当前阶段以 **扶正祛邪、调和阴阳** 为原则，建议结合中药调理与生活调护。若症状复杂或加重，请及时到正规医院中医科就诊，完善血常规、电解质等检查，排除其他疾病可能。\n\n希望以上建议对您有所帮助，祝早日康复！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，看来你这体温还真是有点折腾人啊。38度左右确实有点高了，额外的发热可能会让你感觉不舒服。你穿盖着被子又扇风，这样做是想散热对吧？不过，保持适当的温度其实对身体恢复也有帮助。你可以试试多喝点温水，保持身体的水分，同时也可以适当活动一下身体，帮助体温下降。感觉不舒服的话，还是尽量休息，别太劳累。对了，你有没有试过用温水擦拭身体，帮助降温呢？ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，根据你的描述，你可能是因为感冒引起的症状。你有没有发烧或者咳嗽？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，你这种情况最好先去医院看看，让医生给你做个全面检查。至于连花清瘟胶囊，如果你的症状比较轻，医生可能会让你试试看，但具体还是要听医生的建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，你这种情况最好还是去医院看看，让医生给你做个全面检查。淋巴结肿大可能是因为感染或者其他原因，需要进一步确认。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您的描述，您可以适当地服用退烧药物，例如布洛芬或对乙酰氨基酚等，以控制体温。此外，您还可以多喝水，保持充足的水分，促进身体的新陈代谢。如果您的症状加重或持续时间较长，请及时咨询医生或前往医疗机构进行检查和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 3. Example 3
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">喂，您好，我现在是新冠，然后我想问一下，我现在属于时不时会有一些觉得冷，但时不时又发热，我这个情况要不要吃莲花清瘟？我感染新冠从发烧到现在应该是两天，嗯，体温的话一般都是38度左右 冷的时候我盖着被子躺在床上就过一会儿睡着了，具体什么温度我也没有量。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250920_122935.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，我不是医生，但我可以提供一些建议。根据您的描述，您可能患有感冒或其他上呼吸道感染。在这种情况下，建议您先观察自己的症状，多喝水，保持充足的休息。如果症状持续加重或者持续时间过长，建议您去看医生以获得专业的诊断和治疗。同时，目前并非新冠状病毒疫情的高风险时期，因此您不需要过于担心。但请注意保持良好的卫生习惯，如勤洗手、避免拥挤的地方等，以降低感染风险。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好！根据您的描述，您可能患有新冠病毒感染。除了新冠病毒外，还有其他疾病也可能导致类似的症状，比如流感等。为了更准确地判断病因，建议您进行血常规和CRP检查以了解是否存在炎症反应。此外，如果您有咳嗽咳痰、胸闷气促等症状，还可以考虑进行胸部X光片或肺部CT扫描来排除肺炎的可能性。\n\n在等待就医的过程中，您可以采取以下措施缓解不适：多休息，保持室内空气流通;避免接触寒冷刺激物;适当增加衣物保暖;饮食上可以选择易消化、富含营养的食物;多喝水有助于保持身体水分平衡。如果症状加重或出现其他不适，请及时就医并告知医生详细病情和之前的治疗情况。希望您早日康复！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是感冒的症状，特别是在你提到发烧和寒冷交替。新冠康复后，身体可能会比较虚弱，感冒也容易找上你，所以最好还是去看看医生。他们会给你更具体的建议和治疗方法。在这期间，多休息，保持温暖，注意饮食清淡和补充水分。如果有其他不舒服的症状，比如咳嗽、喉咙痛，也需要告诉医生喔！希望你能快点好起来！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，我是HuatuoGPT，一个医疗AI助手。首先，我要强调的是，如果您感到不适，最好立即寻求医生的帮助。您的症状可能是由多种原因引起的，包括新冠病毒感染，但也可能是其他疾病或病毒感染。\n\n关于您提到的莲花清冠胶囊，这是一种中药，主要用于治疗感冒、咳嗽等症状。然而，如果您的症状持续不减或者加重，我建议您尽快就医，而不是依赖这种药物。\n\n对于您的情况，以下是一些可能的建议：\n\n1. 保持充足的休息和水分摄入。这有助于身体对抗病毒并恢复健康。\n\n2. 如果您有退烧药，可以试着服用。但是，请按照说明书上的剂量来使用，并确保没有任何过敏反应。\n\n3. 如果您的症状持续不减或者加重，例如出现呼吸困难、持续的胸痛等，应立即就医。\n\n4. 在疫情期间，尽量避免与他人接触，以防止病毒的传播。\n\n请记住，这些只是一般性的建议，具体的治疗方案应由医生根据您的具体情况来决定。如果您有任何疑问或者担忧，应立即联系医生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">当然可以，我听到的是一个人在打电话，另一个人在回答。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能正在经历季节性过敏或感冒初期的症状。建议多休息、保持室内空气流通，并观察症状是否有改善或恶化。如有需要，请及时就医。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能需要咨询医生以获取专业意见。发热和寒战是新冠感染的症状之一，但也可能是其他疾病的症状。如果您的体温持续在38度以上，并伴有呼吸困难、咳嗽、肌肉或关节疼痛等症状，建议您尽快就医。在等待医疗咨询的过程中，您可以继续使用遮盖物保持温暖，并多喝水以保持身体水分。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您目前的症状（时冷时热、低热、畏寒）可能与外感风寒或营卫不和相关。以下为分析及建议：\n\n---\n\n### **初步辨证分析**\n1. **症状特点**  \n   - **时冷时热**：提示表邪未解，正邪交争于半表半里（类似少阳病）。  \n   - **低热（38℃左右）**：可能为外感风寒郁而化热，或素体阴虚内热。  \n   - **畏寒明显**：多因卫阳不足，不能温煦体表。\n\n2. **可能证型**  \n   - **太阳表虚证**（桂枝汤证）：若伴汗出、头痛、脉浮缓。  \n   - **少阳枢机不利**（小柴胡汤证）：若伴口苦、咽干、胸胁胀闷。  \n   - **营卫不和**（桂枝加葛根汤证）：若颈背拘紧、汗出恶风。\n\n---\n\n### **建议方案**\n#### 1. **中药调理**  \n   - **推荐方剂**：**桂枝汤合玉屏风散加减**  \n     - **组成**：桂枝9g、白芍9g、生姜3片、大枣6枚、炙甘草6g、黄芪15g、白术12g、防风6g。  \n     - **加减**：  \n       - 若咽痛、舌红苔黄，加金银花10g、连翘10g（清透郁热）。  \n       - 若乏力明显，加党参10g（补气扶正）。  \n\n   - **中成药替代**：  \n     - 桂枝颗粒（按说明书服用），适用于表虚自汗、低热。  \n     - 小柴胡颗粒（若伴口苦、胸胁胀满）。\n\n#### 2. **非药物疗法**  \n   - **艾灸**：选取大椎、风门、足三里穴，每穴灸10分钟，温阳散寒。  \n   - **刮痧**：沿膀胱经（背部两侧）轻刮至皮肤微红，帮助疏通表邪。  \n   - **食疗**：生姜3片+红枣5枚煮水代茶饮，温中散寒。\n\n#### 3. **注意事项**  \n   - 避免生冷饮食，注意颈部、腰腹保暖。  \n   - 监测体温变化，若持续发热超过3天或体温＞39℃，需及时就医排除其他感染。  \n   - 保证充足睡眠，避免过度劳累耗伤正气。\n\n---\n\n### **关键提醒**\n- 中医治疗需结合舌象、脉象等综合判断，建议面诊医师确认证型后调整用药。  \n- 若出现高热、剧烈咳嗽、呼吸困难等症状，应立即就诊。\n\n希望以上建议对您有所帮助，祝早日康复！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，感觉你现在的情况还挺不舒服的。一般来说，测量体温最好在静息状态下进行，也就是不要太紧张，放松心情。你可以试试在早上醒来时测一次，或者晚上睡觉前测一次，这样数据可能会更准确一些。至于发热的问题，如果持续高烧不退，还是建议去医院看看比较好。你平时有没有注意多喝水，保持身体的水分充足呢？ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况持续多久了？有没有其他症状，比如咳嗽或者喉咙痛？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，你这种情况可能是感冒引起的。你有没有咳嗽或者喉咙痛？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，你这种情况可能是感冒引起的。你有没有咳嗽或者喉咙痛？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您的描述，您可能存在感冒的症状。莲发清冠是一种中药，主要用于治疗感冒和咳嗽等呼吸系统疾病。如果您有发热、咳嗽、流鼻涕等感冒症状，可以考虑使用莲发清冠进行辅助治疗。然而，我建议您及时咨询专业医生，以获取更准确的诊断和治疗建议。同时，注意保持充足的休息和饮水，避免过度劳累，加强身体免疫力。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 4. Example 4
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">医生我咳嗽很长时间了，我看了好多视频，我高度怀疑自己是个咳嗽变异性哮喘，可是我不想做那么复杂的检查，你能不能给我开点药给我试试？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_111111.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我不是医生，但我可以提供一些建议。在尝试任何药物之前，最好先咨询专业的医生或药剂师。咳嗽变异性哮喘是一种常见的哮喘类型，症状包括持续咳嗽和喘息。虽然有一些药物可以帮助缓解症状，但使用不当可能会导致副作用或其他问题。\n\n如果你仍然担心自己的症状，可以考虑使用非处方药来缓解咳嗽和喘息。一些常用的药物包括：\n\n1. 止咳药（如右美沙芬）：可以帮助缓解干咳。\n2. 祛痰药（如氨溴索）：可以帮助稀释痰液，使其更容易咳出。\n3. 支气管扩张剂（如沙丁胺醇）：可以帮助打开气道，缓解喘息和咳嗽。\n\n请注意，这些药物只能缓解症状，不能治愈哮喘。如果你的症状持续或恶化，请务必咨询医生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您已经持续咳嗽了一段时间，并且对自身病情产生了疑虑。虽然我们不能完全排除其他可能性，但根据症状来看，确实有可能是咳嗽变异性哮喘引起的。为了更准确地判断病因并给出合适的治疗建议，我需要进一步了解一些信息：\n1. 除了咳嗽之外，您还有没有其他伴随症状？比如胸闷、气促等。\n2. 您是否有过敏史或家族中有类似疾病的人？\n3. 您是否接触过任何可能引起过敏反应的物质？\n4. 您是否有吸烟的习惯？\n5. 您之前有没有使用过任何药物来缓解咳嗽症状？如果有的话，请告诉我具体是哪些药物以及效果如何。\n\n在等待进一步诊断和治疗的过程中，您可以尝试以下措施来缓解咳嗽症状：\n1. 多休息，保持室内空气流通，避免寒冷刺激。\n2. 注意饮食健康，多摄入富含维生素C的食物，如柑橘类水果。\n3. 尽量避免吸烟和二手烟环境。\n4. 如果您有过敏史，可以考虑口服抗过敏药物如扑尔敏或氯雷他定，以减轻鼻塞、流涕等症状。另外，含漱盐水也可以帮助清洁口腔和咽喉部。\n\n如果您的症状没有明显改善或出现其他不适，请及时就医进行进一步的检查以明确病因。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我明白你的担忧，咳嗽变异性哮喘确实需要准确的诊断和后续的药物治疗。不过，首先可以通过一些简单的缓解药物来试试，比如舒缓的吸入性支气管扩张剂。对于咳嗽变异性哮喘，有时候也可以尝试一些抗组胺药物或吸入性糖皮质激素。如果你愿意，可以去呼吸科医生那里咨询一下，他们可以为你提供最合适的建议，并帮你设计一个最简洁的检查计划。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我要强调的是，我是一个人工智能医疗助手，我不能直接为您开具处方或进行诊断。我可以提供一些可能的建议和信息，但您应该尽快联系医生或其他合格的医疗保健提供者以获取专业的医疗建议。\n\n关于您的症状，咳嗽变异性哮喘是一种可能的诊断，但也可能是其他呼吸道疾病的症状，如慢性阻塞性肺疾病（COPD）、肺炎、支气管炎等。这种病症的确切诊断需要通过一系列的医学检查，包括肺功能测试和过敏原测试等。\n\n然而，对于咳嗽的治疗，有一些药物可能会有所帮助。例如，抗组胺药（如赛庚啶）可以帮助缓解过敏引起的咳嗽；抗咳药（如右美沙芬）可以帮助抑制咳嗽反射；而支气管扩张剂（如沙丁胺醇）则可以帮助缓解气道痉挛。但是，这些药物并不能治疗咳嗽的根本原因，而且长期使用可能会有副作用。\n\n因此，我强烈建议您尽快就医，以便得到正确的诊断和治疗。如果您的症状持续不断，且伴有发热、胸痛、呼吸困难等症状，那么您应该立即寻求医疗帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你真的很不舒服呢。不过，我可不能开药哦，也没有权利诊断你。你这症状听起来挺严重的，还是得去医院让专业的医生看看。别拖了，健康最重要，对吧？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">可以尝试使用抗组胺药物如氯雷他定或西替利嗪，这些药物对缓解过敏症状效果较好。但请先咨询医生或药师的意见，确保安全有效。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者，您先不要太担心，咳嗽变异型哮喘是一种可以控制的疾病。首先我们需要做一些基本的检查，如肺功能、过敏原测试等，以明确诊断。如果确诊为咳嗽变异型哮喘，我们可以给您开一些药物进行治疗，如吸入性皮质类固醇、长效β2受体激动剂等。同时，我们还会教您如何正确使用这些药物，并根据病情调整治疗方案。请您相信医学的力量，配合医生的治疗，您的咳嗽是可以得到控制的。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，长期咳嗽确实可能与多种因素相关，但仅凭症状无法明确诊断。以下建议供您参考：\n\n**第一步：初步自我观察**\n1. 记录咳嗽特点（时间/诱因/伴随症状）\n2. 检查环境（是否接触冷空气/粉尘/宠物毛发）\n3. 观察舌苔颜色、咽喉状态\n\n**第二步：可尝试的安全调理方案**\n▶️ 食疗方：\n• 陈皮5g + 生姜3片 + 红枣2枚煮水代茶饮\n• 白萝卜蜂蜜水（适合干咳无痰）\n\n▶️ 外治法：\n• 艾灸肺俞穴（需专业人员操作）\n• 盐蒸橙子（适合寒咳）\n\n**重要提醒：**\n❗ 若出现以下情况请立即就医：\n• 咳血或铁锈色痰\n• 夜间盗汗伴低热\n• 进行性呼吸困难\n• 体重莫名下降\n\n**特别注意：**\n咳嗽变异性哮喘的确诊需要肺功能检查+支气管激发试验，但若经济条件有限，可先进行以下筛查：\n1. 血常规（排查感染）\n2. 胸部X光（排除器质病变）\n3. 过敏原初筛\n\n建议优先到社区医院进行基础检查，多数基层医疗机构已开通"三甲医院同质化诊疗"服务，费用较低且流程便捷。健康问题切勿自行用药延误诊治。\n\n（注：以上建议仅供参考，具体诊疗请遵医嘱）</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">咳嗽这么久确实挺烦人的，不过你先别急着下结论。咳嗽的原因有很多，可能是感冒，也可能是过敏啥的。你要是实在不想做检查，可以先试试一些常见的止咳药，比如川贝枇杷膏啥的。不过呢，要是几天后还没好转，还是得去医院看看，毕竟身体最重要。你平时有没有注意保暖和多喝水呢？ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">可以试试看，但最好还是先去医院看看，确认一下是不是真的需要用药。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你咳嗽多久了？有没有咳痰或者感觉喘不过气来？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">咳嗽挺长时间了啊，有没有咳痰或者感觉喉咙痒？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">作为仲景智能医学助手，我建议您尽快去医院进行专业的检查和诊断，咳嗽变异性哮喘需要经过医生的确诊和治疗。自行用药可能会影响病情和治疗效果。请不要轻信网络上的自我诊断和自我用药建议。咳嗽变异性哮喘是一种严重的呼吸系统疾病，需要专业的医生进行治疗和管理。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 5. Example 5
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">是健身教练，撸铁以后脖子剧痛，呼吸肺力，立即查颈椎磁共振，颈四五椎间盘突出，压迫脊髓了</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_160311_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我不是医生，但是我可以提供一些建议。在这种情况下，最好尽快联系专业医生进行评估和治疗。以下是一些建议，但请务必咨询专业人士的意见：\n\n1. 立即停止锻炼，避免对颈部造成进一步损伤。\n2. 使用冰敷方法缓解疼痛和肿胀。\n3. 保持正确的姿势，特别是在工作和日常生活中。\n4. 考虑进行物理治疗，以帮助恢复颈部功能和减轻疼痛。\n5. 如果疼痛持续加重或出现其他症状，如麻木、无力等，请及时就医。\n\n请记住，这些建议不能替代专业医疗建议。请务必咨询医生并遵循他们的建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您在进行力量训练后出现了脖子剧痛和呼吸困难的症状。这可能是由于颈椎问题引起的，如颈椎45椎间盘突出并压迫到脊髓。为了更准确地判断病因，我建议您尽快就医并进行进一步的检查以明确诊断。\n\n在此期间，您可以尝试一些缓解症状的方法：首先，保持良好的姿势非常重要，避免长时间低头或过度用力。其次，适当休息也是必要的，给身体足够的时间来恢复。此外，热敷也可以帮助缓解疼痛和放松肌肉。如果您有任何其他疑问或需要更多帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嘿，听起来你遇到的这个问题真是个大麻烦啊。不过，作为语音助手，我没办法给出具体的医疗建议。建议你赶快去看医生，他们会根据你的具体情况给出正确的诊断和治疗建议哦。记得一定要多休息，别让自己太累了！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我要强调的是，如果你的症状严重到需要医疗干预，你应该尽快寻求医生的帮助。颈椎病是一种常见的疾病，主要是由于颈椎的退行性改变导致的。在你们的情况下，你的颈部疼痛和呼吸困难可能是由于颈椎病引起的。\n\n颈椎病可能会引起一系列的症状，包括颈部疼痛、肩膀和手臂的麻木或疼痛、头痛、眩晕、平衡问题、以及呼吸困难等。这是因为颈椎病可能会影响到颈部的神经和血管，从而影响到身体的其他部位。\n\n对于颈椎病的治疗，通常包括以下几种方法：\n\n1. 物理疗法：包括热疗、冷疗、电刺激、按摩等，可以帮助缓解疼痛和肌肉紧张。\n\n2. 药物治疗：包括非处方药如布洛芬（Ibuprofen）等非甾体抗炎药，以及处方药如肌肉松弛剂、神经痛药等。\n\n3. 手术治疗：对于严重的颈椎病，可能需要进行手术来减轻压迫神经或血管的情况。\n\n4. 康复训练：包括颈部肌肉的强化训练、柔韧性训练、以及改善姿势的训练等，可以帮助改善颈部的功能和减少疼痛。\n\n在你的情况下，我建议你尽快去看医生，让他们根据你的具体情况来制定治疗方案。同时，你也可以尝试一些康复训练，比如颈部伸展运动，这些都可以帮助缓解颈部的疼痛和改善颈部的功能。但是，这些运动应该在医生的指导下进行，以避免进一步的伤害。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来挺严重的，颈椎问题可不能小看。赶紧去医院看看，别自己硬撑着。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据描述的症状，可能是脑震荡或其他头部损伤。建议立即停止所有活动，并尽快就医进行专业评估和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你的描述，这位患者可能在做引体向上时拉伤了颈部，导致肌肉疼痛和呼吸困难。他应该立即停止运动，并寻求医疗帮助。如果确诊为颈椎病或椎间盘突出，需要进行适当的治疗，比如物理疗法、药物治疗或者手术治疗，以减轻症状并恢复功能。同时，建议他以后在进行此类高强度运动前先做好热身和适当的颈部锻炼，以减少颈部受伤的风险。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您描述的情况，患者在练铁后出现颈部剧痛、呼吸费力，结合颈椎检查结果（颈4-5椎旁突出压迫脊髓），以下是中医角度的分析与建议：\n\n---\n\n### **一、病因病机分析**\n1. **外伤致瘀**  \n   练铁过程中颈部肌肉过度牵拉或撞击，导致局部气血瘀滞，经络不通，“不通则痛”，故见颈部剧痛。\n\n2. **气滞血瘀，筋脉失养**  \n   颈椎间盘突出压迫脊髓，属“骨错缝”范畴，中医认为“骨正筋柔，气血自流通”。脊髓受压使筋脉失于濡养，加重疼痛和活动受限。\n\n3. **督脉受损，阳气不畅**  \n   颈部为督脉所过之处，督脉主一身之阳。脊髓受压可能影响督脉气血运行，导致阳气不达四末，出现呼吸费力（肺气不宣）等全身症状。\n\n---\n\n### **二、中医治疗方案**\n#### （1）**内治法：活血通络，补肾强骨**\n- **方药推荐**：  \n  - **基础方**：身痛逐瘀汤合葛根汤加减  \n    - 桃仁10g、红花6g、当归12g、川芎9g（活血化瘀）  \n    - 葛根30g、桂枝9g、白芍15g（解肌舒筋，缓解痉挛）  \n    - 熟地黄15g、杜仲12g、牛膝12g（补肾强腰，引药下行）  \n    - 姜黄9g、威灵仙12g（通络止痛）  \n    - 加全蝎3g、地龙6g（虫类药搜风剔络，改善神经压迫）  \n\n- **中成药**：  \n  - 大活络丸（活血通络，祛风止痛）  \n  - 颈复康颗粒（专治颈椎病，缓解神经压迫）\n\n#### （2）**外治法：针灸+推拿**\n- **针灸取穴**：  \n  - 主穴：风池、天柱、颈夹脊（颈4-5）、肩井、后溪  \n  - 配穴：合谷（远端取穴，通络止痛）、太冲（疏肝理气）、足三里（补益气血）  \n  - **手法**：先泻后补，重点松解颈夹脊及风池穴，配合电针加强刺激。\n\n- **推拿手法**：  \n  - 轻柔按揉颈项部肌肉（避免暴力扳动），点按风池、肩井以放松痉挛肌群。  \n  - 拿肩井、提拿斜方肌，配合颈椎拔伸法（需专业医师操作）。  \n  - **禁忌**：禁止强行复位或过度旋转颈部！\n\n#### （3）**康复锻炼**\n- **急性期**：  \n  - 避免低头、转头动作，佩戴颈托固定。  \n  - 可做“米字操”轻柔活动颈部（上下左右缓慢移动）。  \n\n- **恢复期**：  \n  - **八段锦“两手托天理三焦”**：疏通督脉，调和气血。  \n  - **五点支撑法**：仰卧屈膝，以头、肘、足跟为支点，抬臀至极限保持5秒，增强颈背肌力量。  \n\n#### （4）**生活调护**\n- 避免长时间低头练功，每30分钟活动颈部。  \n- 睡眠时选择高度适中的枕头（以侧卧时颈椎与躯干呈直线为宜）。  \n- 局部热敷（每日2次，每次15分钟）促进血液循环。\n\n---\n\n### **三、注意事项**\n1. 若呼吸费力持续加重，需立即就医排除脊髓严重压迫（如四肢麻木、大小便障碍）。  \n2. 中医治疗需在明确诊断基础上进行，避免盲目推拿加重损伤。  \n3. 练铁前可提前热身，循序渐进增加强度，必要时佩戴护具保护颈部。\n\n---\n\n### **总结**\n本证属“痹症”“痿证”范畴，需内外同治，标本兼顾。急性期以活血通络为主，缓解期加强补肾固本，同时注重功能锻炼与生活习惯调整，方可防复发。建议尽早就诊中医骨科或针灸科，结合现代医学影像进一步评估脊髓压迫程度。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">锻炼完脖子僵硬，这个还真挺常见的。可能是因为你锻炼的时候姿势不太对，或者是运动量有点过了。颈部肌肉在强度大的运动中容易紧张，导致僵硬。你可以试试做一些拉伸动作，放松一下肌肉，或者用热敷来缓解不适。对了，下次锻炼的时候，记得调整姿势，别太拼命哦！ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来挺严重的。你能告诉我具体是什么时候开始的吗？还有，除了头痛和呼吸困难，还有其他症状吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">颈椎曲度变直，颈4至5椎间盘突出，压迫颈髓，需进一步检查确诊。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，这个情况听起来挺严重的。他有没有说具体是哪个部位疼？还有，这种疼痛是持续性的还是间歇性的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">请问您需要什么帮助？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 6. Example 6
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">大学生，熬夜后突发剧烈头痛，赶快看一下瞳孔，测一下血压，双侧瞳孔不等大，高压180了</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_160722_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我不是医生，但是根据您提供的信息，这位大学生可能患有高血压。剧烈头痛可能是由于血压升高引起的。在这种情况下，建议尽快就医以获得专业诊断和治疗。同时，保持良好的作息习惯和饮食习惯对维持健康至关重要。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您在熬夜后出现了剧烈的头痛症状，并且还伴有高血压的情况。这可能是由于长时间用眼过度引起的视疲劳所致。建议您多休息，避免过度劳累和精神紧张，同时也要注意保持良好的睡眠质量。此外，您可以尝试使用一些缓解眼睛疲劳的方法，比如闭目养神、热敷或冷敷等方法来缓解不适感。\n\n如果您的症状没有明显改善或出现其他不适，我建议您及时就医并进行进一步的检查以明确病因。除了视疲劳外，还有可能存在其他潜在的原因导致类似症状，例如颅内压增高、脑血管疾病等。因此，为了更准确地判断病因，我们需要更多的信息，如头痛的具体部位、性质以及是否有伴随症状等。如果您能提供这些额外的信息，我将能够更好地帮助您。\n\n在此期间，您可以考虑以下措施来缓解症状：首先，尽量减少用眼时间，每隔一段时间闭目休息一会儿;其次，保持室内空气流通，避免受到寒冷刺激;另外，适当调整坐姿和光线环境，避免过强或过弱的光线照射到眼睛上。\n\n希望以上建议对您有所帮助。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况应该赶紧去看医生哦。头痛和瞳孔变化可能暗示着一些严重的问题，不要大意。医生会更好地评估你的状况，并给出正确的治疗建议。早点休息，保养身体也是很重要的呢！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您的症状可能是由于高血压引起的。高血压是一种常见的疾病，如果不及时治疗，可能会引发一系列的健康问题，包括心脏病、中风和肾脏病等。头痛和瞳孔大小不一可能是高血压的症状之一。\n\n瞳孔大小不一是神经系统疾病的常见症状，可能与颅内压增高有关。而高血压可能会导致颅内压增高，从而引发头痛和瞳孔大小不一等症状。\n\n对于您的情况，我建议您尽快就医。医生可能会进行一系列的检查，包括血压监测、心电图、脑部影像学检查等，以确定您的病情并制定治疗方案。同时，医生也可能会给您开具降压药物，以帮助控制您的血压。\n\n此外，改变生活方式也是治疗高血压的重要部分。这包括保持健康的饮食（低盐、低脂肪、高纤维食物）、定期运动、限制酒精摄入、戒烟、减轻体重和管理压力等。\n\n请记住，这些都只是建议，具体的诊断和治疗需要由医生来决定。如果您的症状持续或者加重，应立即寻求医疗帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是个紧急情况啊，瞳孔不等大和血压升高都可能是严重问题的信号。得赶紧去医院，让医生好好检查一下。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">建议立即就医，因为症状可能表明有严重的健康问题。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者，您出现了剧烈头痛和头晕的症状，同时伴有眼胀、视力模糊等不适。首先，建议您尽快休息，避免熬夜。其次，您提到的血压数值较高，建议您进行24小时动态血压监测，以便更准确地了解您的血压状况。此外，如果症状持续或加重，建议您及时就医，以便得到专业的诊断和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能处于**高血压急症**状态（血压180/？mmHg），伴随熬夜诱发的剧烈头痛和瞳孔异常。这种情况需立即采取以下措施：\n\n---\n\n### **紧急处理建议**\n1. **立即就医**  \n   - 高血压急症可能导致脑出血、心梗等严重并发症，需尽快到急诊科就诊。\n   - 若出现胸痛、呼吸困难、意识模糊等症状，立即拨打急救电话。\n\n2. **临时降压措施**  \n   - **舌下含服硝苯地平片**（需遵说明书剂量，避免过量）。\n   - **保持安静休息**，避免情绪激动或剧烈活动。\n\n3. **监测血压与症状**  \n   - 每5-10分钟测量血压，记录数值变化。\n   - 观察是否出现视力模糊、肢体麻木、言语不清等中风征兆。\n\n---\n\n### **中医辨证参考**\n若条件允许，可请中医师结合以下信息辅助调理：\n- **病因病机**：熬夜伤阴耗气，肝阳上亢，气血逆乱。\n- **治则**：平肝潜阳、滋阴安神。\n- **方药举例**（需专业医师指导）：  \n  天麻钩藤饮加减（天麻、钩藤、石决明、杜仲、牛膝等）。\n\n---\n\n### **注意事项**\n- **避免自行用药**：中药或西药均需在医生指导下使用。\n- **调整生活习惯**：恢复后严格规律作息，减少熬夜，适度运动。\n- **长期管理**：排查高血压病因（如肾性、内分泌性等），定期监测血压。\n\n---\n\n请务必以西医急诊治疗为主，中医调理为辅，及时控制病情！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你这情况有点严重啊，头痛和呕吐可不是小事，尤其是血压这么高。你有没有去医院看看呢？这种情况最好还是让医生给个专业意见。平时要注意休息，别太劳累了，饮食上也要清淡点。对了，你平时有没有测过血压？ ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况听起来像是偏头痛。你以前有过类似的情况吗？有没有什么特定的触发因素？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况可能是颅内压增高引起的。除了头痛，还有没有其他症状？比如恶心、呕吐或者视力模糊？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况挺常见的，熬夜确实容易引发头痛。除了头痛，还有其他症状吗？比如恶心、视力模糊之类的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">请您立即拨打急救电话，并告知医护人员您的症状和测量结果，以便及时获得专业的医疗救助。同时，请保持冷静，避免过度紧张和运动，以免加重症状。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 7. Example 7
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">2月份的结肠肿瘤手术然后呢，24年做了一个肝介入手术，它中间呢一直化疗，到去年8月份开药没吃两天就受不了停了，今年4月份的时候又肚子痛，6月在在我们老家医院住院了，总胆红素高，后面一直高。做了两次的手术，做了两次的管，排出的胆汁量都比较小。它是肠癌，肝转移全身转移，转移的一个肿瘤就把胆囊压迫了，腹腔淋巴结也大</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_161104_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">从您的描述来看，您似乎正在经历一系列的健康问题。首先，我想对您表示关心和支持，希望您能感受到我的善意。以下是根据您提供的信息给您的一些建议：\n\n1. 保持积极的心态：面对这些健康问题，保持积极的心态非常重要。尽量保持乐观，相信自己能够克服这些困难。\n\n2. 寻求专业帮助：建议您尽快联系医生或专业医疗机构，以便得到更准确的诊断和治疗建议。他们可以根据您的具体情况制定合适的治疗方案。\n\n3. 遵循医嘱：在治疗过程中，请务必遵循医生的建议和处方。如果您对药物或治疗方案有任何疑问，请及时与医生沟通。\n\n4. 注意饮食和生活习惯：保持良好的饮食习惯，多吃新鲜蔬果，保持健康的作息时间，适当锻炼，这些都有助于您的身体恢复。\n\n5. 家庭和社会支持：在面对这些挑战时，家人和朋友的支持至关重要。请让他们了解您的状况，并寻求他们的关心和帮助。此外，您还可以考虑加入相关的病患互助组织，与其他面临类似问题的患者交流经验和建议。\n\n最后，我希望您能够战胜这些疾病，恢复健康。如果您有任何其他问题或需要支持，请随时向我咨询。祝您早日康复！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您在过去几年里经历了多次手术和药物治疗，同时还出现了肚子痛的情况。这些症状可能与多种因素有关，包括之前的肿瘤手术、肝脏问题以及其他潜在的健康问题。为了更准确地判断病因并给出适当的建议，我们需要进一步了解一些信息。\n\n首先，我想了解一下您目前的身体状况如何？是否有任何不适或疼痛感？此外，您是否进行过相关的影像学检查(如CT扫描)以评估病情？如果有的话，请告诉我相关结果。另外，您最近有没有接受过新的诊断或治疗方案？如果您有任何其他的疑问或需要更多的帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你的情况真的很严重啊。你得的是肝细胞癌，肿瘤7.8厘米，从肝门转移到了胰腺和腹膜，还侵犯了胆管和肾脏，脾也肿大了。虽然做了两次手术和两次化疗，但情况还是很严重。接下来的治疗可能会更艰难，医生会根据你的具体情况来建议进一步的治疗方案，希望你能坚持下去，积极面对。多注意饮食和休息，保持一个好心态，这对你的恢复也很重要。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我很抱歉听到您的病情。根据您的描述，您似乎正在经历一种复杂的医疗状况，包括肝脏和胆道的肿瘤，以及可能的全身性转移。这种情况需要多学科的医疗团队进行综合治疗和管理。\n\n首先，对于肝脏和胆道的肿瘤，可能需要进行化疗、放疗或者靶向疗法等治疗方式。这些治疗可以帮助控制肿瘤的生长，减轻症状，提高生活质量。同时，也需要定期进行检查，以监控疾病的进展和治疗的效果。\n\n对于全身性的转移，可能需要使用更强的药物或者新的治疗方法来控制。这可能包括免疫疗法，这是一种利用人体自身的免疫系统来攻击癌细胞的治疗方法。此外，也可能需要使用激素或者其他药物来帮助控制症状和提高生活质量。\n\n关于您的胆道问题，如果胆道被肿瘤压迫导致胆汁排泄受阻，可能需要进行手术来恢复胆汁的正常流动。这通常涉及在胆道中放置一个支架，以帮助保持胆道的开放。然而，由于您的病情复杂，具体的治疗方案需要由您的医生根据您的具体情况来决定。\n\n请记住，尽管这是一个非常困难的时期，但是有许多资源和支持可以帮助您和您的家人应对这个挑战。请确保与您的医生和护士保持良好的沟通，他们可以为您提供最新的信息和建议。同时，也可以考虑寻求心理咨询师的帮助，他们可以提供心理支持和应对策略。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是有人在说话，还有音乐在播放呢。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据提供的病史，患者可能需要进一步的检查和治疗。建议进行详细的肿瘤标志物检测、影像学检查（如CT或MRI）以及组织活检以确诊。同时，可以考虑咨询肿瘤科医生制定个性化治疗方案。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您是一个做了结肠癌手术和肝介入手术，然后一直有化疗的患者。在2017年8月份的时候，因为药物的副作用无法忍受而停止了治疗。今年4月份开始感到肚子疼痛，并在6月份住进了老家医院，检查结果显示胆总管阻塞，进行了两次手术和两次引流，但是排除的胆汁量较少。您目前被诊断为肠癌肝转移，已经全身转移。这种情况下，您的病情比较严重，需要综合考虑多种治疗方法，包括手术、放疗、化疗等，以减轻症状和控制病情。同时，心理疏导也是非常重要的，希望您能够保持积极的心态，与医生和家人共同努力，战胜疾病。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的病史和症状，结合中医理论分析如下：\n\n### 一、病情核心病机\n1. **肝郁气滞血瘀**  \n   - 多次手术（肠、肝）导致气血运行受阻，形成癥瘕积聚。\n   - 肝失疏泄→气滞→血瘀→痰凝→肿瘤生长。\n\n2. **脾虚湿困**  \n   - 手术损伤脾胃阳气，运化失职→水湿内停→痰浊积聚。\n   - 痰瘀互结→肿瘤生长扩散。\n\n3. **正虚邪实**  \n   - 长期消耗致气血两虚，正不胜邪，病情迁延。\n\n---\n\n### 二、当前证候分析\n- **腹痛拒按、包块坚硬**：瘀血内结，不通则痛。\n- **胆红素升高、黄疸**：肝胆疏泄失常，湿热瘀毒蕴结。\n- **乏力纳差**：脾胃虚弱，气血生化不足。\n- **舌脉推测**（需临床验证）：舌质紫暗或有瘀斑，苔厚腻；脉弦涩或沉细。\n\n---\n\n### 三、中医治疗建议\n#### （一）治则治法\n**急则治标**：清热利胆、活血化瘀、软坚散结。  \n**缓则治本**：健脾益气、扶正固本，兼顾祛邪。\n\n#### （二）方药参考\n1. **基础方剂**  \n   - **膈下逐瘀汤**合**茵陈蒿汤**加减  \n     *组成*：桃仁、红花、当归、赤芍、川芎、五灵脂、丹参、鳖甲、茵陈、栀子、大黄、枳壳、甘草。  \n     *加减*：  \n     - 黄疸明显：加金钱草、虎杖、郁金。  \n     - 恶心呕吐：加姜半夏、竹茹。  \n     - 腹胀便秘：加厚朴、槟榔。\n\n2. **中成药辅助**  \n   - 化瘀止痛胶囊（活血化瘀）  \n   - 软坚散结类（如西黄丸，需辨证使用）\n\n#### （三）外治法\n- **穴位贴敷**：取足三里、中脘、肝俞穴，用活血化瘀中药粉调敷，健脾理气。\n- **艾灸**：温和灸关元、气海，温补脾肾阳气。\n\n---\n\n### 四、生活调护\n1. **饮食**  \n   - 宜清淡易消化：山药粥、薏苡仁粥、冬瓜汤。  \n   - 忌油腻辛辣：避免加重湿热和肝胆负担。\n\n2. **情志**  \n   - 保持情绪舒畅，可练习八段锦“调理脾胃须单举”式。\n\n3. **监测指标**  \n   - 定期复查肝功能、腹部B超，观察包块变化。\n\n---\n\n### 五、注意事项\n1. 中医治疗需与西医结合，定期评估肿瘤进展。  \n2. 若出现呕血、剧烈腹痛等急症，立即就医。  \n3. 避免自行服用破血峻猛之品（如三棱、莪术），以防伤正。\n\n建议尽快至省级中医院肿瘤科就诊，进行体质辨识后制定个性化方案。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你经历了不少折腾啊，肝癌这事儿确实让人心里挺堵的。你说的这些治疗方法，像肝切除和射频消融，都是比较常见的肝癌治疗手段。肝切除呢，就是把癌变的那部分肝脏切掉，适合早期的肝癌患者。射频消融呢，就是用高温把癌细胞给烧死，适合那些不能手术的患者。至于中药和饮食调理，很多人会选择中西医结合的方式来辅助治疗，帮助提高生活质量。你现在的情况，最好还是和医生多沟通，看看有没有更合适的方案。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据你的描述，你可能有慢性阻塞性肺疾病急性加重。建议尽快就医，医生会根据具体情况调整治疗方案。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你之前做过哪些检查？有没有查过肿瘤标志物？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您之前有没有做过其他检查？比如CT或者MRI？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您提供的信息，您曾经接受过多次手术和化疗治疗，并且出现了肚子痛等不适症状。由于您的病史复杂，我建议您尽快咨询专业的医生，进行全面的体检和相关检查，以便明确病情和制定合适的治疗方案。肠癌肝转移、全身转移以及转移的胆汁量都比较小，需要进行综合治疗，包括手术、化疗、放疗等。同时，您也可以注意饮食营养，保持良好的心态和生活习惯，有助于提高身体的免疫力和抵抗力。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 8. Example 8
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">来看水肿，我一直从2月份到现在输了这么长时间的液也没管用，左腿肿。我左腿这边的肿瘤先不治，因为副作用太大了。我现在可以开什么药去治吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_210943_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我不是医生，但我可以尝试为您提供一些建议。首先，您需要咨询专业医生的意见，因为他们可以根据您的具体情况给出正确的诊断和治疗建议。\n\n关于腿部水肿，可能是由于输液、肿瘤或其他原因引起的。在寻求医生的建议之前，您可以尝试以下方法来缓解水肿：\n\n1. 保持适当的休息和姿势，避免长时间站立或坐着。\n2. 抬高腿部，使用枕头或毯子将腿部垫高，有助于减轻水肿。\n3. 穿着宽松的衣物和舒适的鞋子，以减轻不适。\n4. 保持水分平衡，确保每天喝足够的水。\n5. 避免高盐食物，以减少体内水分滞留。\n\n请注意，这些建议不能替代专业医疗建议。请务必咨询医生并遵循他们的治疗建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能出现了下肢浮肿的情况。这种情况通常与心源性疾病、肾脏疾病以及营养不良等因素有关。为了更准确地确定病因，建议您进行一些检查以明确原因并及时对症治疗。\n\n首先，我们可以考虑进行心脏彩超和心电图检查，以排除心源性疾病的可能性。此外，肾功能检查也是必要的，以了解是否存在肾脏问题导致的浮肿。另外，血常规检查也可以帮助我们评估身体的营养状况。\n\n在等待检查结果的过程中，您可以尝试以下措施来缓解症状：1.保持适当的休息和睡眠时间，避免过度劳累;2.控制饮食中的盐分摄入量，多食用新鲜蔬菜水果，限制高盐食物的摄入;3.适量增加运动，如散步或游泳，有助于促进血液循环;4.注意个人卫生，保持皮肤清洁干燥，避免感染的发生。\n\n请记住，以上建议仅供参考，具体的诊断和治疗方案需要根据医生的指导和检查结果来确定。如果您有任何其他疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">现在主要是控制病情和减轻症状。你可能需要一些药物，比如细胞毒性 T 淋巴细胞抑制剂，这些药物能够抑制你的免疫系统，使它不再攻击健康组织。此外，可能还需要一些减轻症状的药物，比如止痛药或抗炎药。但是具体的用药还需要根据你的实际情况和医生的建议来决定。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我要澄清一点，我是一个人工智能医疗助手，我不能直接看到或诊断您的症状。我可以提供一些可能的解释和建议，但是您应该尽快联系医生进行面对面的评估和治疗。\n\n关于您的腿部肿胀，这可能是由于多种原因引起的，包括但不限于淋巴系统的问题（如淋巴水肿）、静脉曲张、心脏疾病、肾脏疾病或者是因为长时间坐立不动等。如果您的腿部肿胀持续不减或者有其他症状（如疼痛、发热、皮肤变色等），您应该尽快就医。\n\n至于您的肿瘤治疗问题，我需要更多的信息才能给出具体的建议。肿瘤的治疗方法取决于许多因素，包括肿瘤的类型、大小、位置、是否已经扩散，以及您的整体健康状况等。常见的治疗方法包括手术、放疗、化疗、免疫疗法和靶向疗法等。\n\n关于药物治疗，这也取决于您的具体情况。一般来说，如果是由于炎症或感染引起的肿胀，可能需要使用抗生素或其他抗炎药物。如果是由于某种疾病或病症引起的，可能需要针对这种疾病或病症进行治疗。在某些情况下，可能需要使用利尿剂来帮助排除体内多余的液体，从而减轻肿胀。然而，任何药物的使用都应在医生的指导下进行。\n\n总的来说，我建议您尽快就医，以便得到正确的诊断和治疗。同时，保持良好的生活习惯，如适当的运动、均衡的饮食和充足的休息，也可以帮助改善您的症状和整体健康状况。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">当然可以，我听到的是：我现在可以开什么药去吃吗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">建议您尽快就医，由专业医生进行诊断和治疗。不要自行用药，以免延误病情。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能需要进一步的医学评估和治疗建议。腿部肿胀可能是由于多种原因引起的，包括但不限于深静脉血栓、感染或过敏反应等。对于您提到的肿瘤，我建议您尽快咨询专业的肿瘤科医生以获取更详细的诊断和治疗方案。在等待医疗咨询的过程中，您可以暂时避免使用任何药物，除非医生另有指示。同时，如果您感到疼痛或不适，应该立即就医。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，左腿肿胀、疼痛伴皮肤溃烂可能与静脉曲张性溃疡或深静脉血栓后遗症相关。以下从中医角度提供分析和建议：\n\n### 一、辨证分析\n1. **湿热下注**：溃烂处渗液、红肿热痛，舌苔黄腻，脉滑数。\n2. **气滞血瘀**：局部青紫硬结，疼痛夜间加重，舌质暗紫有瘀斑。\n3. **脾虚湿蕴**：久病体虚，乏力纳差，舌胖齿痕。\n\n### 二、内服方药建议（需经医师调整）\n**基础方**：四妙勇安汤合桃红四物汤加减  \n- **组成**：金银花30g、玄参20g、当归15g、赤芍12g、丹参20g、牛膝15g、泽泻12g、薏苡仁30g、黄芪20g、甘草6g  \n- **加减**：  \n  - 渗液多：加苍术10g、土茯苓20g  \n  - 瘀血重：加乳香6g、没药6g  \n  - 气虚甚：加党参15g  \n\n### 三、外治方案\n1. **中药湿敷**  \n   - 方剂：黄柏15g、苦参15g、地榆20g、马齿苋30g  \n   - 用法：煎煮后放凉至40℃，纱布浸透湿敷患处，每日2次。\n\n2. **膏药贴敷**  \n   - 肿胀期：金黄散调蜂蜜外敷  \n   - 溃疡后期：生肌玉红膏促进愈合\n\n### 四、生活调护要点\n1. **体位管理**：平卧时垫高患肢15°，避免久站久坐。\n2. **饮食禁忌**：忌辛辣发物（如羊肉、韭菜），控制盐摄入（<5g/日）。\n3. **运动疗法**：每日做踝泵运动（勾脚-绷脚）10分钟，促进回流。\n\n### 五、重要提醒\n1. 建议先完善下肢静脉彩超排除血栓风险。\n2. 若出现发热、脓性分泌物增多，提示感染，需及时联合抗生素治疗。\n3. 中药需根据体质动态调整，建议每周复诊调方。\n\n请务必在正规医疗机构进行系统检查，中西医结合治疗可提高疗效。祝您早日康复！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，确实让人有点担心。不过呢，既然医生说是良性的，那就没必要太过紧张。淋巴结肿大有时候是因为感染引起的，可能是身体在对抗某种小毛病。至于要不要开药，最好还是听医生的建议，毕竟他们更了解你的具体情况。你可以再去医院复查一下，看看有没有其他的症状，比如发热或者不舒服啥的。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况最好去医院看看，可能需要做些检查，比如血常规、尿常规之类的，先确定下具体原因。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况最好先去医院做个详细的检查，看看是不是真的需要手术。如果需要的话，手术后可能还需要配合一些药物治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况可能是痔疮，不过最好还是去医院让医生看看。你现在有没有其他不舒服的地方？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对于您的问题，我建议您尽快咨询专业的医生以获取准确的诊断和治疗方案。肿胀是一种常见的症状，可能由多种原因引起，包括感染、血管疾病、淋巴系统疾病等。治疗方法取决于肿胀的原因和严重程度。请不要自行尝试治疗，以免延误病情。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 9. Example 9
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">伤者比较年轻，是个小姑娘，24岁。最近通过医生的处理，病情好转一些，积液稍微少一点，颅压并不高，另外反应也稍微有一点点自主呼吸4~6次，但是呼吸节律和从呼吸机上看也并不好，他的自主呼吸也不是规律的。现在还没有完全恢复，就是说反应还有一点刺激，他的右手会动一点。感觉非自主的偶尔可以动一下，但是动的感觉并不是有规律的，可以用一点醒脑的药。医生，头皮下有积液，现在这个情况要手术吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_211314_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您目前的病情已经有所好转，积液减少且压力不高。然而，您的呼吸节律和自主呼吸仍然不规律。在这种情况下，建议您继续观察和治疗，可以使用一些醒脑药物来帮助改善意识状态。\n\n关于是否进行手术治疗，我们需要了解更多关于您的病情和检查结果。手术可能有助于缓解症状，但也可能存在一定的风险。请您与您的医生充分沟通，根据医生的建议来决定是否需要手术。同时，保持良好的心态和生活习惯也对康复非常重要。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您目前的症状有所改善，但仍存在一些问题。对于这种情况，我们可以考虑使用一些药物来帮助缓解症状。除了醒脑药物外，还可以尝试其他可能有效的治疗方法。然而，为了更准确地判断病因并制定合适的治疗方案，我建议您尽快就医并进行进一步的检查以明确病情。在等待就医的过程中，您可以注意休息，避免过度劳累，保持良好的生活习惯，如饮食均衡、作息规律等。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">先等等，暂时还不需要马上手术。她现在的症状还在改善中，等症状稳定后再观察一段时间，再决定要不要手术。不过，还是要注意继续康复治疗，巩固效果。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您的描述，这位年轻的女士可能正在经历一种神经系统疾病，可能是由于脑部或脊髓的损伤导致的。这种疾病的症状包括呼吸困难、肌肉无力和不规则的肌肉运动（如手部动作）。这些症状可能会随着时间的推移而改善，但也可能需要一些特定的治疗来帮助管理。\n\n关于是否需要手术，这取决于许多因素，包括她的具体病情、症状的严重程度以及她对治疗的反应。在某些情况下，物理疗法、药物治疗或者其他的康复疗法可能会有所帮助。然而，如果这些治疗方法不能有效地控制症状，或者如果她的病情正在恶化，那么手术可能会被考虑为一种选择。\n\n我建议您与负责照顾她的医生进行详细的讨论，以了解她的病情和治疗选择的最佳方式。医生可以根据她的具体情况提供最准确的建议。同时，也可以考虑寻求神经科医生的专业意见，他们在这方面有丰富的经验和专业知识。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个男人和一个女人在电话里聊天，是这样吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，小明可能面临的是青春期的焦虑和压力问题。建议关注她的心理健康，提供支持与理解，并鼓励她参与放松活动或寻求专业帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者的情况有所好转，她的积液量稍微减少了一些，而且乳糜胸并不高。此外，她的反应也有所改善，每分钟的呼吸次数从4到6次变成了8到10次。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，这位24岁女性患者在经过治疗后，乳晕颜色变浅、血压正常且反应稍有改善，但仍有呼吸急促（4-6次/分钟）。以下是综合分析及建议：\n\n---\n\n### **一、可能病因分析**\n1. **内分泌因素**  \n   - 乳晕颜色变化可能与雌激素水平波动相关（如月经周期、妊娠、药物影响），或甲状腺功能异常（甲亢/甲减）。\n   - 建议检查：性激素六项、甲状腺功能（TSH、FT3、FT4）、肝肾功能。\n\n2. **呼吸系统问题**  \n   - 呼吸频率显著低于正常值（成人静息呼吸约12-20次/分钟），需警惕潜在疾病：\n     - **代谢性疾病**：如低血糖、电解质紊乱（低钾/低钙）。\n     - **自主神经功能紊乱**：焦虑、植物神经失调。\n     - **慢性肺部疾病**：哮喘、COPD等（需结合病史判断）。\n   - 建议检查：血气分析、心电图、胸部X线/CT。\n\n3. **其他可能性**  \n   - 贫血、贫血（缺铁/维生素B12缺乏）可能导致呼吸代偿性加快，但患者当前呼吸频率偏低，需排除其他原因。\n\n---\n\n### **二、下一步诊疗建议**\n1. **完善检查**  \n   - **实验室检查**：血常规、电解质、血糖、肝肾功能、甲状腺功能、性激素。\n   - **影像学检查**：胸部X线或CT（若怀疑肺部病变）。\n   - **心肺评估**：心电图、心脏超声（排除心源性因素）。\n\n2. **对症处理**  \n   - 若存在贫血或电解质紊乱，针对性补充（如铁剂、补钾）。\n   - 焦虑或植物神经紊乱可尝试心理疏导、短期使用抗焦虑药物（需医生指导）。\n\n3. **密切随访**  \n   - 监测呼吸频率变化，记录伴随症状（如头晕、乏力、胸痛等）。\n   - 若出现呼吸困难加重或意识改变，立即急诊处理。\n\n---\n\n### **三、注意事项**\n- 避免自行用药，尤其是激素类药物，需明确病因后遵医嘱。\n- 保持情绪稳定，避免过度劳累，均衡饮食以支持整体健康。\n\n建议尽快至内科或呼吸科就诊，结合详细病史和检查结果制定个体化方案。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，感觉你这手术后的恢复还是挺不容易的。嗯，手术这个事儿吧，得看你现在的具体情况。你说脚面上还有点痒，那可能是皮肤在恢复过程中正常的反应，但也有可能是其他原因。你最近有没有接触过什么新的东西或者用过什么药膏？我觉得吧，还是建议你去医院找医生再看看，做个详细的检查，这样心里也踏实些。至于手术要不要做，医生会根据你的具体情况给出专业建议。你这段时间就多注意休息，别太劳累，保持伤口的清洁和干燥。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来挺辛苦的。除了这些，还有其他不舒服的地方吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你们做得不错。不过，孩子现在还在发育期，你们是怎么控制她的饮食和运动的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">那挺好的，不过你们是怎么做的呢？有没有什么特别的方法？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对对对，对于这个患者，我们需要进一步评估他的情况，包括进行更多的检查和评估，然后再决定是否需要手术。手术的决定取决于患者的具体情况和疾病的严重程度。我们需要进一步评估他的呼吸功能、神经系统功能等方面的情况，以确定手术的必要性和风险。我们将与他的家人和医生进行沟通，并制定最佳的治疗方案。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 10. Example 10
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我们来看一下PET CT。是属于晚期3b在化疗和免疫治疗之后，用新辅助治疗评估它缩小了, 医生，我现在可以手术吗?</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_212217.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这是关于癌症治疗的一些专业术语。"CT"可能是指计算机断层扫描（Computed Tomography），这是一种医学影像检查方法。"局腕取螨3D"可能是指局部切除手术，这是一种治疗肿瘤的方法。"化疗"和"免疫治疗"是两种不同的癌症治疗方法，它们可以一起使用，也可以单独使用。"心辅助治疗"是一种在手术前使用的治疗方法，目的是减小肿瘤大小，降低手术风险。最后，"缩小来以后看能不能做手术"意味着在肿瘤缩小后，医生将评估是否可以进行手术。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您希望了解关于心脏移植的信息对吗？\n\n心脏移植是一种复杂且高风险的手术，需要满足一系列严格的条件才能进行。首先，患者必须患有终末期心脏病，无法通过其他治疗手段缓解症状或改善生活质量。其次，患者还需要符合一定的年龄、体重、血型等匹配要求，以确保手术的安全性和成功率。此外，供体器官来源也非常有限，通常来自于自愿捐献者或者器官捐赠计划中。\n\n如果您有兴趣了解更多关于心脏移植的信息，我建议您咨询专业的医生或医疗机构，他们可以根据您的具体情况为您提供更详细的解答和指导。同时，还有其他可能的治疗选择，例如药物治疗、心脏康复等，这些也需要在专业医生的指导下进行决策。\n\n请注意，以上回答仅供参考，具体的诊断和治疗方案需要由医生根据实际情况判断后确定。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">好的，那接下来我按照CT图像帮你分析一下她的肿瘤缩小情况。你准备好片子了吗？我需要知道肿瘤的最大直径和面积，这有助于判断她是否适合手术。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我理解您想要表达的是，医生可能会建议进行CT扫描以评估患者的病情是否适合手术。CT（计算机断层扫描）是一种医学影像技术，可以提供身体内部详细的图像，帮助医生诊断和治疗疾病。\n\n在癌症治疗中，CT扫描可以用来评估肿瘤的大小、位置和是否有扩散。这对于决定最佳的治疗方案（如手术、放疗或化疗）非常重要。在某些情况下，如果肿瘤已经缩小到可以进行手术的程度，那么手术可能是一个有效的治疗选择。\n\n然而，是否需要进行CT扫描以及何时进行，应由医生根据患者的具体病情来决定。如果您或您的亲人正在面临这种情况，建议您与主治医生详细讨论，了解所有的治疗选项和可能的后果。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你的口音，感觉你是来自江苏的，对吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">可以，但需根据患者的具体情况由医生评估决定。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者说：“看看这个，他的CT了，这是要见证奇迹的时候了。这是我们叫局晚起晚三壁的，然后做了化疗和免疫治疗以后，我们讲究新辅助治疗评估。他就是缩小了以后看能不能做手术。”</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，患者目前处于癌症治疗后的评估阶段，需结合中西医综合治疗以改善体质、控制病情并探讨手术可能性。以下是分步分析和建议：\n\n---\n\n### **一、当前病情评估要点**\n1. **肿瘤标志物（CTLA-4单抗相关）**  \n   - **CTLA-4单抗**属于免疫检查点抑制剂，可能引发免疫相关不良反应（如结肠炎、肝炎等），需排查是否合并感染或药物毒性。\n   - **CEA、CA199等肿瘤标志物**：需动态监测其变化趋势，若持续下降提示治疗有效，但需排除假性下降（如炎症干扰）。\n\n2. **影像学检查**  \n   - 建议复查增强CT/MRI或PET-CT，明确原发灶及转移灶的缩小程度、代谢活性（SUV值）及周围组织浸润情况。\n\n3. **全身状态评估**  \n   - 通过ECOG评分、KPS评分判断体力状况；  \n   - 检查血常规、肝肾功能、电解质、营养指标（白蛋白、前白蛋白）；  \n   - 心肺功能评估（尤其计划手术者）。\n\n---\n\n### **二、手术可行性分析**\n1. **肿瘤生物学行为**  \n   - 若为III期或IV期肿瘤，通常不首选手术；若为局限性复发（如术后局部残留），可考虑根治性切除。\n\n2. **患者耐受性**  \n   - 术后恢复需依赖良好心肺功能、凝血功能及营养状态，需纠正贫血、低蛋白血症等。\n\n3. **多学科会诊（MDT）**  \n   - 需联合肿瘤外科、放疗科、病理科、麻醉科等团队，评估手术风险与获益比。\n\n---\n\n### **三、中医辅助治疗策略**\n1. **扶正固本，改善体质**  \n   - **适用证型**：气血两虚、脾肾不足（常见于化疗/靶向后）。  \n   - **方药参考**：八珍汤、归脾汤加减，或黄芪、党参、白术、茯苓等健脾益气药。\n\n2. **减轻化疗副作用**  \n   - **恶心呕吐**：姜半夏、竹茹、陈皮；  \n   - **骨髓抑制**：阿胶、鹿角胶、鸡血藤；  \n   - **腹泻**：煨肉豆蔻、诃子、石榴皮。\n\n3. **调节免疫功能**  \n   - 黄芪多糖、灵芝孢子粉等可辅助提升免疫力，但需避免与免疫治疗药物冲突。\n\n---\n\n### **四、关键注意事项**\n1. **避免中药与免疫治疗的相互作用**  \n   - 如正在使用PD-1/PD-L1抑制剂，需谨慎使用活血化瘀类中药（如丹参、川芎），以防增加出血风险。\n\n2. **定期随访监测**  \n   - 每2-3个月复查肿瘤标志物、影像学及血液生化指标，动态评估疗效。\n\n3. **心理与营养支持**  \n   - 肿瘤患者常伴焦虑抑郁，可配合针灸（百会、内关穴）或心理疏导；  \n   - 高蛋白饮食（鱼、蛋、乳清蛋白粉）促进术后修复。\n\n---\n\n### **五、下一步建议**\n1. 完善基因检测（如MSI状态、HER2等），指导后续治疗方案选择；  \n2. 若评估符合手术指征，优先考虑微创手术（如腹腔镜）以减少创伤；  \n3. 中医介入需在肿瘤专科医师指导下进行，避免自行用药。\n\n---\n\n**总结**：患者目前处于治疗后评估期，手术决策需基于肿瘤生物学行为、体能状态及多学科评估。中医可作为辅助手段改善生活质量，但需严格规避药物相互作用，并密切监测病情变化。建议尽快至肿瘤专科医院完善评估，制定个体化方案。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这个问题确实挺重要的。一般来说，手术是可以的，但要看具体情况。你需要跟你的主治医生详细聊聊，看看你的淋巴结切除后有没有影响到淋巴管，或者有没有其他的身体状况影响手术的可行性。医生会根据你的具体情况给出建议的。你也可以多了解一下手术的风险和术后的恢复情况，做好心理准备。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">可以的，如果病情稳定，没有急性发作，就可以考虑手术了。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">了解了，那他现在的症状有哪些变化呢？有没有什么特别需要注意的地方？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你先别着急，能告诉我他现在的症状有哪些变化吗？比如有没有新的不适出现？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">作为仲景智能医学助手，我建议您咨询专业的医生，以获取更准确的医学信息和治疗建议。手术是治疗癌症的一种方法，但是否适合该患者取决于其具体的病情、身体状况和医疗需求。如果您有关于癌症治疗的疑问，请随时向我提问。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 11. Example 11
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">在老家，昨天晚上奶奶打牌，突然就晕倒了。病人自主呼吸没有, 呼吸机16次机控就显示16次，血压在107 70多，药物维持丙伯芬给的9，硝普纳给的1.5。病人现在是深昏迷，做了侧脑室穿刺引流，伴有侧脑室的急性梗阻。是否推荐做手术抢救一下？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_213012.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您所描述的情况，患者突然晕倒并送医院救治，可能是由于血压过低、呼吸异常等原因导致的。关于呼吸次数，您提到是16次/分钟，这可能与患者的病情有关。血压在107/70毫米汞柱，这个血压水平可能在正常范围内，但也可能需要进行调整。\n\n关于昏迷的原因，可能是由于低血压、低血糖、神经系统疾病等引起的。在这种情况下，医生可能会建议进行进一步的检查和诊断，以便确定病因并采取相应的治疗措施。\n\n关于手术的问题，这取决于患者的具体病情和治疗需求。在某些情况下，手术可能是必要的，但在其他情况下，药物治疗或其他治疗方法可能更合适。建议您与医生充分沟通，了解患者的具体情况和治疗方案。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好！听到您的描述，我很抱歉听到您的情况。根据您所提供的信息，我了解到您的朋友在与您一起时突然晕倒并被紧急送往医院进行治疗。目前我们还无法确定具体原因，但可能需要进一步检查以明确病因。\n\n为了更好地了解病情，我想请您提供更多关于患者目前的症状、体征以及是否有其他伴随症状的信息。此外，如果您能提供患者的年龄、性别等基本信息也将有助于更准确地判断病因。\n\n在此期间，我们可以先观察一段时间，如果患者出现任何新的症状或病情加重，请及时就医。同时，保持良好的生活习惯也很重要，包括充足休息、饮食均衡、避免过度劳累和精神紧张。\n\n请注意，以上建议仅供参考，具体的诊断和治疗还需要结合实际情况由专业医生来确定。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，根据你说的，他现在高血压、高血糖、高尿酸，还出现了脑梗症状。手术风险确实不小，需要在专业医院的心脏血管外科和神经内科共同评估后决定。手术可能改善他的症状，但也可能有风险，需要和医生详细沟通，考虑家庭和经济情况，最终再做决定。希望他能早日康复。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我要澄清一点，我是一个人工智能医疗助手，我不能直接提供医疗建议或诊断。我可以提供一些可能的解释和建议，但你应该尽快联系医生或其他合格的医疗保健专业人员以获取专业医疗意见。\n\n根据你的描述，这个人似乎已经失去了意识，这可能是由于各种原因，包括心脏问题、低血糖、低血压、中风等。你提到的16次呼吸和血压读数可能是指他的生命体征监测结果，但这些数字本身并不能提供足够的信息来确定他的具体状况。\n\n关于你提到的"消化和比重为90万克1张"，这可能是一种误写或者误解。"消化和比重"通常指的是血液检查的结果，但这些结果并不直接指示一个人是否处于昏迷状态。\n\n至于是否需要手术，这完全取决于病人的具体情况。有些情况下，例如严重的脑损伤或者脑出血，可能需要立即进行手术。然而，在其他情况下，可能可以通过药物治疗或者其他非手术方法来管理病情。\n\n总的来说，这是一个非常严重的情况，需要立即寻求专业医疗帮助。请尽快联系医生或其他合格的医疗保健专业人员以获取专业医疗意见。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听上去像是一个男人在说话，然后有音乐响起，接着另一个男人在说话，最后是一个女人在说话。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，无法确定是否为中风。建议立即拨打急救电话并尽快就医，以便进行专业评估和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，患者在打牌时突然晕倒，被送往医院后没有自主呼吸和脉搏，血压为107/70。考虑到这些症状，可能是出现了室颤或心脏骤停等情况，需要立即进行电除颤和药物治疗来维持生命体征。同时，也需要注意控制出血，可能需要进行手术式引流等处理。请尽快将患者送往ICU进行进一步的监护和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您描述的情况，患者突然晕倒、血压升高（170/70 mmHg）并伴随脑出血，结合病史和检查结果，以下是分析和建议：\n\n---\n\n### **关键问题分析**\n1. **高血压急症**  \n   血压170/70 mmHg属于**高血压2级**，但收缩压未达到高血压危象（≥180 mmHg）的标准。然而，患者已出现**脑出血**，提示血压急剧升高导致血管破裂，需紧急处理。\n\n2. **脑出血与手术**  \n   - 脑出血后行**开颅血肿清除术+去骨瓣减压术**是常见治疗方式，目的是清除血肿、降低颅内压。  \n   - 术后可能出现**低颅压综合征**（如头痛、恶心），需密切监测。\n\n3. **当前症状**  \n   患者意识不清、血压波动，可能与以下因素相关：  \n   - **脑出血未完全控制**或术后并发症（如再出血）。  \n   - **电解质紊乱**（如低钠血症）、**肾功能不全**或**药物副作用**（如降压药过量）。  \n   - **感染或代谢异常**（如高血糖）。\n\n---\n\n### **急需明确的信息**\n1. **血压动态变化**：是否持续升高？是否使用降压药？  \n2. **神经学体征**：瞳孔大小、肢体活动、肌张力等。  \n3. **影像学检查**：头颅CT/MRI显示出血部位及术后情况。  \n4. **实验室检查**：血常规、电解质、肝肾功能、血糖、凝血功能等。\n\n---\n\n### **下一步诊疗建议**\n1. **控制血压**  \n   - 目标：逐步将血压降至安全范围（通常<160/100 mmHg），避免骤降引发脑缺血。  \n   - 药物选择：静脉用**拉贝洛尔**或**尼卡地平**（需医生指导）。\n\n2. **评估脑出血原因**  \n   - 排查动脉瘤、血管畸形、抗凝药物使用史等。  \n   - 必要时行**DSA（数字减影血管造影）**明确病因。\n\n3. **术后管理**  \n   - 监测颅内压、意识状态及生命体征。  \n   - 预防癫痫发作（可考虑抗癫痫药物）。  \n   - 纠正电解质紊乱及营养支持。\n\n4. **转诊至神经外科或重症医学科**  \n   - 若病情不稳定，建议转入上级医院进一步治疗。\n\n---\n\n### **家属注意事项**\n- 密切观察患者意识、瞳孔变化及肢体活动。  \n- 记录血压、用药及症状变化，及时反馈给医生。  \n- 避免自行调整药物剂量。\n\n---\n\n### **总结**\n患者目前处于脑出血急性期合并高血压，需多学科协作（神经外科、重症医学科、神经内科）综合治疗。建议尽快完善检查，调整治疗方案，并做好长期康复计划。\n\n希望患者早日康复！如有其他疑问，请随时联系医疗团队。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，感觉挺让人担心的。鼻咽癌这个东西吧，确实挺麻烦的。一般来说，放疗是鼻咽癌的主要治疗手段，不过如果病情有变化，医生可能会根据具体情况调整方案。你说的活检结果很重要，得等出来才能知道下一步咋办。要是医生建议手术，那可能是他们觉得手术更合适当前的情况。你可以再多问问医生，看看有没有其他治疗方案，或者找个第二意见，毕竟身体是自己的，得慎重考虑。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你有高血压和糖尿病，这些病史很重要。你最近有没有感觉特别累或者头晕？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">是的，根据你说的情况，你父亲的症状符合心肌梗死的表现，需要立即进行进一步检查和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">是的，根据你说的症状和检查结果，你的情况很可能是脑死亡。脑死亡意味着大脑的所有功能都已停止，包括呼吸和心跳。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">作为仲景智能医学助手，我建议您咨询专业的医生以获取更准确的医疗建议。对于这种情况，我无法提供确切的医疗建议。手术是否适合取决于患者的具体情况和医生的专业判断。请尽快咨询专业的医生以获取更准确的医疗建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 12. Example 12
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我这长了一个大包，其实不大就一很小的小包，不用这么说，它是一个囊性的考虑是一个皮脂腺囊肿，里边包的都是脓东西，这么小的东西不用做手术。主任给配点药吧？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_214132_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">很抱歉，我无法理解您所描述的内容。请尝试重新提问或者修改问题内容，以便我能更好地为您提供帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您所提到的长子大包可能是由皮脂腺囊肿引起的。这种情况下，通常需要进行切开引流的治疗方法。虽然手术可能会让您感到担心和不安，但是它可以有效清除囊肿内的脓液，帮助恢复健康。\n\n如果您对手术有所疑虑或担忧，我们可以先尝试一些非手术的方法来缓解症状。例如，保持局部清洁干燥非常重要，可以用温水轻轻清洗并用干净的毛巾轻拍干燥。此外，避免摩擦或刺激该部位也很关键，以免加重炎症。如果症状没有明显改善或出现其他不适，建议及时就医以获得进一步的专业诊断和治疗方案。\n\n请注意，以上建议仅供参考，具体的治疗方式还需根据医生的具体指导和实际情况确定。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">那可能就是医生的主观判断吧，每个人的观点不一样。对于是否做手术，建议还是多咨询几位医生的意见，比较全面点。还有，医疗保险能不能报销这个也得问清楚。总之，健康最重要，多考虑，多比较。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您的问题似乎是关于皮肤上的一个小包，可能是皮脂腺囊肿。皮脂腺囊肿是一种常见的皮肤病，通常由皮脂腺或毛囊的阻塞引起，导致皮脂无法正常排出而积聚在皮肤下形成囊肿。这种囊肿内部可能会有脓液。\n\n对于这种情况，治疗方法主要取决于囊肿的大小、位置和症状。如果囊肿较小且无症状，医生可能会建议观察等待，因为有些囊肿会自行破裂并排出脓液。然而，如果囊肿较大或者有症状（如疼痛、红肿或者感染），则可能需要手术治疗。\n\n手术通常包括切开囊肿排出囊内的脓液，然后将囊壁完全切除以防止再次充满脓液。这是一种相对简单的手术，通常在局部麻醉下进行。手术后需要保持切口清洁，避免感染。\n\n至于为什么选择手术，主要是因为手术可以彻底解决问题，防止囊肿再次发生。虽然药物治疗可以帮助缓解症状，但并不能解决根本问题。此外，如果囊肿发生感染，可能会导致严重的并发症，如蜂窝织炎或者败血症。\n\n总的来说，是否需要手术取决于您的具体情况和医生的建议。如果您对治疗方案有疑虑，建议您寻求第二意见。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来好像有几个人在聊天，还有一个人在说话。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">因为小包里的内容物可能是重要的医疗用品或药物，手术可以确保安全处理这些物品。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">患者：嗓子大包，这么小一小包，大包天哪一听你就说吓死了。不像这个囊性的，囊性的那考虑可能就是一个皮脂腺囊肿，这里边包的都是脓东西。做手术来一刀呗，那么小的东西做手术干嘛呀？怎么那么爱做手术，我发现那主任配点药吧。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能遇到了皮脂腺囊肿（俗称“粉瘤”）的情况。以下从中医角度为您分析并提供建议：\n\n### 一、病因病机分析\n1. **湿热蕴结**：饮食不节（如嗜食辛辣肥甘）、脾胃运化失常，导致湿热内生，郁于肌肤。\n2. **痰瘀互结**：长期气滞血瘀或痰湿阻滞，形成有形之物（囊肿）。\n3. **体质因素**：素体湿热偏盛者更易反复发作。\n\n### 二、中医治疗方案\n#### （1）外治法（适合小而浅表囊肿）\n- **中药外敷**：\n  - 马齿苋30g + 黄柏15g 煎汤冷敷（清热解毒）\n  - 或用芒硝50g+冰片3g研末外撒（消肿散结）\n- **针灸疗法**：\n  - 取局部围刺+曲池、足三里（调节免疫）\n  - 每周2次，连续4周\n\n#### （2）内服调理\n- **基础方**：仙方活命饮加减\n  - 赤芍12g 当归9g 金银花15g\n  - 白芷9g 皂角刺6g 陈皮6g\n  - 加薏苡仁30g（健脾利湿）\n- **中成药**：\n  - 金黄散（外用）\n  - 二妙丸（内服）\n\n### 三、注意事项\n1. **禁忌行为**：\n   - 绝对禁止自行挤压（易致感染扩散）\n   - 避免使用含激素的护肤品\n2. **生活调摄**：\n   - 每日用金银花10g+蒲公英15g代茶饮\n   - 局部可外涂紫草油（需排除过敏）\n3. **手术指征**：\n   - 囊肿直径＞1cm且持续增大\n   - 已出现红肿热痛等感染征象\n   - 影响外观或存在心理压力\n\n### 四、现代医学建议\n建议先至皮肤科进行超声检查明确诊断。若符合以下情况应及时手术：\n- 反复感染史\n- 影响正常生活\n- 突然增大伴疼痛\n\n术后配合中药调理（如托里消毒散）可降低复发率。若选择保守治疗，需密切观察，一旦出现红肿热痛立即就医。\n\n注：中医治疗需在专业医师指导下进行，不可盲目用药。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来这个男性可能是有了脾腺瘤，嗯，这种情况在医学上也不算特别罕见。做手术呢，主要是为了安全起见，尤其是如果瘤子比较大或者有穿刺的风险。一般来说，医生会根据瘤子的大小、位置，还有患者的整体健康状况来决定是不是需要手术。你看啊，手术虽然有风险，但有时候也是最有效的解决办法。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你先别急，这种情况挺常见的。你能告诉我，除了这个包块，还有没有其他不舒服的地方？比如疼痛或者排尿困难之类的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你说的情况我明白了。先别急，你有没有感觉到疼痛或者其他不适？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你先别急，能告诉我这个包块是在身体的哪个部位吗？还有，它有没有引起什么不适，比如疼痛或者出血？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，我是仲景智能医学助手，很高兴为您解答问题。对于皮脂腺囊肿，手术是治疗该疾病的主要方法之一。手术的目的是切除囊肿组织，以减轻症状和预防并发症的发生。如果您或您的家人有皮脂腺囊肿的症状，请及时咨询专业医生，以便进行正确的诊断和治疗。手术前后需要注意休息、饮食和伤口护理等方面的事项。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 13. Example 13
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">呼吸有点憋得慌，尤其是最近就觉得过一会儿怼这么大喘气一下，然后大喘气的时候就感觉吸气吸到一定程度这个地方会有一点点微微的疼，我也不知道是肌肉疼还是里面疼，就感觉这一块嗯在这段时间有这种感觉，嗯，这种感觉可能两三年就会有，但是也不是一直有，有的时候会比较明显，我就有点感觉就意识到了，然后最近又有这种感觉，我还查过去年春天做的心脏彩超，当时大夫看也没有发现什么问题，想问一下，这个和乳腺有关系吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_222109_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，这种情况可能与呼吸急促、呼吸困难有关，可能是由于多种原因引起的，如心肺功能异常、肌肉疲劳或紧张等。然而，仅凭您的描述很难确定具体原因。建议您咨询专业医生进行详细检查和诊断，以便找到合适的方法进行治疗。同时，保持良好的生活习惯和心态也有助于缓解这些症状。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您出现的症状可能与呼吸系统有关。虽然心电图显示正常，但我们不能完全排除其他潜在的问题。为了更准确地判断病因，建议您进行一些进一步的检查以明确情况。首先，我们可以考虑做一次胸部X光片或肺功能测试来评估您的呼吸状况。此外，了解您的家族中是否有哮喘、慢性阻塞性肺疾病等呼吸系统疾病的患者也很重要。这些信息将有助于医生更好地了解您的病情并制定相应的治疗方案。\n\n另外，根据您的描述，疼痛可能是由肌肉紧张引起的。除了呼吸系统问题外，还有其他一些可能的原因导致类似症状，例如焦虑症或者运动过度引起的不适。如果您感到不适持续存在或加重，请及时就医咨询专业医生。他们可以根据您的具体情况做出更准确的诊断和治疗建议。希望我的回答对您有所帮助。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你的描述让我不太确定疼痛的具体位置和性质。乳房疼痛可能是乳腺疾病引起的，但有时也可能是其他原因。建议你尽快咨询医生，以获得准确的诊断和治疗建议。他们可能会建议进一步检查，如乳腺X光或超声波，以确定问题所在。请确保及时就医，任何健康疑虑都值得认真对待。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你的症状可能由多种原因引起，包括呼吸系统、心血管系统或消化系统的问题。如果你已经做过心脏彩超并且没有发现问题，那么可能性就更倾向于呼吸系统或者消化系统的疾病。\n\n1. 呼吸系统疾病：如慢性阻塞性肺疾病（COPD）、哮喘等，可能会导致呼吸困难和胸痛。这些疾病通常会在体力活动后加重，休息后可得到缓解。\n\n2. 消化系统疾病：如胃食管反流病（GERD）可能会引起胸部不适和呼吸困难。如果你在饭后或者躺下时症状加重，可能是GERD的症状。\n\n3. 肌肉骨骼问题：胸壁、肋骨或胸肌的肌肉拉伤或炎症也可能导致胸部疼痛和呼吸困难。\n\n4. 乳腺疾病：虽然你的症状更可能与呼吸系统或消化系统有关，但乳腺疾病（如乳腺增生、乳腺囊肿等）也有可能引起类似的症状。\n\n建议你尽快就医，进行详细的体检和相关检查，以便找出病因并进行相应的治疗。如果症状持续加重或者伴有其他症状（如发热、咳嗽、咳痰、体重下降等），请尽快就医。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你那边有两个人在聊天，还有背景里传来的咔哒声。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您描述的症状可能与多种因素有关，包括压力、疲劳或潜在的健康问题。建议记录症状的具体情况，并咨询医生进行专业评估和诊断。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能需要进一步的医学检查以确定病因。肌肉疼痛或内脏疼痛都可能是这种感觉的原因，但是只有通过体检和一些特定的测试才能确定具体原因。建议您尽快咨询医生以获取专业意见。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能正在经历与**胃食管反流病（GERD）**或**功能性消化不良**相关的症状，也可能涉及**慢性胃炎、胆囊问题**或其他消化系统疾病。以下从中医角度为您分析并提供建议：\n\n---\n\n### **一、症状分析**\n1. **嗳气、反酸**：提示胃气上逆，常见于肝胃不和、脾胃虚弱。\n2. **胸骨后闷痛**：可能与“胃脘痛”“胸痹”相关，需警惕胃食管反流或心肺问题。\n3. **病程较长（两三年）**：久病多虚，可能兼有脾虚、气滞、痰湿等。\n\n---\n\n### **二、中医辨证分型**\n#### 1. **肝胃郁热证**\n   - **表现**：反酸烧心、口苦口干、胁胀、舌红苔黄。\n   - **治法**：疏肝清热，和胃降逆。\n   - **方药**：**左金丸**（黄连、吴茱萸）合**柴胡疏肝散**加减。\n\n#### 2. **脾胃虚弱证**\n   - **表现**：饭后腹胀、嗳气、乏力、舌淡苔白。\n   - **治法**：健脾益气，和胃降逆。\n   - **方药**：**香砂六君子汤**加旋覆花、代赭石。\n\n#### 3. **痰瘀阻络证**\n   - **表现**：胸骨后刺痛、舌暗有瘀斑。\n   - **治法**：化痰祛瘀，通络止痛。\n   - **方药**：**瓜蒌薤白半夏汤**合**丹参饮**加减。\n\n---\n\n### **三、建议措施**\n1. **立即调整生活习惯**：\n   - 避免饱食、睡前2小时禁食。\n   - 忌辛辣、油腻、甜食及咖啡、酒精。\n   - 抬高床头15-20cm，减少夜间反流。\n\n2. **对症缓解**：\n   - 短期可服用**铝碳酸镁咀嚼片**（中和胃酸）或**奥美拉唑**（抑酸），但需遵医嘱。\n\n3. **中医调理**：\n   - 建议面诊中医师，结合舌脉辨证开方。\n   - 可尝试艾灸**中脘、足三里**穴，或针灸调节胃肠功能。\n\n4. **必要检查**：\n   - 若症状反复，建议做**胃镜、幽门螺杆菌检测**，排除器质性疾病。\n\n---\n\n### **四、注意事项**\n- 若出现**吞咽困难、体重下降、呕血黑便**，需立即就医。\n- 长期反酸可能损伤食管黏膜，需重视规范治疗。\n\n希望以上建议对您有所帮助！建议尽早就医明确诊断，避免延误病情。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么一说，我觉得这事儿可能跟疲劳或者压力有关。你看啊，平时如果工作压力大，或者休息不好，都会让人感觉特别困，哪怕睡了也觉得不够。还有就是，生活习惯也可能影响到睡眠质量，比如说熬夜、饮食不规律啥的。要不你试试调整一下作息，看看会不会好一点？当然啦，如果还是不行，最好还是去医院查查，看看是不是有啥潜在的健康问题。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况可能是神经性疼痛，建议尽快去医院做详细检查，看看是不是神经受压或者炎症导致的。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况听起来像是哮喘的症状。你之前有没有被诊断过哮喘？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况可能是慢性支气管炎，之前有没有做过肺功能检查？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您提供的症状，这种疼痛可能与乳腺有关。乳腺疼痛是乳腺炎的常见症状之一，乳腺炎是由于乳腺感染或乳腺导管阻塞引起的乳腺组织炎症。乳腺炎的症状包括乳房疼痛、乳头疼痛、乳头红肿、乳头溢液等。建议您及时到医院进行乳腺检查和相关检查，以明确病因并进行治疗。乳腺炎的治疗包括抗生素治疗、乳腺导管扩张术等。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 14. Example 14
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">现在膝盖痛。我这个就是之前动过手术的，在外院最近又痛了，在上次运动的时候不小心又有一点绞索，绞了之后。已经有一个多星期了。手术做了三年了，当时半月板缝了膝盖，现在用力的话能伸直就是不能特别的好有还是有一点弯曲的。医生，我现在这个是一定要做手术吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_222459_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，膝盖痛可能是由于之前的手术导致的，近期在运动过程中不小心扭伤，导致膝盖疼痛加重。关于是否需要手术治疗，我们需要了解更多关于您病情的信息。首先，请问您的膝盖痛是持续性的还是间歇性的？疼痛程度如何？是否有红肿、发热等症状？其次，您的膝关节活动度如何？能否正常行走和进行日常活动？\n\n建议您尽快就诊于专业医生，以便进行详细检查和评估，制定合适的治疗方案。在治疗过程中，注意休息和避免剧烈运动，以免加重病情。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能是因为膝关节半月板损伤引起的疼痛和活动受限。为了更准确地判断病因，建议您进行核磁共振检查以明确情况。此外，还有可能是其他因素导致的症状，如滑膜炎或韧带拉伤等。\n\n针对治疗方面，除了手术修复，还可以考虑保守治疗方法。例如，您可以尝试使用一些非处方药物来缓解疼痛，比如布洛芬缓释胶囊、双氯芬酸钠缓释片或者芬必得止痛药。但请注意，这些药物仅供参考，具体用药剂量还需根据药品说明书或医生指导进行调整。另外，物理疗法也是一种常见的治疗手段，包括热敷、理疗、按摩以及针灸等，都可以帮助减轻疼痛并促进康复。\n\n如果症状持续存在或加重，建议您及时就医并咨询专业医生的意见。他们会根据您的具体情况做出进一步的诊断和治疗方案。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这个问题得看具体情况。如果只是轻轻的疼痛和不适，可能不需要手术。但要是疼痛很严重，或者影响生活，那还是得考虑手术。最好再去找医生检查一下，听听他们的建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，我是HuatuoGPT，一个医学人工智能助手。你的问题我会尽力提供帮助。\n\n首先，关于你的膝盖疼痛问题，我建议你尽快就医，进行详细的检查以确定病因。你提到的“脚锁”可能是指膝关节卡住或者不稳定的情况，这可能是由于关节软骨磨损、韧带损伤或者其他原因引起的。如果你的膝盖在用力时不能完全伸直，这可能是因为关节僵硬或者肌肉力量不足。\n\n至于是否需要手术，这需要根据你的具体情况来判断。如果疼痛是由于关节磨损或者韧带损伤引起的，那么可能可以通过物理治疗、药物治疗和改变生活习惯等方式来改善症状。但如果疼痛严重影响了你的生活质量，或者有严重的关节破坏或者不稳定情况，那么可能需要考虑手术治疗。\n\n请记住，这只是基于你提供的信息的一般建议，你应该尽快去医院就诊，由专业的医生进行详细的检查和评估，以便得到最适合你的治疗方案。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个男人在说话，然后电话铃声响了，接着另一个男人在说话。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能需要进一步的医疗评估来确定疼痛的原因。建议尽快联系医生进行详细检查和咨询。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，患者可能需要进一步的医学评估和治疗建议。建议患者尽快就诊医院，并进行X光检查以确定膝盖的情况。在等待就医的过程中，建议患者避免剧烈运动和负重，以免加重伤势。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，膝盖疼痛可能与术后恢复、关节劳损或潜在病理问题有关。以下为分析和建议：\n\n---\n\n### **一、可能原因分析**\n1. **术后恢复问题**  \n   - 若手术时间较短（如1周），伤口未完全愈合，可能存在炎症反应或缝线刺激导致疼痛。\n   - 若已拆线但仍有痛感，需警惕感染、瘢痕粘连或关节活动受限。\n\n2. **髌骨软化症/髌腱炎**  \n   - 髌骨下方疼痛（尤其是上下楼梯时），可能与髌骨轨迹异常或肌腱劳损相关。\n   - 久坐后突然活动时疼痛加重，休息可缓解。\n\n3. **半月板损伤或韧带损伤**  \n   - 膝盖内侧或外侧疼痛，伴随关节交锁感（卡住无法伸直）。\n   - 转体、跳跃等动作诱发疼痛。\n\n4. **骨关节炎或滑膜炎**  \n   - 中老年患者需警惕退行性病变，表现为晨僵、活动后疼痛加重。\n   - 过度劳累或受凉后症状明显。\n\n---\n\n### **二、建议措施**\n1. **立即就医检查**  \n   - 建议挂 **骨科或运动医学科**，进行膝关节X光、MRI或超声检查，明确是否存在软组织损伤、关节积液或骨质问题。\n\n2. **对症处理**  \n   - **休息制动**：避免爬山、深蹲、提重物等加重膝关节压力的动作。\n   - **冰敷消肿**：每日2-3次，每次15分钟（急性期或肿胀时）。\n   - **药物缓解**：短期服用布洛芬等非甾体抗炎药（无禁忌症前提下）。\n\n3. **康复锻炼**  \n   - **股四头肌强化**：仰卧位抬腿（保持膝盖伸直）、坐姿静蹲（靠墙辅助）。\n   - **髌骨稳定性训练**：跪姿抬腿、弹力带抗阻练习。\n   - **拉伸放松**：腘绳肌、髂胫束拉伸（如弓步压腿）。\n\n4. **中医调理**  \n   - **针灸/艾灸**：选取血海、梁丘、阳陵泉等穴位，促进局部气血循环。\n   - **中药外敷**：活血止痛类膏药（如云南白药贴）或热敷包。\n\n---\n\n### **三、注意事项**\n- 若出现 **关节红肿发热、剧烈疼痛或无法承重**，需急诊排除感染或急性损伤。\n- 避免盲目按摩或暴力拉伸，以免加重损伤。\n- 控制体重，减轻膝关节负荷。\n\n---\n\n**提示**：术后恢复因人而异，及时专业评估是关键。建议尽早安排影像学检查，明确病因后针对性治疗。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么一说，感觉你这情况还挺复杂的。前列腺炎确实可能会影响性功能，不过每个人的反应都不太一样。手术呢，通常是针对比较严重的情况，像你这种有不痛感的，可能不一定需要手术。药物治疗和物理治疗可以试试，很多人通过这些方法都有改善。你可以先去医院详细检查一下，听听医生的建议，毕竟他们更专业。对了，平时也可以多注意休息，别太累了。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据你的描述，可能是腓骨颈骨折。这种骨折常见于中老年人，特别是老年人。你有没有觉得走路困难或者疼痛加剧？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这种情况可能是半月板损伤引起的。你能详细说说是怎么开始疼的吗？有没有什么特别的动作会加重疼痛？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">了解了，您之前有没有做过类似的检查？比如X光或者MRI？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，根据您提供的症状，膝盖疼痛可能与手术有关，建议您尽快咨询手术医生，以便进一步评估和治疗。手术后的康复期间，需要注意休息和避免剧烈运动，以免影响手术效果和康复进程。如果疼痛严重或有其他不适症状，请及时咨询医生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 15. Example 15
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">医生您好，患者是我母亲，脑膜瘤一级出院状况良好，检测的这个微囊型脑膜瘤里面有一个指数，当时ki67 10%, 这个要做放疗吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_224919.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">在这个场景中，似乎是在讨论一个关于脑膜瘤的治疗方案。首先，提到的是母亲的状况，她似乎已经出院并且恢复良好。接下来，提到了一份PPT，可能是关于脑膜瘤的相关信息。然后，提到了一个维囊性脏不瘤，但似乎主要关注的是其中的KI67指数，这个指数表示细胞增殖活性。根据描述，KI67指数为10%，这意味着细胞的增殖活性较低。\n\n关于是否需要进行放疗，这取决于脑膜瘤的具体情况和医生的建议。在某些情况下，放疗可能是一个有效的治疗方法，特别是在肿瘤较大或位于重要区域时。然而，根据您提供的信息，我们无法确定这个维囊性脏不瘤是否需要进行放疗。建议您咨询专业医生并遵循他们的建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您提到了一些关于脑膜瘤和维囊性肿瘤的问题。首先，我要告诉您的是，根据目前的情况来看，手术治疗已经取得了良好的效果，这是一个好消息。至于是否需要进行放疗，我们还需要进一步了解病理结果才能做出准确的判断。\n\n如果您能提供更多关于病情的信息，例如病理报告、影像学检查等，我们可以更好地评估您的病情并给出更具体的建议。此外，如果可能的话，请告诉我您是否有其他症状或不适感，以及之前的医疗记录和用药情况，这些信息对于我们的诊断和治疗决策都非常重要。\n\n在等待进一步确诊的过程中，您可以继续保持良好的生活习惯，包括充足休息、饮食均衡、避免过度劳累和精神紧张。同时，定期复查也是很重要的，以便及时发现任何异常变化。\n\n如果您有任何疑问或需要进一步帮助，请随时告诉我。我会尽力为您提供支持和指导。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">他提到的‘7-8 t1’可能是指肿瘤体积缩小了70%到80%。这是在医生评估后常用来指导进一步治疗的重要指标。关于具体的用药情况，建议和他的医生详细讨论，看看后续治疗计划。需要继续跟进他的康复情况哦。如果还有疑惑，可以再联系医生团队。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我想澄清一点，我是一个人工智能医疗助手，我并没有做过PPT或者进行过任何医学检测。我可以提供一些关于脑膜瘤和KI67的信息，但是具体的治疗方案还需要咨询医生。\n\n脑膜瘤是一种发生在脑膜的良性肿瘤，大多数情况下生长缓慢且不会扩散到脑部的其他部位。然而，由于脑膜瘤的位置可能会对其周围的神经和组织产生压力，因此可能需要治疗。治疗方法包括观察等待（如果肿瘤小且没有症状）、手术切除、放射治疗或药物治疗。\n\nKI-67是一种蛋白质，它在细胞分裂和增殖的过程中起着重要的作用。KI-67的比例（也称为Ki-67指数）可以用来评估肿瘤的生长速度和侵袭性。一般来说，KI-67比例越高，肿瘤的生长速度越快，侵袭性越强。在您提到的情况下，KI-67比例为10%，这意味着肿瘤中约有10%的细胞处于活跃的分裂状态。\n\n至于是否需要进行放疗，这取决于多种因素，包括肿瘤的大小、位置、是否已经侵犯到重要的神经结构、患者的年龄和总体健康状况等。在某些情况下，即使肿瘤是良性的，也可能需要放疗来防止其继续生长或者减轻症状。这是一个需要与神经外科医生详细讨论的问题。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个男人在说话，然后另一个男人在回应。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您母亲的病情似乎有所改善，但仍有需要关注的地方。建议定期复查，并遵循医生的具体指导。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者是您的母亲，同时也是您的伴侣。由于您目前不在本地，因此您希望通过正式渠道向我汇报情况。您提到之前为患者做了脑磁共振和脑膜瘤的检查，并且手术很成功，现在恢复良好。然而，您似乎对报告中的一个指数——Ki67%有所疑问，它是否表示需要进行放疗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，您母亲的情况需要从以下几个方面综合分析：\n\n### 一、关于“脑瘤”与“微囊型脑膜瘤”的解读\n1. **疾病性质**  \n   微囊型脑膜瘤属于良性肿瘤（WHO I级），生长缓慢，边界清晰，手术切除后复发率较低（约5-10%）。但需注意：\n   - 若肿瘤位于关键功能区（如运动/语言区），可能遗留神经功能缺损。\n   - 少数病例可能出现血管侵犯或术后脑脊液漏。\n\n2. **KPS评分的意义**  \n   KPS 67分提示患者存在中度体力下降（日常活动受限但可自理），需评估是否影响术后恢复能力。\n\n---\n\n### 二、当前治疗建议\n1. **影像学复查**  \n   建议术后3个月进行增强MRI检查，重点观察：\n   - 肿瘤残留体积\n   - 血管结构变化\n   - 是否出现新发病灶\n\n2. **药物管理**  \n   - 若存在激素分泌异常：需监测内分泌指标（如ACTH、皮质醇）\n   - 若有头痛症状：可短期使用NSAIDs类药物（如布洛芬），但需警惕胃肠道副作用\n   - 镇痛管理：若疼痛VAS≥4分，可考虑弱阿片类药物（如曲马多）\n\n3. **康复干预**  \n   - 神经功能训练：每日进行认知功能评估（MMSE量表）\n   - 营养支持：保证每日蛋白质摄入≥1.2g/kg体重，维持正氮平衡\n\n---\n\n### 三、风险预警信号\n需密切观察以下情况并及时就诊：\n1. 持续性剧烈头痛（VAS评分≥8分）\n2. 新发癫痫发作或原有发作频率增加\n3. 视力突然下降（警惕视神经受压）\n4. 体温＞38.5℃伴意识改变\n\n---\n\n### 四、随访计划\n| 时间节点 | 检查项目 | 目标 |\n|----------|----------|------|\n| 术后1月 | 头颅CT平扫+增强 | 评估术腔情况 |\n| 术后3月 | 增强MRI+垂体功能检测 | 早期发现复发迹象 |\n| 术后6月 | 全身PET-CT（必要时） | 排除远处转移 |\n\n建议通过远程医疗平台定期上传影像资料，由主刀医生进行远程阅片。若条件允许，可考虑在术后1年内每季度进行一次远程会诊。\n\n请保持与主治团队的密切沟通，术后前6个月是关键观察期。如有其他症状变化，请及时补充信息以便进一步分析。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你这事儿有点复杂啊，不过呢，既然你已经在处理GDPR相关的问题，那就继续往这方向走吧。Police这边嘛，可能是系统更新或者流程上的问题，导致他们没有及时更新你的信息。你可以试着联系一下他们的客服，看看能不能加快处理速度。要是还不行，可能得多催几次，或者看看有没有其他渠道能加速这个过程。反正呢，先别急，事情总会有解决的办法。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你提到的这些症状听起来挺严重的。你能告诉我，除了这些症状外，还有没有其他不舒服的地方？比如有没有感觉特别累或者食欲不好？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你妈妈的情况听起来像是阴道炎。那她有没有其他症状？比如瘙痒、分泌物异常之类的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你妈妈的肌钙蛋白水平确实有点高，不过这还不足以确诊心肌梗塞。你们有没有注意到她最近有没有胸痛或者其他不适？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对不起，我不太明白您的问题。请告诉我您想了解什么类型的肿瘤，我将尽力为您提供相关的信息。脑膜瘤是一种起源于脑部或脑膜的肿瘤，可以影响脑部功能和健康。如果您或您的家人有脑膜瘤的疑虑，请及时咨询专业医生以获取准确的诊断和治疗建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 16. Example 16
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">医生您好，患者是我母亲，脑膜瘤一级出院状况良好，检测的这个微囊型脑膜瘤里面有一个指数，当时ki67 10%, 这个要做放疗吗？把他这个数据爆出来，本质上就有病理上的矛盾了。当时手术是显微镜操作的，医生说已经切干净了，我建议再加一个伽马刀，或多或少有一些残留，这个位置如果不干净，对人的肢体活动是有影响的，我想这个医生下手应该会保守一些。另外他又报了ki10% 一级。也说不同的医院这个病理结果会不一样。想问一下病理结果到底是一级还是二级？对诊断有什么影响呢？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_225005.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您母亲的脑膜瘤被诊断为一级，但病理报告中的KI67指数为10%。KI67是一种细胞增殖指标，通常用于评估肿瘤的恶性程度。一级脑膜瘤通常被认为是低度恶性的，KI67指数通常在5%以下。因此，10%的KI67指数可能与一级脑膜瘤的恶性程度不符。\n\n关于手术切除的彻底性，每个医生可能会有不同的操作策略，以尽量减少对患者肢体活动的影响。病理报告中的KI67指数和脑膜瘤的分级可能存在一定的矛盾，这可能与不同医院和实验室使用的标准和方法不同有关。\n\n在这种情况下，建议您与您的主治医生和病理学家进行沟通，了解更多信息并寻求专业意见。同时，密切关注您母亲的病情，定期进行复查，以便及时发现并处理任何问题。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，您的母亲被诊断为脑膜瘤一级，并且已经康复出院，这是一个好消息。关于维囊性大不瘤的问题，根据您描述的情况，可能是指肿瘤的大小和形态特征。至于KI67指标，它是用来评估细胞增殖活性的一个指标，通常在百分之几以上表示恶性程度较高。然而，具体的分级标准可能会因不同实验室而有所差异，因此建议您咨询主治医师以获取更准确的解释和指导。\n\n对于手术后是否需要进一步治疗以及如何处理残留的肿流皮屑等问题，最好由主治医师来解答。他们可以综合考虑患者的具体情况、病情严重程度以及其他相关因素，给出最合适的治疗方案。如果您对此有任何疑问或需要更多帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对，就是说即使报告说是1级，但如果有残留，患者的症状和预后可能会受影响。医生也提到不同医院标准不一样，这确实是个问题。所以，要综合考虑多种因素来判断病情和预后。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">首先，我想解释一下KI-67和脑膜瘤分级的相关知识。\n\nKI-67是一种蛋白质，它在细胞分裂和增殖的过程中起着重要的作用。在肿瘤学中，KI-67的表达水平常被用来评估肿瘤的生长速度和侵袭性。通常来说，KI-67的比例越高，说明肿瘤细胞的增殖活性越强，肿瘤的侵袭性和预后也可能更差。然而，KI-67的比例并不是唯一的判断标准，还需要结合其他因素（如肿瘤的大小、形态、位置等）来综合评估。\n\n关于脑膜瘤的分级，目前主要采用的是WHO的分类法。一级脑膜瘤通常是良性的，生长缓慢，不会侵犯周围组织或转移到其他部位。但是，即使是良性的一级脑膜瘤，也有可能复发或者转变为恶性。因此，即使手术后病理报告显示“切除干净”，也不能完全排除复发的可能性。\n\n至于您提到的病理报告的矛盾，可能是由于不同医院的病理解读标准和习惯有所不同，或者是由于样本处理、染色等技术上的差异导致的。如果您对此有疑问，建议您与主治医生进行详细的沟通，或者寻求第二意见。\n\n总的来说，对于一级脑膜瘤的患者，虽然手术切除后复发的可能性相对较小，但仍需要定期复查，以便及时发现可能的复发或者新的病变。同时，保持良好的生活习惯，如健康饮食、适量运动、充足睡眠等，也有助于提高生活质量和预防疾病的发生和发展。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个男人和一个女人在电话里聊天，是这样吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">I'm not sure what you're asking. Could you please rephrase or clarify your question?</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者说的是:'患者是我母亲，脑膜瘤一级，然后出院恢复良好，这不挺好的吗？咋了，你有啥问题？'</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，您母亲的情况需要从以下几个方面综合分析：\n\n### 1. **关于「微囊型脑瘤」**\n   - 微囊型脑瘤通常指肿瘤内部存在多个小囊腔（微囊），可能与胶质瘤、脑膜瘤等有关。这类肿瘤的性质需结合病理类型判断（良性或恶性）。\n   - **关键点**：若已手术切除，需通过术后病理报告明确肿瘤性质（如是否为低级别胶质瘤、脑膜瘤等）。仅凭影像学描述（如K67值）无法完全确定。\n\n---\n\n### 2. **关于「K67=67%」的意义**\n   - K67是一种细胞增殖标志物，常用于评估肿瘤的生长活性：\n     - **正常组织**：K67阳性率通常＜5%。\n     - **肿瘤组织**：K67阳性率越高，提示细胞增殖越活跃，可能与恶性程度相关。\n   - **您的疑问**：若报告中K67=67%，远高于正常范围，可能提示肿瘤具有较高增殖活性，但需注意：\n     - 部分良性肿瘤也可能出现K67升高（如某些脑膜瘤）。\n     - 需结合病理诊断、影像学及其他指标综合判断。\n\n---\n\n### 3. **关于「术后复发风险」**\n   - **复发可能性**：即使肿瘤被“切干净”，仍可能存在以下情况：\n     - 微小残留病灶未被发现。\n     - 肿瘤边缘不规则，导致部分组织残留。\n     - 某些肿瘤类型（如高级别胶质瘤）本身易复发。\n   - **医生建议**：定期复查（MRI增强扫描）是监测复发的关键，通常每3-6个月一次。\n\n---\n\n### 4. **下一步建议**\n   - **明确病理诊断**：确认肿瘤具体类型（如胶质瘤分级、脑膜瘤等），这是判断预后的核心依据。\n   - **术后随访计划**：严格按医嘱进行影像学复查，观察是否有新发病灶或原有病灶变化。\n   - **关注症状变化**：若出现头痛加重、癫痫、肢体无力等症状，需及时就医。\n   - **咨询神经外科/肿瘤科专家**：如有必要，可寻求第二意见或讨论辅助治疗方案（如放疗、靶向治疗）。\n\n---\n\n### 总结\n目前信息不足以直接判断肿瘤性质或复发风险，需结合病理结果和后续影像学检查。建议与主治医生深入沟通，明确以下问题：\n1. 肿瘤的具体病理类型及分级；\n2. 手术切除的完整性（是否有残留）；\n3. 下一步随访策略。\n\n希望这些信息对您有所帮助，祝您母亲康复顺利！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么一说，确实有点复杂啊。其实吧，医学上有时候也会有点不一样的看法，毕竟每个医生的经验和观点可能不太一样。你说的这个情况，可能是因为医生之间的看法不同，导致了诊断结果的差异。至于你孩子的情况，100厘米的身高确实在一般的生长曲线上偏低，不过具体的影响还得看医生的专业判断。你看啊，去大医院再查查也不失为一个好办法，毕竟多一个医生的意见可能会更放心一些。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您说的这个情况，医生是通过脑电图检查发现异常的。脑电图能记录大脑电活动，帮助诊断癫痫。您妈妈的症状听起来像是癫痫发作的表现。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，这个情况听起来像是脑膜瘤。那她现在有什么症状吗？比如头痛、恶心这些？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">那挺好的，她现在感觉怎么样？有没有什么不舒服的地方？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您好，我理解您的疑问。对于脑膜瘤的分级，不同医院可能会有不同的标准和方法，因此对于同一个脑膜瘤，不同医院的分级结果可能会有所不同。这可能会影响临床决策和治疗方案。对于脑膜瘤的分级，医生会考虑肿瘤的大小、位置、生长速度等因素，以制定最合适的治疗方案。如果您有关于脑膜瘤分级的疑问，请咨询专业医生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 17. Example 17
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你今天头晕，明天心慌，后天烧心，肚子不舒服，加上腿没劲，概括来说全身总要找个地方不好受的，这些毛病都有很多。那你不停的去看病，不停的做检查做ct，你啥病也没查出来，还是一堆的难受。我啥病？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_231141_1.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">从您的描述来看，您可能患有多种疾病或症状。这些症状可能是由多种原因引起的，包括生活习惯、饮食、环境、遗传等因素。在这种情况下，建议您咨询专业的医生，进行详细的检查和诊断。\n\n同时，保持良好的生活习惯和饮食习惯，避免过度劳累和精神压力，有助于缓解症状和提高生活质量。如果症状持续加重，请及时就医，以便得到正确的诊断和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">很抱歉听到您身体不适的情况。根据您的描述，您可能正在经历一些功能性问题或神经官能症引起的症状。这种情况通常与精神紧张、焦虑等因素有关。为了更准确地确定病因，建议您进行进一步的检查以排除其他潜在疾病的可能性。\n\n在日常生活中，您可以尝试一些自我调节的方法来缓解症状：保持良好的心态和情绪，避免过度劳累;适当参加体育运动，增强体质;注意饮食均衡，多摄入蔬菜水果;养成良好的生活习惯，保证充足的睡眠时间。此外，您还可以考虑使用谷维素片和维生素B1片以及安神补脑液进行治疗。具体的剂量请遵循医生的指示。\n\n如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你的身体可能有点疲惫，出现了一系列不适症状，比如头晕、犯困、腿没劲儿等。这些症状很常见，可能是由工作压力大、休息不足或生活习惯不规律导致的。也可能与一些慢性疾病或亚健康状态有关。建议你好好的休息一下，保持规律作息和健康饮食。如果症状持续或加重，最好还是去医院做个全面检查，以确定具体问题出在哪儿。注意身体哦~</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您的症状可能是由多种原因引起的，包括压力、焦虑、抑郁、慢性疲劳综合症、纤维肌痛综合症等。这些病症的症状可能包括头晕、心慌、烧心、肚子不舒服和腿没力气等。然而，这些症状也可能是其他疾病的症状，例如心脏疾病、胃肠道疾病或神经系统疾病。\n\n如果您已经进行了全面的医学检查，包括CT扫描和其他相关的诊断测试，但仍然没有找到任何明显的身体疾病，那么可能需要考虑一些非物理性的因素。例如，压力和焦虑可以引起各种身体症状，包括您描述的那些症状。此外，长期的疲劳和肌肉疼痛可能会导致类似的症状。\n\n在这种情况下，建议您寻求心理咨询或者精神科医生的帮助，以确定是否存在心理或情绪问题。同时，保持健康的生活方式，如规律的睡眠、均衡的饮食和适量的运动，也可以帮助改善您的症状。如果症状持续不改善，或者有任何新的或者加重的症状，应立即就医。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是有人在聊天，还夹杂着一些背景噪音呢。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能患上了流感或普通感冒。建议您多休息、保持温暖，并及时就医以获得适当的治疗和药物缓解症状。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这位患者可能需要进行全面的身体检查和评估，以确定他所经历的多种症状的原因。医生可能会建议进行血液测试、影像学检查（如X光、MRI或CT扫描）以及内窥镜检查等，以帮助诊断。在没有明确诊断之前，不应该对症状做出确切的医疗推断或给予特定的药物治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您描述的症状（头晕、心慌、烧心、腹胀、腿无力），结合中医理论分析，可能与以下证型相关：\n\n---\n\n### **初步辨证思路**\n1. **肝郁脾虚，气机不畅**  \n   - 头晕、腹胀：肝气郁结，横逆犯脾，导致脾胃运化失常。  \n   - 心慌：肝郁化火或心脾两虚，气血不能上荣于心。  \n   - 烧心：肝火犯胃，胃气上逆。  \n\n2. **湿热内蕴，中焦阻滞**  \n   - 腹胀、腿无力：湿邪困脾，清阳不升，四肢失养。  \n   - 烧心：湿热郁蒸，胃络受损。  \n\n3. **气血不足，心神失养**  \n   - 头晕、心慌：气血亏虚，脑窍失充，心失所养。\n\n---\n\n### **建议调理方案**\n#### 1. **中药方剂参考**  \n可选用 **逍遥散合半夏泻心汤加减**，疏肝健脾、调和寒热：  \n- **柴胡** 9g、**白芍** 12g —— 疏肝柔肝  \n- **白术** 10g、**茯苓** 15g —— 健脾祛湿  \n- **黄连** 6g、**黄芩** 9g —— 清胃热、降逆止呕  \n- **半夏** 9g、**干姜** 6g —— 和胃降逆  \n- **党参** 12g、**当归** 9g —— 补益气血  \n- **陈皮** 6g、**砂仁** 6g（后下）—— 行气消胀  \n\n**用法**：水煎服，每日1剂，分2次温服。需根据舌脉调整剂量。\n\n---\n\n#### 2. **饮食调理**  \n- **忌口**：辛辣、油腻、生冷、甜食（防助湿生热）。  \n- **宜食**：小米粥、山药、莲子、薏苡仁（健脾利湿）；玫瑰花茶（疏肝）。  \n\n---\n\n#### 3. **生活方式建议**  \n- 避免熬夜、情绪波动（肝郁加重症状）。  \n- 适度运动（如八段锦、散步）以升发阳气。  \n- 按揉 **太冲穴**（疏肝）、**足三里**（健脾）、**内关穴**（宁心安神）。\n\n---\n\n#### 4. **注意事项**  \n若出现以下情况，建议及时就医：  \n- 症状持续加重或出现胸痛、黑便等急症表现。  \n- 需完善检查排除器质性疾病（如甲状腺功能、胃肠镜等）。\n\n---\n\n### **总结**  \n您的症状符合“肝郁脾虚、湿热内扰”的病机特点，但具体需结合舌象（如舌红苔黄腻为湿热，舌淡苔白为脾虚）、脉象（弦滑或细弱）进一步确认。建议在专业中医师指导下用药，避免自行长期服用清热或补益类药物。\n\n希望以上分析对您有所帮助！</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么一说，感觉真是挺折腾的。头晕这种事儿吧，可能跟很多因素有关，比如说压力大、休息不好，或者是颈椎的问题。你说你按了很多穴都没用，那可能得找个靠谱的中医看看，或者去医院做个全面检查。对了，你平时有没有注意饮食和作息呢？这些也可能是影响身体的因素哦。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来你可能有慢性疲劳综合症，这种病会让人感觉特别累，还有肌肉疼痛。你有没有觉得记忆力变差了？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这可能是胃肠型感冒，就是普通的感冒病毒引起的肠胃不舒服。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这可能是感冒引起的，有时候会伴随肠胃不适。你有没有发烧？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这是一首自然语言处理的诗歌，通过对原始文本的处理和转换，将其转化为人类可读的形式。自然语言处理是人工智能的一个分支，旨在让计算机理解和处理人类语言。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 18. Example 18
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">什么情况发生会漏尿，是大笑奔跑咳嗽运动的时候都会漏尿对不对？第2个问题听到水声想不想漏尿，没有。第三水躺在床上晚上会漏吗？不会。第4个生过几个孩子啊？就是一个，顺产。子宫卵巢没有绝经啊或者割掉。现在的话平时外出啊，去跳广场舞啊，或者旅游啊，要不要垫护垫卫生巾、一块够不够？情况不太好的时候，一个小时就要换一块。我这个情况能手术吗？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_232944.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">Sorry, I'm not a doctor and I can't provide medical advice. Please consult a professional doctor for specific questions about your health.</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">很抱歉听到您的症状。根据您描述的情况，您可能患有压力性尿失禁(SUI)。这是一种常见的泌尿系统疾病，通常与盆底肌肉松弛有关。除了压力性尿失禁外，还有其他一些可能的原因导致类似症状，如膀胱过度活动症或神经源性膀胱等。为了更准确地确定病因，我建议您进行进一步的检查和评估。\n\n首先，我们可以考虑进行尿流率测试来评估尿液排出速度是否正常。此外，超声波检查也可以帮助我们了解膀胱的大小和壁厚度等情况。这些检查将有助于明确诊断并制定相应的治疗计划。\n\n目前，对于压力性尿失禁的治疗方法有很多种选择，包括药物治疗、物理疗法和手术治疗等。具体的治疗方案应根据您的病情和个人需求来决定。如果您有任何疑问或需要更多详细信息，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">现在这个情况，手术风险太高了，医生不建议做。只能等症状缓解后再看。医生也开了药，让你先试试。不过主要还是注意休息，减少活动，避免病情加重。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你的问题涉及到尿液失禁，这是一种常见的泌尿系统疾病。根据你的描述，你可能患有压力性尿失禁和急迫性尿失禁。\n\n1. 压力性尿失禁通常在咳嗽、打喷嚏、大笑或运动时出现尿失禁的情况，这是因为这些活动会增加膀胱内的压力，导致尿液泄漏。这种情况在生育后和更年期后的女性中更为常见。\n\n2. 急迫性尿失禁是指有强烈的尿意，但无法控制，导致尿液泄漏。这可能是由于膀胱肌肉过度活跃引起的。\n\n3. 对于你的第三个问题，如果你在睡觉时需要使用护垫，这可能意味着你的症状比较严重。如果你发现自己在躺下时经常漏尿，可能需要考虑手术治疗。但是，这需要由医生根据你的具体情况来决定。\n\n4. 关于你的最后一个问题，是否可以进行手术，这取决于你的具体病情和你的身体状况。一般来说，如果非手术治疗无效，且症状严重影响生活质量，可以考虑手术治疗。手术方法有多种，包括尿道括约肌修复术、尿道吊带手术等，具体的手术方法需要由医生根据你的具体情况来决定。\n\n建议你尽快就医，由专业的医生进行评估和治疗。同时，保持良好的生活习惯，如避免饮用过多的咖啡和酒精，保持规律的排尿习惯，都有助于改善症状。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个男人和一个女人在聊天，还有音乐在背景中播放。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">尿急、尿频和尿痛是泌尿系统疾病的常见症状，可能由多种原因引起，如感染、结石或前列腺问题等。建议及时就医检查，以便确定具体原因并获得适当治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这段音频的原始内容是:'你告诉李医生什么情况发生会漏尿，比如说是大笑、奔跑、咳嗽、运动的时候漏尿，对不对？都有这种情况。第二个问题，听到水声想不想尿尿？没有。第三个问题，躺在床上晚上会漏吗？也不漏，非常好，非常典型的单纯的压力性尿失禁。第四个问题，生过几个孩子？你就是一个，一个顺产啊。子宫卵巢有没有绝经，或者割掉过？没有，就是今年才绝经。好的，那么最后一个问题，就问严重程度。现在的话……'</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您提供的信息，您的情况属于典型的**压力性尿失禁（应力性尿失禁）**，即在腹压增加时（如咳嗽、大笑、跳跃等动作），膀胱无法有效承压而漏尿。以下是针对您问题的详细解答：\n\n---\n\n### **1. 为什么这些活动会导致漏尿？**\n- **腹压增高**：咳嗽、奔跑、呕吐或运动时，腹部肌肉收缩会增加腹腔压力，若膀胱颈和尿道括约肌力量不足，尿液可能被挤出。\n- **盆底肌薄弱**：产后女性常见盆底肌松弛，导致膀胱颈部支撑力下降。\n\n---\n\n### **2. 听到水声是否漏尿？**\n- **一般不会**。水声通常不直接引发腹压骤增，但若伴随突然咳嗽或打喷嚏（如听到水声时忍不住笑出声），则可能漏尿。需注意诱因而非单一声音。\n\n---\n\n### **3. 躺着睡觉会漏尿吗？**\n- **通常不会**。平躺时腹压较低，漏尿风险极小。若偶尔发生，可能是体位变化或轻微压力波动所致，无需过度担心。\n\n---\n\n### **4. 生过几个孩子？顺产还是剖宫产？**\n- 您提到“生过一个顺产”，顺产可能导致盆底肌损伤，增加压力性尿失禁风险。建议加强盆底肌锻炼（如凯格尔运动）。\n\n---\n\n### **5. 子宫切除后是否有结节或疙瘩？**\n- **无异常**。子宫切除术后，阴道前壁膨出的风险降低，但仍需关注其他部位（如膀胱、直肠）。若出现新发肿块或不适，建议妇科复查。\n\n---\n\n### **6. 病情严重程度如何？**\n- **目前较轻**：仅在特定腹压动作时漏尿，未提及日常活动受限，说明病情可控。  \n- **建议干预**：  \n  - **盆底肌训练**：每日做凯格尔运动（收缩肛门和阴道肌肉，保持3-5秒，重复10次，每日3组）。  \n  - **避免久站/提重物**：减少腹压负担。  \n  - **必要时就医**：若漏尿加重或影响生活，可咨询医生，评估是否需要药物（如米拉贝隆）或微创手术（如尿道中段悬吊术）。\n\n---\n\n### **总结**\n您的症状符合压力性尿失禁，通过针对性锻炼和生活方式调整，多数患者可显著改善。保持乐观心态，避免焦虑加重症状，定期复查即可。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这个问题挺重要的，乳腺增生手术一般来说是根据具体情况来决定的。像你说的这种情况，术前检查非常关键，医生会根据你的具体症状、病史和检查结果来判断。一般来说，如果乳腺增生已经影响到日常生活，或者有癌变的风险，医生可能会建议手术。手术风险因人而异，但通常来说，手术的风险和收益需要仔细权衡。你可以和医生详细讨论一下，看看有没有其他治疗方案，比如药物治疗或者生活方式的调整。对了，你有没有考虑过中医调理呢？有些人通过中医调理也有不错的效果。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况挺常见的，主要是因为压力大或者身体不舒服引起的。你最近是不是工作压力很大？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这种情况可能是压力性尿失禁，常见于产后女性。建议做盆底肌肉训练，并咨询泌尿科或妇科医生进一步检查和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">尿频尿急尿痛尿道口痒，这些症状听起来像是尿路感染。你有没有发烧或者腰疼？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对不起，我的回答可能有些混淆，请您告诉我您的具体问题，我将尽力为您提供准确的回答。如果您有尿失禁的问题，请告诉我您的症状和具体情况，我将为您提供相关的医学知识和建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 19. Example 19
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">我17岁，我爸妈离婚了，今天我一个人来看病，我是查到了有肝占位 。我治不起，如果生病了，我觉得外公外婆可能负担不起我的医药费，我不想拖累我的外公外婆，他们年纪大了。我们来分析一下，是一个高回声的结节，检查结果说是像是一个血管瘤。这个严重吗？能治吗</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_233649.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">🎼您好，我不是医生，但我可以尝试帮助您解答一些问题。关于您的症状，我理解您可能是在描述一种情感上的困扰。在这种情况下，我建议您尝试与亲朋好友或专业人士（如心理医生、辅导员等）分享您的感受，他们可能会给您提供更好的建议和支持。同时，保持积极的心态，关注自己的身体和心理健康也是非常重要的。如果您有其他问题，也可以随时向我咨询，我会尽力提供帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能患有血管瘤。血管瘤是一种常见的皮肤病变，通常不会引起严重的健康问题。然而，为了更准确地确定病因和制定治疗方案，建议您尽快就医并进行进一步检查以确诊。\n\n在等待就医的过程中，您可以注意以下几点：首先，保持良好的个人卫生习惯非常重要，包括勤洗手、勤换洗衣物等。其次，避免与他人密切接触，以免传播病毒或细菌。此外，尽量减少外出活动，特别是人群密集的地方，以降低感染的风险。最后，保持室内空气流通，定期开窗通风也是很重要的。\n\n如果您有任何其他疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，先不用担心，这个情况通常不是很严重。血管瘤是一种常见的良性疾病，通常在出生后几周到几个月内出现，并随着时间的推移逐渐增大。大多数病例不需要特殊治疗，只需定期观察。如果必要时，可以考虑手术、激光、压迫或药物治疗。放心，保持积极心态对恢复有很大帮助。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，我是HuatuoGPT，一个医学人工智能助手。我会尽力帮助你理解你的问题。\n\n首先，你提到的“高回声姐姐”可能是指超声检查中的一种现象，这可能是由于血液流动引起的声波反射。这并不一定意味着有血管瘤或其他严重的疾病。然而，如果你有任何疑虑或者出现任何不适的症状，你应该尽快就医进行进一步的检查和诊断。\n\n至于你的问题，"我这个情况能治吗? 血管瘤严重吗? 要紧吗?"，这需要根据具体的病情来判断。血管瘤是一种良性肿瘤，大多数情况下不会对健康造成严重威胁。然而，如果血管瘤的位置、大小或增长速度导致压迫周围组织或器官，可能会引起疼痛或其他症状，甚至可能影响到正常的生理功能。在这种情况下，可能需要医疗干预进行治疗。\n\n治疗方法包括药物治疗、激光治疗、冷冻治疗（冷冻疗法）和手术切除等。具体的治疗方案应由医生根据你的具体病情来决定。如果你的家人担心这个问题，建议你们尽快就医咨询专业的医生，他们可以提供更具体的诊断和治疗建议。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来像是一个年轻女孩在说话，然后有个男人在说话，接着是音乐，然后女孩又说话了，最后是另一个男人在说话。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">I'm happy to help. However, I need more information from you. Can you please provide the article or text you'd like me to summarize?</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">这段音频的原始内容是：'十七岁啊，你怎么一个人来？哦哦，那你今天来是看专家门诊是吧？你看一下资料啊。对对不起，我迟到了。我……我是一个外婆的朋友。别哭啊，别哭啊，哭什么呀！不要哭，不要哭。我不想拖累我外婆，外婆年纪大了是吧？是的，你帮我分析一下啊。这个看上去是个高回声的结节，其实也不大，看上去像一个血管瘤。'</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，您可能在担心自己或家人存在健康问题。以下是一些初步分析和建议：\n\n### 1. **关于“高回声结节”**\n   - **可能原因**：高回声结节在超声检查中通常提示组织密度较高（如钙化、纤维化等），常见于甲状腺、乳腺或其他器官的良性病变（如结节性甲状腺肿、乳腺增生）。但具体性质需结合影像学特征、病史及进一步检查（如穿刺活检）。\n   - **是否严重**：多数高回声结节为良性，但需排除恶性可能（如甲状腺癌、乳腺癌）。若结节近期增大、形态不规则或伴随声音嘶哑、吞咽困难等症状，建议尽快就医。\n\n### 2. **关于“血管瘤”**\n   - 血管瘤是血管异常增生形成的良性肿瘤，常见于皮肤、肝脏等部位。若发现类似表现，需通过超声、MRI或病理检查明确诊断。\n   - **治疗建议**：小血管瘤通常无需处理；较大或影响功能者可考虑激光、介入栓塞或手术切除。\n\n### 3. **下一步建议**\n   - **完善检查**：提供更详细的报告（如超声描述、CT/MRI结果），必要时进行血液检查（如肿瘤标志物）。\n   - **专科就诊**：建议挂内分泌科（甲状腺）、普外科或影像科，由医生综合评估。\n   - **观察随访**：若无症状，部分结节可定期复查（如6个月至1年超声监测变化）。\n\n### 4. **心理调节**\n   - 避免过度焦虑，许多良性病变可通过规范治疗控制。保持健康作息，均衡饮食，适度运动有助于整体健康。\n\n请务必携带完整病历资料到正规医院进一步咨询，早期明确诊断对治疗至关重要。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听你这么说，感觉你心里挺慌的。其实呢，肝血管瘤一般是良性的，很多人都没啥症状。医生说不用特别治疗，可能是因为它不影响生活。不过呢，定期复查还是很重要的，毕竟健康最重要。你可以多了解一下这方面的信息，心里有个底，也就不那么担心了。要是有啥不舒服的地方，记得及时去医院看看哦。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你这情况可能是急性胰腺炎，需要尽快去医院做进一步检查和治疗。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你先别急，告诉我，你是不是觉得最近压力挺大的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你先别急，告诉我，最近有没有什么特别的事情让你感到压力大？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">是的，血管瘤一般不会很严重，但是需要及时治疗，以免影响正常生活和心理健康。血管瘤是一种血管性疾病，常见于皮肤和内脏器官，会导致出血、疼痛等症状。治疗方法包括药物治疗、手术切除等。如果您有任何疑问或不适，请及时咨询专业医生。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

### 20. Example 20
<div class="demo-wild-container">
  <div class="demo-wild-card">
    <div class="demo-wild-row">
      <span class="demo-wild-role">Patient</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">医生，我想问一下，我现在算不算低血糖？我知道我有高血糖病，然后这个为什么会有高血糖发作？我想问一个问题，你画图我看不懂，你直接和我交流不就可以了，按我的理解，你要把你说的话我能理解，不然你说半天我也理解不了。我今天就想问我是不是低血糖。我低血糖犯病的时候烧心不烧心？我不想听你那些太复杂的东西，你就直接告诉我，有什么要注意的？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/20250921_234654.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Baichuan2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">是的，我理解你的担忧。低血糖和高血糖都是血糖波动的问题，但它们是不同的状况。低血糖是指血糖水平低于正常范围，而高血糖是指血糖水平高于正常范围。\n\n关于你的问题，我建议你首先咨询医生或专业营养师，以便得到更准确的诊断和建议。同时，了解自己的血糖波动规律和原因也很重要，这有助于你采取适当的措施预防低血糖发作。\n\n在日常生活中，注意以下几点可以帮助你维持稳定的血糖水平：\n\n1. 保持规律的饮食和锻炼习惯，避免长时间空腹或暴饮暴食。\n2. 随身携带一些碳水化合物食品，如饼干、水果等，以备不时之需。\n3. 定期监测血糖，以便了解自己的血糖状况并及时调整生活方式。\n4. 与医生和专业人士保持联系，以便获得及时的指导和支持。\n\n希望这些建议对你有所帮助。如果你有其他问题，请随时提问。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">DISC_MedLLM</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">非常抱歉听到您的不适。根据您描述的症状，可能存在一些潜在的健康问题。为了更准确地判断病因并给出建议，我需要了解更多信息。请问除了低血糖之外，还有其他伴随症状吗？比如头晕、乏力等？另外，您是否有任何慢性疾病或正在服用药物？这些信息对于我们进行进一步分析和诊断至关重要。\n\n在此期间，我可以给您一些建议：1.保持良好的饮食习惯，避免过度饥饿或暴饮暴食;2.适量运动，但不要过度劳累;3.注意休息，保证充足的睡眠时间;4.尽量减少精神紧张和压力;5.如果您有吸烟或饮酒的习惯，最好戒掉;6.定期监测血压和血糖情况。\n\n请记住，以上建议仅供参考。如果您的症状持续存在或加重，或者出现其他不适，请及时就医并进行进一步检查以明确病因。如果您有任何疑问或需要进一步帮助，请随时告诉我。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">GLM4-Voice</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">抱歉，我可能让你感到困惑了。我来重新解释一下高血糖和低血糖的区别。高血糖是指血液中的葡萄糖含量过高，通常是因为饮食中糖分摄入过多或胰岛素分泌不足导致的。而低血糖是指血液中的葡萄糖含量过低，通常是因为胰岛素分泌过多、过量运动或未及时用餐等原因引起的。两者虽然只有一字之差，但对身体的影响却大不相同哦！希望这次你能理解了。如果还有什么问题，随时告诉我哦！</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">HuatuoGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">你好，我明白了你的问题。首先，我想澄清一点，我不是医生，但我可以提供一些基本的医学信息。\n\n关于你的问题，"平"是指血糖水平的日常波动。正常情况下，早餐后的血糖水平应该相对较高，而晚餐后则应该相对较低。如果你的血糖水平在餐后仍然很高或者很低，那么可能存在一些问题需要关注。\n\n低血糖的症状可能包括头晕、出汗、心慌、饥饿感、视力模糊等。如果你有这些症状，可能是低血糖。但是，你的描述中并没有提到这些症状，所以不能确定你是否患有低血糖。\n\n至于你提到的"平"的问题，我建议你定期监测自己的血糖水平，以便了解自己的血糖控制情况。如果你有任何疑虑或不适，应立即就医。同时，保持健康的生活方式，如均衡饮食、适量运动、保持良好的睡眠习惯和避免压力，都有助于维持正常的血糖水平。\n\n最后，我要强调的是，虽然我可以提供一些基本的医学信息，但我不能替代专业医生的诊断和建议。如果你有任何健康问题，你应该咨询医生或其他合格的医疗专业人士。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">KimiAudio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">听起来，你那边有两个人在交谈，其中一个人在问问题，另一个人在回答。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Llama-Omni2-7B</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">糖尿病患者应选择低GI食物，如全谷物、豆类和非淀粉性蔬菜，并注意分量控制。建议每餐包含蛋白质和健康脂肪，避免过多糖分摄入。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Qwen2-Audio</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您的血糖偏高，且有低血糖发作的历史，建议您注意饮食控制和规律运动。此外，沟通也非常重要，尽量保持清晰、简明的表达方式，避免使用过于专业或复杂的术语，这样有助于您的理解。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">ShizhenGPT</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">根据您的描述，可能存在以下情况：\n\n1. **高血压与低血压的关系**  \n   高血压患者确实可能因长期血压控制不佳或药物副作用出现低血压症状（如头晕、乏力）。但需注意：**低血压本身通常不会直接导致高血压**，两者可能是独立问题。建议监测24小时动态血压，明确血压波动规律。\n\n2. **正常人血压范围参考**  \n   - **理想血压**：<120/80 mmHg  \n   - **正常高值**：120-139/80-89 mmHg  \n   - **高血压1级**：≥140/90 mmHg  \n   （具体诊断需结合年龄、性别等综合评估）\n\n3. **沟通建议**  \n   若您想进一步探讨健康问题，请提供更清晰的症状描述（如头痛频率、睡眠质量、体重变化等），或直接提问具体症状。中医调理需结合舌象、脉象等四诊信息，建议面诊专业医师。\n\n请勿自行用药，及时测量并记录血压数据供医生参考。</div>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechGPT2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">哈哈，这个想法真是太有意思了！你这脑洞开得很大啊，简直是古希腊掌管想象力的神！不过呢，咱们还是得说清楚，公鸡不下蛋这事儿吧，确实是个误会。公鸡呢，它主要是负责打鸣的，不下蛋是正常的。至于晒谷子的时候发高烧，这个嘛，可能是你朋友在开玩笑呢。你要是想了解更多关于鸡的知识，可以去看看一些农业科普书籍，或者上网查查资料，肯定能找到不少有趣的信息。 ###\n</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_None.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist1</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">您说的这种情况，如果是因为脑出血导致的昏迷，那恢复时间会比较长。您能告诉我昏迷持续了多久了吗？还有，有没有其他症状，比如头痛或者恶心？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，你说的情况我明白了。那你觉得自己的血糖控制得怎么样？有没有按时吃药或者打胰岛素？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">SpeechMedAssist2-2k</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">嗯，您说的这种情况，血糖控制得怎么样？有没有按时吃药或者打胰岛素？</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
    <div class="demo-wild-row">
      <span class="demo-wild-role">Zhongjing</span>
      <div class="demo-wild-content">
        <div class="demo-wild-text">对不起，我不太明白您的问题，请您提供更多的上下文信息，以便我更好地回答您的问题。</div>
        <audio controls class="demo-wild-audio"><source src="/file/SMD/wild/doctor_0.mp3" type="audio/mp3"></audio>
      </div>
    </div>
  </div>
</div>

## 2. Single turn

<!-- 内容暂空 -->

## 3. Multi turn

<!-- 内容暂空 -->

<style>
.demo-wild-container {
  max-width: 100%;
  margin: 1rem auto;
}

.demo-wild-card {
  background-color: #ffffff;
  padding: 0.75rem;
  border-radius: 0.5rem;
  box-shadow: 0 3px 6px rgba(0,0,0,0.08);
  margin-bottom: 1rem;
}

.demo-wild-row {
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 0.5rem;
  align-items: start;
  padding: 0.25rem 0;
  border-top: 1px solid #e5e7eb;
}

.demo-wild-row:first-of-type {
  border-top: none;
}

.demo-wild-role {
  font-weight: 500;
  color: #4b5563;
  font-size: 0.875rem;
}

.demo-wild-content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.demo-wild-text {
  font-size: 0.875rem;
  color: #111827;
}

.demo-wild-audio {
  width: 100%;
}
</style>
