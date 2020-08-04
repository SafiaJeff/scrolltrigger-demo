// 2. Alarm clock box: slide in from right, fade in icon, fade in/slide up text

var clockTimeline = gsap.timeline();
clockTimeline.from("#card",{duration:2, xPercent: 100, alpha:0})
            .from("#clock-icon",{duration:1, alpha:0}, "-=1")
            .from(".card-text",{duration:2, yPercent: 400, alpha:0}, "-=1")

ScrollTrigger.create({
    trigger: "#card",
    start: "top 60%",
    end: "bottom 80%",
    animation: clockTimeline,
    toggleActions: "play none none none",
    // scrub: true
    markers: true
});