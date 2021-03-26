var canva;
var contestantCount;
var game;
var database; 
var quiz, question;
var contestant, allContestants;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
 game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(contestant === 2){
    game.update(1);
    
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }

}
