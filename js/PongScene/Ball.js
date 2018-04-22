// Ball class constructor: 1 class per file, file name is "class name".js
function Ball(canvas) {
    this.ballX = 400 - PADDLE_THICKNESS/2;
    this.ballY = paddle2X + (PADDLE_THICKNESS / 2);
    
    this.ballSpeedX = 10;
    this.ballSpeedY = 10;
    
    this.meatDraw = function() {
        colorCircle(this.ballX, this.ballY, 10, "red");
    };
    
    this.plantDraw = function() {
        colorCircle(this.ballX, this.ballY, 10, "green");
    };
    
    this.ballMove = function() {
        if (this.ballY >= canvas.height) {
            foodInPlay = false;
            launchPlantMode = false;
            launchMeatMode = false;
            return;
        }

        if (this.ballY <= 0) {
            launchPlantMode = false;
            launchMeatMode = false;
            foodInPlay = false;
            // Food gets to hippogriff, add to "fuel" level based on quality of food consumed
            return; 
        }
        
        if (this.ballX <= 0 || this.ballX >= canvas.width) {
            this.ballSpeedX *= -1;
        }

        if (this.ballY > paddle1Y && this.ballY < (paddle1Y + PADDLE_HEIGHT) 
        && this.ballX > paddle1X && this.ballX < paddle1X + PADDLE_THICKNESS) {
            var deltaX = this.ballX-(paddle1X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }

        if (this.ballY > paddle2Y && this.ballY < (paddle2Y + PADDLE_HEIGHT) 
        && this.ballX > paddle2X && this.ballX < paddle2X + PADDLE_THICKNESS) {
            var deltaX = this.ballX-(paddle2X+PADDLE_THICKNESS/2);
            this.ballSpeedY = -this.ballSpeedY;
            this.ballSpeedX = deltaX * 0.35;
        }

        this.ballX += this.ballSpeedX;
        this.ballY += this.ballSpeedY;
    }
    
    this.ballReset = function() {
        this.ballX = 75;
        this.ballY = 75;
        this.ballSpeedX = 8;
        this.ballSpeedY = 8;
    }
}