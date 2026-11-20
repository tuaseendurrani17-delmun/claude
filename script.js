// Mobile menu
const tg=document.getElementById('tg'),menu=document.getElementById('menu');
if(tg)tg.onclick=()=>{const o=menu.classList.toggle('open');tg.setAttribute('aria-expanded',o)};
document.getElementById('yr').textContent=new Date().getFullYear();
// Computer Science projects (edit descriptions here; null = missing information)
const P=[
["Smart-University-Management-System","C++ data structures lab project: array, search, singly/doubly linked list and stack modules in one menu-driven program."],
["Doubly-Linked-List-Operating-System",null],["Single-Linked-List-Operating-System",null],
["ONLINE-FOOD-ORDERING-SYSTEM",null],["Bank-Account-Managment-System",null],
["Factorial-calculator",null],["Sum-of-Sequence-Calculator",null],
["Multiplication-Tables-Generator",null],["Simple-Scientific-Calculator",null],
["Matrix-Multiplier",null],["Genetics-Modifier",null],
["Restuarant-Management-System",null],["Library-Management-System",null],["Election-Management-System",null]];
const box=document.getElementById('projects');
if(box&&document.body.classList.contains('cs'))box.innerHTML=P.map(([n,d])=>`<article class="card"><h3>${n.replace(/-/g,' ')}</h3><p>${d||'Description: missing information.'}</p><p style="margin-top:10px"><a href="https://github.com/tuaseendurrani/${n}" target="_blank" rel="noopener">View repository</a></p></article>`).join('');
// Cyber typing line
const t=document.getElementById('typed');
if(t){const s='Investigating threats. Studying human and machine weaknesses.';let i=0;(function f(){t.textContent=s.slice(0,i++);if(i<=s.length)setTimeout(f,35)})()}
// ---- v2 effects ----
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('.card,.sec3 a,.links a').forEach(e=>e.classList.add('spot'));
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.spot');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')}});
if(!rm&&'IntersectionObserver' in window){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('h2,.card,.sec3 a,.links a,.tag,.miss').forEach(e=>{e.classList.add('rv');e.style.setProperty('--d',[].indexOf.call(e.parentNode.children,e)%8*.07+'s');io.observe(e)})}
// Cyber: digital rain + terminal log
const cv=document.getElementById('rain');
if(cv&&!rm){const x=cv.getContext('2d');let d=[];const fit=()=>{cv.width=cv.offsetWidth;cv.height=cv.offsetHeight;d=Array(Math.ceil(cv.width/16)).fill(0)};fit();addEventListener('resize',fit);
setInterval(()=>{x.fillStyle='rgba(6,3,11,.15)';x.fillRect(0,0,cv.width,cv.height);x.fillStyle='#a855f7';x.font='14px monospace';d.forEach((y,i)=>{x.fillText('01ABCDEF<>/{}'[Math.random()*13|0],i*16,y*16);d[i]=y*16>cv.height&&Math.random()>.97?0:y+1})},70)}
const tm=document.getElementById('term');
if(tm){const L=['> opening case file TD-17','> listing credentials... 9 exhibits found','> issuers: Google, Packt, HP, Vanderbilt, PKCERT, Huawei','> status: records ready for review'];let a=0,b=0;(function n(){if(a>=L.length)return;tm.textContent+=L[a][b++]||'';if(b>=L[a].length){tm.textContent+='\n';a++;b=0;setTimeout(n,350)}else setTimeout(n,rm?0:22)})()}
// ---- v3: timeline ----
const SEMS=window.SEM||[],tlx=document.getElementById('tlx');
if(tlx){document.getElementById('cgpa').textContent=window.CGPA||'n/a';const dd=document.getElementById('tld');
const show=n=>{const s=SEMS.find(x=>x.n===n);[...tlx.children].forEach(b=>b.setAttribute('aria-pressed',b.dataset.n==n));
dd.innerHTML=s?`<h3>Semester ${n}${s.progress?' <span class="tag">In progress</span>':''}</h3>${s.progress?'':`<p>SGPA: <b>${s.sgpa}</b></p><p style="margin-top:8px">Top courses: ${s.top.map(c=>`<span class="tag hi">${c}</span>`).join('')}</p>`}<p style="margin-top:12px">All courses (${s.all.length})</p><ul class="cl">${s.all.map(c=>`<li${s.top&&s.top.includes(c)?' class="hi"':''}>${c}</li>`).join('')}</ul>`:`<h3>Semester ${n}</h3><p class="miss">Not completed yet.</p>`};
for(let n=1;n<=8;n++){const b=document.createElement('button');b.className='nd'+(SEMS.some(x=>x.n===n&&!x.progress)?' done':'');b.dataset.n=n;b.textContent='Semester '+n;b.onclick=()=>show(n);tlx.append(b)}
show(Math.max(1,...SEMS.map(x=>x.n)))}
// ---- v3: developer mode (footer click) ----
const pg=['cs','cy','vid'].find(c=>document.body.classList.contains(c));
const esc=s=>String(s).replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';'),safeUrl=u=>/^https?:\/\//i.test(u)?u:'';
const loc=()=>{try{return JSON.parse(localStorage.getItem('pf_local'))||[]}catch(e){return[]}};
const save=a=>{try{localStorage.setItem('pf_local',JSON.stringify(a))}catch(e){alert('Could not save in this browser.')}};
function paint(){document.querySelectorAll('.xtra').forEach(e=>e.remove());if(!pg)return;
[...(window.EXTRA||[]).map(x=>({...x,pub:1})),...loc().map((x,i)=>({...x,i}))].filter(x=>x.p===pg).forEach(x=>{
const h=document.getElementById({skill:'skills',cert:'certs',project:'projects'}[x.t]);if(!h)return;
h.querySelectorAll('.miss').forEach(m=>m.remove());const u=safeUrl(x.u||''),xb=x.pub?'':`<button class="rm" data-i="${x.i}" aria-label="Remove">×</button>`;
const ln=u?`<p style="margin-top:10px"><a href="${esc(u)}" target="_blank" rel="noopener">${x.t==='cert'?'Verify credential':'View link'}</a></p>`:`<p class="miss" style="margin-top:10px">Link: missing information</p>`;
h.insertAdjacentHTML('beforeend',x.t==='skill'?`<span class="tag xtra">${esc(x.n)}${xb}</span>`:
x.t==='cert'?`<article class="card spot xtra${pg==='cy'?' ex':''}"><h3>${esc(x.n)}${xb}</h3><p>Issued by ${esc(x.o)}${x.dt?' · '+esc(x.dt):''}.</p>${ln}</article>`:
`<article class="card spot xtra"><h3>${esc(x.n)}${xb}</h3><p>${x.d?esc(x.d):'Description: missing information.'}</p>${ln}</article>`)})}
paint();
const dv=document.getElementById('dev'),bar=document.getElementById('devbar');
const setDev=on=>{document.body.classList.toggle('dev',on);try{on?sessionStorage.setItem('pf_dev','1'):sessionStorage.removeItem('pf_dev')}catch(e){}};
if(dv){bar.innerHTML=(pg?['project','skill','cert'].map(t=>`<button class="btn" data-add="${t}">Add ${{project:'Project',skill:'Skill',cert:'Certificate'}[t]}</button>`).join(''):'')+'<button class="btn" id="exp">Export data</button><button class="btn" id="clr">Clear local</button>';
dv.onclick=()=>setDev(!document.body.classList.contains('dev'));dv.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();dv.click()}};
try{if(sessionStorage.getItem('pf_dev'))setDev(true)}catch(e){}}
const FLD={project:[['n','Project name',1],['d','Description',0,1],['u','Repository or video link (https://...)',0]],skill:[['n','Skill name',1]],
cert:[['n','Certification name',1],['o','Issuing organization',1],['dt','Issue date (optional)',0],['u','Credential link (https://...)',0]]};
function modal(h,done){const dl=document.createElement('dialog');dl.innerHTML=h;document.body.append(dl);dl.showModal();dl.onclose=()=>{done&&done(dl);dl.remove()}}
document.addEventListener('click',e=>{const el=e.target,r=el.closest('.rm'),a=el.closest('[data-add]');
if(r){const l=loc();l.splice(+r.dataset.i,1);save(l);paint()}
if(a){const t=a.dataset.add;modal(`<form method="dialog"><h3>Add ${{project:'project',skill:'skill',cert:'certificate'}[t]}</h3>${FLD[t].map(([k,l,q,x])=>`<label for="f${k}">${l}${q?' *':''}</label>${x?`<textarea id="f${k}" name="${k}" rows="3"></textarea>`:`<input id="f${k}" name="${k}" ${q?'required':''}>`}`).join('')}<button class="btn f" value="ok">Save</button> <button class="btn" value="x" formnovalidate>Cancel</button></form>`,dl=>{
if(dl.returnValue!=='ok')return;const o={t,p:pg};new FormData(dl.querySelector('form')).forEach((v,k)=>{if(v.trim())o[k]=v.trim()});
if(o.u&&!safeUrl(o.u)){alert('Link must start with https:// so it was not saved.');delete o.u}save([...loc(),o]);paint()})}
if(el.id==='clr'&&confirm('Remove everything added in this browser that is not yet published?')){save([]);paint()}
if(el.id==='exp'){const tx=`window.CGPA=${JSON.stringify(window.CGPA)};\nwindow.SEM=${JSON.stringify(window.SEM)};\nwindow.EXTRA=${JSON.stringify([...(window.EXTRA||[]),...loc()],null,1)};`;
modal(`<form method="dialog"><h3>Export data</h3><p class="miss">Copy this, open data.js on GitHub, replace everything, and commit. Then click Clear local.</p><textarea id="ex" rows="10" readonly></textarea><button type="button" class="btn f" id="cp">Copy</button> <button class="btn" value="x">Close</button></form>`);
const x=document.getElementById('ex');x.value=tx;document.getElementById('cp').onclick=()=>{x.select();try{navigator.clipboard.writeText(tx)}catch(_){document.execCommand('copy')}}}});
