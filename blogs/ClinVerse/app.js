const $=s=>document.querySelector(s);
const metrics=['ICR','TOC','ATC','DCA','DSA'];
const models=[
{name:'Lingshu-32B',v:[28.82,.58,1.32,28.20,11.60],sd:[2.69,.18,.29,2.17,1.95]},
{name:'Baichuan-M2-32B',v:[26.90,56.30,65.60,29.41,19.22],sd:[.72,1.92,2.13,3.40,4.02]},
{name:'HealthGPT-Pro-4B',v:[12.79,22.04,24.24,25.67,9],sd:[1.87,1.18,1.60,3.06,1.73]},
{name:'HealthGPT-Pro-8B',v:[10.62,33.90,36.56,24,11.60],sd:[1.41,2.73,3.43,8.34,5.46]},
{name:'GPT-4o-mini',v:[27.49,47.45,60.98,32.20,19.20],sd:[.41,2.42,2.64,1.10,2.39]},
{name:'GPT-5.6-Luna',v:[35.55,56.63,68.01,40.37,32.89],sd:[1.29,2.06,2.19,1.92,1.68]},
{name:'Claude-Sonnet-4.6',v:[33.45,55.93,67.42,38.07,24.19],sd:[1.06,1.90,2.13,1.87,2.29]},
{name:'Qwen3-8B',v:[14.33,40.70,48.44,23.20,7.80],sd:[1.07,1.83,2.43,2.39,2.77]},
{name:'Qwen3-32B',v:[13.96,40.84,48.06,26.04,12.43],sd:[1.34,1.85,1.80,2.69,1.12]}];
let sortIndex=4,sortDirection=-1,modelFamily='all';
const isMedical=m=>/^(Lingshu|Baichuan|HealthGPT)/.test(m.name);
function modelLogo(name){return /^(Qwen|GPT|Claude|Lingshu|Baichuan|HealthGPT)/i.exec(name)[1].toLowerCase()}

