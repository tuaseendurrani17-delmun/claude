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
