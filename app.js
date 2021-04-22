function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        //Toggle Nav
        nav.classList.toggle("nav-active");
        
        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle("toggle");
    });
    
}

navSlide();

 

TweenMax.from(".logo", 3, {
    delay: 0.01,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});



TweenMax.from(".dynamic-txts", 3, {
    delay: 0.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.staggerFrom(".media ul li", 2, {
    delay: 0.3,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);


TweenMax.from(".p1", 3, {
    delay: 0.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


TweenMax.from(".p2", 3, {
    delay: 0.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
    delay: 1.3,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});


var t1 = new TimelineMax();

t1.from(".earth", 3, {
    delay: 0.1,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
})


TweenMax.from(".btn", 3, {
    delay: 0.1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".second-video", 3, {
    delay: 0.5,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".text", 3, {
    delay: 0.8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});
TweenMax.from(".card-container", 3, {
    delay: 0.5,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});
TweenMax.from(".about-info", 3, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
});
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
.add({
targets: '.ml7 .letter',
translateY: ["1.1em", 0],
translateX: ["0.55em", 0],
translateZ: 0,
rotateZ: [180, 0],
duration: 750,
easing: "easeOutExpo",
delay: function(el, i) {
return 900 + 50 * i;
}
});