function visibleModels(){const query=$('#model-search').value.trim().toLowerCase();return models.filter(m=>(modelFamily==='all'||(modelFamily==='medical'?isMedical(m):!isMedical(m)))&&m.name.toLowerCase().includes(query)).sort((a,b)=>(a.v[sortIndex]-b.v[sortIndex])*sortDirection)}
function renderTable(){const sorted=visibleModels();$('#leaderboard-body').innerHTML=sorted.length?sorted.map((m,i)=>`<tr class="${i===0?'top-row':''}"><td>${String(i+1).padStart(2,'0')}</td><td><div class="model-identity"><img class="model-logo" src="assets/models/${modelLogo(m.name)}.svg" alt="" width="32" height="32"><div><span class="model-name">${m.name}</span><span class="model-type">${isMedical(m)?'Medical':'General-purpose'}</span></div></div></td>${m.v.map((v,j)=>`<td class="${j===sortIndex?'selected-metric':''}" style="--score:${v}">${v.toFixed(2)}<small>± ${m.sd[j].toFixed(2)}</small></td>`).join('')}</tr>`).join(''):'<tr><td colspan="7" class="empty-results">No matching models. Try a different name or category.</td></tr>';
 document.querySelectorAll('[data-sort]').forEach(b=>{const selected=+b.dataset.sort===sortIndex;b.innerHTML=metrics[+b.dataset.sort]+' <span class="metric-benefit" aria-hidden="true">↑</span>';b.setAttribute('aria-label',metrics[+b.dataset.sort]+', higher is better');b.closest('th').classList.toggle('selected-metric',selected);b.closest('th').setAttribute('aria-sort',selected?(sortDirection<0?'descending':'ascending'):'none')});
 $('#model-count').textContent=`${sorted.length} of ${models.length} models`;
 $('#ranking-label').textContent=`Sorted by ${metrics[sortIndex]} · ${sortDirection<0?'descending':'ascending'}`;
 document.querySelectorAll('[data-model-family]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.modelFamily===modelFamily));
}
document.querySelectorAll('[data-sort]').forEach(b=>b.onclick=()=>{const j=+b.dataset.sort;sortDirection=j===sortIndex?-sortDirection:-1;sortIndex=j;renderTable()});
document.querySelectorAll('[data-model-family]').forEach(b=>b.onclick=()=>{modelFamily=b.dataset.modelFamily;renderTable()});$('#model-search').oninput=renderTable;renderTable();
$('#export').onclick=()=>{const rows=[['Doctor agent',...metrics.flatMap(m=>[m+' mean (%)',m+' SD (%)'])],...visibleModels().map(m=>[m.name,...m.v.flatMap((v,j)=>[v,m.sd[j]])])];const blob=new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='clinverse-table2-static-agents.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
const methods={L1:[['Trace2Skill',[14.48,38.26,49.09,29.20,16.60]],['SkillRL',[15.46,37.08,47.10,27.60,16.40]],['MemRL-offline',[14.36,43.02,54.16,31.40,16.80]],['MedAgent-Zero',[12.48,25,32.92,29.25,13]]],L2:[['MemRL-online',[15.50,40.34,49.65,30.87,19.33]],['Dynamic Cheatsheet',[11.48,49.33,57.45,33.40,20.60]],['ACE',[13.48,39.83,51.63,30.40,20]]],L3:[['Self-Taught Optimizer',[12.89,40.32,50.85,29.40,17.60]],['Meta Context Engineering',[12.84,42.11,51.43,28.40,16.40]],['MedRSI',[13.26,39.88,49.38,31.40,17.80]]]};const baseModel=models.find(m=>m.name==='Qwen3-32B');
const methodSD={
'Trace2Skill':[.93,3.64,4.48,2.49,4.45],'SkillRL':[.71,1.41,2.49,2.51,3.65],'MemRL-offline':[1,1.79,1.26,4.16,3.03],'MedAgent-Zero':[.65,2.06,2.72,3.77,2.58],
'MemRL-online':[8.96,1.93,2.71,4.62,3.95],'Dynamic Cheatsheet':[.76,.66,1.55,5.86,4.83],'ACE':[1.38,2.77,3.17,2.30,3.16],
'Self-Taught Optimizer':[1.16,.97,4.07,6.11,4.98],'Meta Context Engineering':[1.74,2.19,3.12,5.32,4.22],'MedRSI':[.36,3.14,4.98,4.51,4.21]};
const evolutionRows=Object.entries(methods).flatMap(([level,rows])=>rows.map(([name,v])=>({name,level,v,sd:methodSD[name]})));
let evoLevel='All',evoView='score',evoSort=4,evoDirection=-1;
function renderEvolution(){
 const visible=evolutionRows.filter(m=>evoLevel==='All'||m.level===evoLevel).sort((a,b)=>(a.v[evoSort]-b.v[evoSort])*evoDirection);
 const values=(m,isBase=false)=>m.v.map((v,i)=>{const d=v-baseModel.v[i];return evoView==='delta'?`<td class="${d>0?'gain':d<0?'loss':''}">${isBase?'—':`${d>0?'+':''}${d.toFixed(2)}`}</td>`:`<td>${v.toFixed(2)}<small>± ${m.sd[i].toFixed(2)}</small></td>`}).join('');
 $('#evolution-base').innerHTML=`<tr class="base-row"><td>—</td><td>Base model</td><td><span class="level-tag">L0</span></td>${values(baseModel,true)}</tr>`;
 $('#evolution-body').innerHTML=visible.map((m,i)=>`<tr class="${i===0?'top-row':''}"><td>${String(i+1).padStart(2,'0')}</td><td>${m.name}</td><td><span class="level-tag ${m.level.toLowerCase()}">${m.level}</span></td>${values(m)}</tr>`).join('');
 document.querySelectorAll('[data-evo-sort]').forEach(b=>{const selected=+b.dataset.evoSort===evoSort;b.innerHTML=metrics[+b.dataset.evoSort]+' <span class="metric-benefit" aria-hidden="true">↑</span>';b.setAttribute('aria-label',metrics[+b.dataset.evoSort]+', higher is better');b.closest('th').classList.toggle('selected-metric',selected);b.closest('th').setAttribute('aria-sort',selected?(evoDirection<0?'descending':'ascending'):'none')});
 document.querySelectorAll('[data-evo-level]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.evoLevel===evoLevel));
 document.querySelectorAll('[data-evo-view]').forEach(b=>b.setAttribute('aria-pressed',b.dataset.evoView===evoView));
 $('#evolution-table-note').textContent=evoView==='score'?'Mean ± standard deviation (%) · ↑ Higher is better':'Change from Base in percentage points · ↑ Higher is better';
}
document.querySelectorAll('[data-evo-level]').forEach(b=>b.onclick=()=>{evoLevel=b.dataset.evoLevel;renderEvolution()});
document.querySelectorAll('[data-evo-view]').forEach(b=>b.onclick=()=>{evoView=b.dataset.evoView;renderEvolution()});
document.querySelectorAll('[data-evo-sort]').forEach(b=>b.onclick=()=>{const i=+b.dataset.evoSort;evoDirection=i===evoSort?-evoDirection:-1;evoSort=i;renderEvolution()});
$('#export-evolution').onclick=()=>{const rows=[['Method','Level',...metrics.flatMap(m=>[m+' mean (%)',m+' SD (%)'])],...[{...baseModel,name:'Base model',level:'L0'},...evolutionRows].map(m=>[m.name,m.level,...m.v.flatMap((v,j)=>[v,m.sd[j]])])];const url=URL.createObjectURL(new Blob([rows.map(r=>r.join(',')).join('\n')],{type:'text/csv;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='clinverse-evolution-table2.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000)};
$('#open-training-figure').onclick=()=>$('#figure-dialog').showModal();$('#close-figure').onclick=()=>$('#figure-dialog').close();$('#figure-dialog').onclick=e=>{if(e.target===$('#figure-dialog'))$('#figure-dialog').close()};renderEvolution();
const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('nav a').forEach(a=>{const active=a.hash==='#'+e.target.id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')})}},{rootMargin:'-15% 0px -65% 0px',threshold:0});document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));


// A complete request/response is choreographed as one message, not a repeating dashed line.
const flowStates=[
 {chain:['Doctor agent','Environment controller','Patient simulator'],caption:'The doctor asks a question. The controller routes it to the patient, then returns the response.',legs:[['doctor',false,'Question','doctor','controller'],['patient',false,'Question','controller','patient'],['patient',true,'Response','patient','controller'],['doctor',true,'Response','controller','doctor']]},
 {chain:['Doctor agent','Environment controller','Laboratory physician','Latent patient simulator'],caption:'The controller routes the doctor’s examination order to the laboratory physician, which queries the latent case state for the requested findings.',legs:[['doctor',false,'Order','doctor','controller'],['lab',false,'Order','controller','lab'],['records',true,'Lookup','lab','latent']]},
 {chain:['Latent patient simulator','Laboratory physician','Environment controller','Doctor agent'],caption:'The laboratory physician retrieves recorded findings or uses ClinLab when results are missing, then returns the report through the controller to the doctor.',legs:[['records',false,'Findings','latent','lab'],['lab',true,'Report','lab','controller'],['doctor',true,'Report','controller','doctor']]},
 {chain:['Environment controller','Diagnostic judge','Doctor agent'],caption:'The completed trajectory is evaluated. Rule-based scores provide feedback for evaluation and training.',legs:[['judge',false,'Trajectory','controller','judge'],['feedback',false,'Scores','judge','doctor']]}
];
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
let flowStep=0,flowPaused=motionPreference.matches,flowAuto=true,flowElapsed=0,flowLast=0,flowVisible=true;
const flowPaths={};document.querySelectorAll('.flow-links path').forEach(path=>{const key=path.id.replace('route-','');flowPaths[key]={node:path,length:path.getTotalLength()};const trail=document.createElementNS('http://www.w3.org/2000/svg','path');trail.setAttribute('d',path.getAttribute('d'));trail.dataset.signal=key;$('.signal-trails').append(trail)});
function renderFlow(){const state=flowStates[flowStep];document.querySelectorAll('[data-flow]').forEach(b=>b.setAttribute('aria-pressed',+b.dataset.flow===flowStep));$('#flow-caption').textContent=state.caption;$('#flow-mobile').innerHTML=state.chain.map((name,i)=>`${i?`<span class="mobile-flow-arrow" aria-hidden="true">${CVIcon('arrow-down')}</span>`:''}<div class="mobile-flow-node" data-mobile-role="${name}">${CVIcon(({'Doctor agent':'doctor','Environment controller':'controller','Patient simulator':'patient','Laboratory physician':'lab','Latent patient simulator':'latent','Diagnostic judge':'judge'})[name])}<span>${name}</span></div>`).join('');$('#flow-play').innerHTML=CVIcon(flowPaused?'play':'pause')+(flowPaused?'Play':'Pause');$('#flow-play').setAttribute('aria-label',flowPaused?'Play information flow animation':'Pause information flow animation');document.querySelectorAll('[data-role]').forEach(n=>n.classList.remove('processing'));paintFlow();}
function paintFlow(){const state=flowStates[flowStep],duration=6800,cycle=Math.min(flowElapsed/duration,.9999),segment=cycle*state.legs.length,index=Math.floor(segment),local=segment-index;const [route,reverse,label,source,target]=state.legs[index];const eased=local<.5?4*local*local*local:1-Math.pow(-2*local+2,3)/2;const p=flowPaths[route].node.getPointAtLength(flowPaths[route].length*(reverse?1-eased:eased));const envelope=Math.min(eased/.25,(1-eased)/.25,1),smooth=envelope*envelope*(3-2*envelope),scale=.18+.82*smooth;$('#flow-packet').setAttribute('transform',`translate(${p.x} ${p.y}) scale(${scale})`);$('#flow-packet').style.opacity=motionPreference.matches?'0':String(Math.min(eased/.04,(1-eased)/.04,1));$('#flow-packet text').textContent=label;document.querySelectorAll('[data-role]').forEach(n=>{n.classList.toggle('active',n.dataset.role===source||n.dataset.role===target);n.classList.toggle('processing',n.dataset.role===target&&local>.73)});document.querySelectorAll('[data-signal]').forEach(n=>{const active=n.dataset.signal===route;n.classList.toggle('active',active);if(active){const length=flowPaths[route].length,tail=Math.min(26,length*.3),distance=length*(reverse?1-eased:eased);n.style.strokeDasharray=`${tail} ${length+tail}`;n.style.strokeDashoffset=String((reverse?0:tail)-distance)}});document.querySelector(`[data-flow="${flowStep}"]`).style.setProperty('--flow-progress',String(cycle));document.querySelectorAll('.mobile-flow-node').forEach(n=>n.classList.toggle('receiving',n.dataset.mobileRole===({doctor:'Doctor agent',controller:'Environment controller',patient:'Patient simulator',lab:'Laboratory physician',latent:'Latent patient simulator',judge:'Diagnostic judge'})[target]));}
function animateFlow(time){const dt=flowLast?Math.min(time-flowLast,80):0;flowLast=time;if(!flowPaused&&!motionPreference.matches&&flowVisible&&!document.hidden){flowElapsed+=dt;if(flowElapsed>=6800){flowElapsed=0;if(flowAuto)flowStep=(flowStep+1)%flowStates.length;renderFlow()}paintFlow()}requestAnimationFrame(animateFlow)}
document.querySelectorAll('[data-flow]').forEach(b=>b.onclick=()=>{flowStep=+b.dataset.flow;flowElapsed=0;flowAuto=false;flowPaused=motionPreference.matches;renderFlow()});$('#flow-play').onclick=()=>{flowPaused=!flowPaused;if(!flowPaused)flowAuto=true;renderFlow()};motionPreference.addEventListener('change',()=>{flowPaused=motionPreference.matches;renderFlow()});new IntersectionObserver(entries=>{flowVisible=entries[0].isIntersecting},{threshold:.1}).observe($('.environment-flow'));renderFlow();requestAnimationFrame(animateFlow);

// Quiet, one-time entrances; layout and data stay readable without motion or JS support.
(() => {
 const preference=window.matchMedia('(prefers-reduced-motion: reduce)');
 const groups=[['.hero-copy',0],['.environment-flow',120],['.section-heading',0],['.simulation-shell',80],['.leaderboard',80],['.evolution-leaderboard',80],['.training-figure',150]];
 const observed=new Map();
 const reveal=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;const node=entry.target;reveal.unobserve(node);if(!preference.matches){node.style.setProperty('--enter-delay',observed.get(node)+'ms');node.classList.add('motion-enter');node.addEventListener('animationend',()=>node.classList.remove('motion-enter'),{once:true})}}},{threshold:.06});
 for(const [selector,delay] of groups)for(const node of document.querySelectorAll(selector)){observed.set(node,delay);reveal.observe(node)}
 preference.addEventListener('change',()=>{if(preference.matches)document.querySelectorAll('.motion-enter').forEach(node=>node.classList.remove('motion-enter'))});
})();
