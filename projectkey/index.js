const container=document.getElementById("keyContainer");
container.innerHTML=generateHTML("-","-","-");
window.addEventListener("keydown",(e)=>{
container.innerHTML=generateHTML(e.key,e.code,e.key.charCodeAt(0));
});

function generateHTML(key,code,keycode){

return `
<div class="key-container">
<h4>Key/Code/KeyCode</h4>
<div class="keycontent">${key===" "? "Space": key}
</div>
</div>

<div class="key-container">
<h4>Key/Code/KeyCode</h4>
<div class="keycontent">${code}
</div>
</div>

<div class="key-container">
<h4>Key/Code/KeyCode</h4>
<div class="keycontent">${keycode}
</div>
</div>
`;

}