let color_eggshell = [1.0*255,.9216*255,.8039*255];
// 100% red, 92.16% green and 80.39% blue.
let direction = 'EAST';
let square_size = 5;
let count = 0;

function setup() {
    createCanvas(1000, 1000);

    background(color_eggshell);

    // let square_size = 20;
    let pos_x = width/2;
    let pos_y = height/2;
    let ulam_data = 1;

    let direction_count = 2;
    let step_count = 1;
    let step_count_memo = step_count;

    let ulamRect = new UlamRectangle(pos_x, pos_y, ulam_data, direction);
    ulam_set.push(ulamRect);

    // ulamRect.drawUlamRectangle();
    // ulamRect.drawUlamPoints();
    // ulamRect.drawLineSegment();
    ulam_data++;

    while((pos_x < width && pos_y < height)) {
        if (step_count > 0) {
            if (direction === 'NORTH') {
                pos_y -= square_size;
            }
            if (direction === 'WEST') {
                pos_x -= square_size;
            }
            if (direction === 'SOUTH') {
                pos_y += square_size;
            }
            if (direction === 'EAST') {
                pos_x += square_size;
            }

            let ulamRect = new UlamRectangle(pos_x, pos_y, ulam_data, direction);
            ulamRect.prev = ulam_set[ulam_set.length-1]
            ulam_set.push(ulamRect);
            // ulamRect.drawUlamRectangle();
            // ulamRect.drawUlamPoints();
            // ulamRect.drawLineSegment();
            ulam_data++;

            step_count--;
        }
        if (step_count === 0) {
            changeDirection();
            direction_count--;
            if (direction_count === 0) {
                direction_count = 2
                step_count_memo++;
            }
            step_count = step_count_memo;
        }
    }
    console.log(ulam_set);
}

function changeDirection(){
    switch(direction){
        case 'NORTH':
            direction = 'WEST';
            break;
        case 'SOUTH':
            direction = 'EAST'
            break
        case 'EAST':
            direction = 'NORTH';
            break;
        case 'WEST':
            direction = 'SOUTH';
            break;
        default:
            break;
    }
}
function draw() {
    if(count === 1 && ulam_set.length > 0){
        let ulamRect = ulam_set.shift();
        ulamRect.drawUlamPoints();
        ulamRect.drawLineSegment();
        count = 0;
    }
    count++;
}
