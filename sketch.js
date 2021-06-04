var ball,database;
var position;

var gameState=0;
var form,game;

function setup(){
    createCanvas(500,500);
    
    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();
    

   
   
}

function draw(){

  
    

}



