var tl = gsap.timeline();

tl.from("#nav img,#nav-part1 h3,#nav-part2 h4,#nav-part2 button",{
    y:-100,
    delay:.5,
    stagger:.2
})

tl.from("#main h1",{
    y:100,
    opacity:0,
    stagger:.3
})
tl.from("#main>img",{
    scale:0,
    opacity:0,
    duration:.3,
    stagger:.3
})

tl.from("#main h5",{
    scale:0,
    opacity:0
})
tl.to("h5",{
    y:30,
    repeat:-1,
    yoyo:true
})