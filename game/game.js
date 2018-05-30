var GameArea = document.getElementById('GameArea').getContext('2d');
var controller;
function Player(x,y,w,h){
    this.x_cor = x;
    this.y_cor = y;
    this.width = w;
    this.height = h;
    this.speed = 3;
    this.image = new Image();
    this.image1 = new Image();
    this.image2 = new Image();
    this.image2.src = "images/Char3.png"
    this.image1.src = "images/Char2.png"
    this.image.src = "images/Char1.png"
    this.canmove = true;
    this.move = function(x,y){
        this.x_cor += x * this.speed;
        this.y_cor += y * this.speed;
      }
    this.slide = function(){
    }
    this.draw = function(GameArea,Dir){
      if(Dir=='down'){
          GameArea.drawImage(this.image,this.x_cor ,this.y_cor);
      }
      else if(Dir=='right'){
          GameArea.drawImage(this.image1,this.x_cor ,this.y_cor);
      }
      else if(Dir=='left')
          GameArea.drawImage(this.image2,this.x_cor ,this.y_cor);

    }
    this.collision = function(){
      }
}
var Player = new Player(30, 30, 50, 100);
setInterval(Logic, 1000/60);
setInterval(Draw, 1000/60);

controller = {
    left: false,
    right: false,
    up: false,
    down: false,
    KeyPressed: 'down',
    KeyListener: function(event){
      var KeyState = (event.type== 'keydown')?true:false;
      switch(event.keyCode){
        case 37:
          controller.left = KeyState;
          if (KeyState){
          controller.KeyPressed = 'left';
          }
          console.log('left');
        break;
        case 38:
          controller.up = KeyState;
          console.log('up');
          if (KeyState){
          controller.KeyPressed = 'up';
          }
        break;
        case 39:
          controller.right = KeyState;
          console.log('right');
          if (KeyState){
          controller.KeyPressed = 'right';
          }
        break;
        case 40:
          controller.down = KeyState;
          console.log('down');
          if (KeyState){
          controller.KeyPressed = 'down';
          }
        break;
      }

    }
}
window.addEventListener('keydown',controller.KeyListener,false);
window.addEventListener('keyup',controller.KeyListener,false);
function Logic(){
  if(controller.left){
    Player.move(-1,0)
  }
  else if(controller.right){
    Player.move(1,0)
  }
  else if(controller.up){
    Player.move(0,-1)
  }
  else if(controller.down){
    Player.move(0,1)
  }
}
function Draw(){
  Clear();
  Player.draw(GameArea,controller.KeyPressed);
}
function Clear(){
  GameArea.clearRect(0, 0, 640, 480);
}
