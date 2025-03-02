const container = document.querySelector(".container");

function dropped() {
    const drop = document.createElement("span");
    drop.classList.add("drop");

  
    drop.style.top = Math.random() * window.innerHeight + "px";
    drop.style.left = Math.random() * window.innerWidth + "px";

    container.appendChild(drop);

    setTimeout(() => {
        drop.remove();
    }, 5000);
}

setInterval(dropped, 500);
