var GameArea = document.getElementById('GameArea').getContext('2d');
function Player(){
  this.x = 0;
  this.y = 0;
  this.width = 20;
  this.height = 50;
  this.speedx = 4;
  this.gravspeed = 4;
  this.speedy = 20;
  this.jumptimer = 0;
  this.jump = false;
  this.onground = false;
  this.dir = ""
  this.Main = function(){
    this.Draw(GameArea);
    this.Gravity();
    this.Collision();
  }
  this.Draw = function(GameArea){
    GameArea.fillRect(this.x,this.y,this.width,this.height);
  }
  this.Move = function(x,y){
    this.x += x*this.speedx;
    this.y += y*this.speedy;
  }
  this.Jump = function(){
    this.jump = true;
    if (this.jump && this.jumptimer <= 4){
      this.jumptimer += 1;
      this.y -= (this.speedy);
    }
    else{
      this.jump = false;
    }
  }
  this.Gravity = function(){
    this.y += this.gravspeed;
  }
  this.Collision = function(){
    if (this.y >= 300){
      this.onground = true;
      this.jumptimer = 0;
      this.y = 300;
    }
    else{
      this.onground = false;
    }
  }
}
leftpressed = false;
rightpressed = false;
uppressed = false;
downpressed = false;
keydown = function(event){
      if (event.keyCode == 37){
        leftpressed = true;
        console.log("hello")
      }
      else if (event.keyCode == 38){
        uppressed = true;
      }
      if (event.keyCode == 39){
        rightpressed = true;
      }
      else if (event.keyCode == 40){
        downpressed = true;
      }
}
keyup = function(event){
      if (event.keyCode == 37){
        leftpressed = false;
        console.log("hello")
      }
      else if (event.keyCode == 38){
        uppressed = false;
      }
      if (event.keyCode == 39){
        rightpressed = false;
      }
      else if (event.keyCode == 40){
        downpressed = false;
      }
}
// Objects
player = new Player();
// Event listeners
window.addEventListener('keydown',keydown,false);
window.addEventListener('keyup',keyup,false);
setInterval(GameLoop, 1000/60);
function GameLoop(){
  Clear();
  player.Main();
  //movement
  if(leftpressed){
    player.Move(-1,0);
  }
  else if(rightpressed){
    player.Move(1,0);
  }
  if(uppressed){
    player.Jump();
  }
  else if(downpressed){
    player.Move(0,1);
  }

}
function Pausescreen(){

}
function Clear(){
  GameArea.clearRect(0, 0, 640, 480);
}
