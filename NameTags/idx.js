let wrapper = document.querySelector(".wrapper");
let template = document.querySelector("template");

let names = ["GUNDA", "GUNDI", "BHUNDI"];
let colors = ["#FF0000", "#00FF0E", "#FF00C0", "#00FF10", "#FF00C0", "#00FF01"];

let sticker = function(name, color) {
    let div = template.content.querySelector(".container");
    let clonedDiv = div.cloneNode(true); // Clone template content
    let nameofStick = clonedDiv.querySelector(".name");

    nameofStick.innerHTML = name; // Set name text
    clonedDiv.style.backgroundColor = color; // Set background color

    // Initial hidden state
    clonedDiv.style.opacity = "0";
    clonedDiv.style.transform = "scale(0.5) translateY(20px)";

    wrapper.appendChild(clonedDiv);

    // Animate after a slight delay
    setTimeout(() => {
        clonedDiv.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
        clonedDiv.style.opacity = "1";
        clonedDiv.style.transform = "scale(1) translateY(0)";
    }, 100);
};

// Loop through names and create stickers with staggered animation
names.forEach((name, index) => {
    setTimeout(() => {
        sticker(name, colors[index % colors.length]); // Cycle through colors
    }, index * 500); // Delay each sticker appearance
});
