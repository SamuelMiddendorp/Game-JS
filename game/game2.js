var GameArea = document.getElementById('GameArea').getContext('2d');
function Player(){
  this.x = 0;
  this.y = 0;
  this.width = 200;
  this.height = 100;
  this.speedx = 4;
  this.speedy = 4;
  this.dir = ""
  this.Main = function(){
    this.Draw(GameArea);
  }
  this.Draw = function(GameArea){
    GameArea.fillRect(this.x,this.y,this.width,this.height);
  }
  this.Move = function(x,y){
    this.x += x;
    this.y += y;
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
    player.Move(0,-1);
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
