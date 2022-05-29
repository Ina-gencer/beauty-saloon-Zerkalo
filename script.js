gsap.from('.animOne', {opacity: 0, duration:3.5, delay:.7, stagger:.4}) 
gsap.from(".animImage", {y:70, opacity: 0, duration:3, delay:.4})

gsap.from('.animTwo', {opacity:0, duration:2.5, delay:1.5, ease:"bounce", duration:2, y: -30})
let text = "Высокое качество обслуживания и индивидуальный подход к каждому клиенту по демократичным ценам.";
let i = 0;
let speed = 20;
function type() {
    if( i < text.length) {
        document.querySelector(".typeText").textContent += text.charAt(i);
        i++;
        setTimeout(type, speed)
    }
}
type();
gsap.from(".animFive", { delay:3.5, duration:3, opacity:0, x: - 400})
gsap.from(".animFour", { delay:3, duration:3, opacity:0, x:  400})

gsap.from(".animThree", {opacity:0, duration: 2, delay:2, stagger:1.5, y: -10, repeat: -1})
gsap.from(".contactUs", {duration:3, rotation: 360, delay: 5.5})
//gsap.from(".animImage", {y:30, opacity: 1, duration:1})

