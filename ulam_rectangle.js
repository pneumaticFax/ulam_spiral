class UlamRectangle{

    constructor(x, y, data, direction) {
        //center
        this.x = x;
        this.y = y;
        this.w = square_size;
        this.h = square_size;
        this.data = data;
        this.isPrime = determine_prime(data);
        this.prev = null;
    }

    drawLineSegment = function(){
        push();
        strokeWeight(square_size/10);
        stroke('black');
        if(this.prev !== null){
            line(this.x, this.y, this.prev.x, this.prev.y);
        }
        pop();
    }

    drawUlamPoints = function(){
        push();
        strokeWeight(square_size/2);
        this.isPrime ? stroke('green') : stroke(color_eggshell);
        point(createVector(this.x, this.y));
        pop();
    }

    drawUlamRectangle = function() {
        push();
        textSize(8);
        strokeWeight(.5);
        stroke(255);
        fill(51);
        rect(this.x, this.y, this.w, this.h);
        this.isPrime ? fill('green') : fill(255);
        textAlign(CENTER,CENTER);
        text(this.data, this.x + this.w/2, this.y+this.h/2);
        pop();
    }

    setUlamCoords = function(pos_x, pos_y) {
        this.x = pos_x;
        this.y = pos_y;
    }
}