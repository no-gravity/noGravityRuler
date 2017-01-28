style=`#noGravityRuler {
 position: absolute;
 top: 10px;
 left: 0px;
 background: red;
 width: 100%;
 height: 1px;
}`;

s=document.createElement("style");
s.textContent=style;
document.head.appendChild(s);

noGravityRuler=document.createElement("div");
noGravityRuler.id="noGravityRuler";

document.body.appendChild(noGravityRuler);

function noGravityRulerMove(e) {
 noGravityRuler.style.top=e.clientY+"px";
}

function noGravityRulerClick(e) {
  document.body.removeChild(noGravityRuler);
}

document.onmousemove=noGravityRulerMove;
noGravityRuler.onclick=noGravityRulerClick;
