const holes=document.querySelectorAll(".hole");
const score=document.getElementById("score");
const moles=document.querySelectorAll(".mole");
let stopgame=false;
let prev;
var scorecount=0;
let alreadystarted=false;
function gethole()
{
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if(hole==prev)
    {
        console.log("same mole");
        gethole();}
    prev=hole;
    return hole;
}
function pop()
{ 
    const time=Math.floor(Math.random()*(750)+350);
    const hole=gethole();
    console.log(hole);
    hole.classList.add('show');
    setTimeout(()=>{
        hole.classList.remove("show");
        if(!stopgame)
        { pop();
        }
    }, time);
    
}
function start() {
    if(!alreadystarted){
    stopgame = false;
    scorecount = 0;
    score.innerHTML=scorecount;
    pop();
    alreadystarted=true;
    setTimeout(() =>stopgame = true, 15000)
        if(stopgame)
        {alreadystarted=false;}
}}
  function wack()
  {
      scorecount++;
      score.innerHTML=scorecount;
      this.parentNode.classList.remove("show");
      console.log("clicked");
  }
  moles.forEach(mole=>mole.addEventListener('click',wack));
  

