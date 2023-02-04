let lastKeys = [];

function draw() {
    background(255,255,255);
    fill(0,0,150);
    textSize(60);
    text(lastKeys.join(" "),100,200);
    
}
function keyReleased() {
    if (lastKeys.length >=10) {
        lastKeys.splice(0,1);
    }
        lastKeys.push(key);
        
    }


    

