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
if(box)box.innerHTML=P.map(([n,d])=>`<article class="card"><h3>${n.replace(/-/g,' ')}</h3><p>${d||'Description: missing information.'}</p><p style="margin-top:10px"><a href="https://github.com/tuaseendurrani/${n}" target="_blank" rel="noopener">View repository</a></p></article>`).join('');
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
if(tm){const L=['> opening case file TD-17','> listing credentials... 6 exhibits found','> issuers: Google, Packt, HP, Vanderbilt, PKCERT','> status: records ready for review'];let a=0,b=0;(function n(){if(a>=L.length)return;tm.textContent+=L[a][b++]||'';if(b>=L[a].length){tm.textContent+='\n';a++;b=0;setTimeout(n,350)}else setTimeout(n,rm?0:22)})()}
