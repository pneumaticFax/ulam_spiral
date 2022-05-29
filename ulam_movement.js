let Movement = function () {
    let currentState = new East(this);
    let directionChanges = 2;
    let stepCounter = 1;
    let changeDirection = false;

    this.change = function(state) {
        // limits number of changes
        if (directionChanges === 0){
            directionChanges = 2;
            currentState = state;
            currentState.go();
        }

    };

    this.start = function () {
        currentState.go();
    };
}

let East = function (dir) {
    this.dir = dir;

    this.go = function () {
        console.log("Traveling East");
        
        dir.change(new North(dir));
    }
};

let North = function (dir) {
    this.dir = dir;

    this.go = function () {
        console.log("Traveling North");
        dir.change(new West(dir));
    }
};

let West = function (dir) {
    this.dir = dir;

    this.go = function () {
        console.log("Traveling West");
        dir.change(new South(dir));
    }
};

let South = function (dir) {
    this.dir = dir;

    this.go = function () {
        console.log("Traveling South");
        dir.change(new East(dir));
    }
};

