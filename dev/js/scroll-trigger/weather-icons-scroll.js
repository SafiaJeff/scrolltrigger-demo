// 3. Animate weather icons

var weatherTimeline = gsap.timeline();
weatherTimeline.from("#lightning",{duration:.75, xPercent: -400, rotate:100, alpha:0}, "pair1")
                .from("#sun",{duration:.75, yPercent: -100, rotate:360, alpha:0}, "pair2")
                .from("#wind",{duration:.75, yPercent: 100, rotate:200, alpha:0}, "pair1")
                .from("#snow",{duration:.75, xPercent: 100, rotate:100, alpha:0}, "pair2")
           

ScrollTrigger.create({
    trigger: "#weather-icons",
    start: "top 50%",
    end: "bottom 70%",
    animation: weatherTimeline,
    toggleActions: "play none reverse none"
    // scrub: true
    // id: "weather",
    // markers: true
});

