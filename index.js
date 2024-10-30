const box = document.querySelector('#box');
const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');


// First box timeline
var tl1 = gsap.timeline();
tl1.to(box, {
    rotation: 360,
    duration: 2,
});
tl1.pause();

box.addEventListener("mouseenter", () => {
    tl1.restart(); 
});

// Second box timeline
var tl2 = gsap.timeline();
tl2.to(box1, {
    rotation: 360,
    duration: 2,
});
tl2.pause();

box1.addEventListener("mouseenter", () => {
    tl2.restart(); 
});

// Third box timeline
var tl3 = gsap.timeline();
tl3.to(box2, {
    rotation: 360,
    duration: 2,
});
tl3.pause();

box2.addEventListener("mouseenter", () => {
    tl3.restart(); 
});

// Fourth box timeline
var tl4 = gsap.timeline();
tl4.to(box3, {
    rotation: 360,
    duration: 2,
});
tl4.pause();

box3.addEventListener("mouseenter", () => {
    tl4.restart(); 
});

