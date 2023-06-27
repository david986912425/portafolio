var typed = new Typed("#element", {
  strings: ["David Esteban ✋", "Fullstack Developer"],
  typeSpeed: 100,
  loop: true,
  backDelay: 1000,
});

//canvas
$(document).ready(function (){
    if(!$("#myCanvas").tagcanvas({
        textColour: "#08fdd8",
        outlineColour: "transparent",
        reverse: true,
        depth: 0.8,
        maxSpeed: 0.05,
        wheelZoom: false,
        weight: true,
    }, "tags")){
        $("#myCanvasContainer");
    }
})
