var gameState = "mainMenu";

var player;

var dodgeIt;

var lev1,lev2,lev3,lev4,lev5,lev6,lev7,lev8,lev9,level0;

var wall1,wall2,wall3;

var maze;

function setup() {

  createCanvas(750,700);

  //createing the title for the game
  dodgeIt = createElement('h1');


  //creating the level 1 button
  lev1 = createButton('Level  1');

  //creating the level 2 button
  lev2 = createButton('Level   2');

  //creating the level 3 button
  lev3 = createButton('Level   3');

  //creating the level 4 button
  lev4 = createButton('Level   4');

  //creating the level 5 button
  lev5 = createButton('Level   5');

  //creating the level 6 button
  lev6 = createButton('Level   6');
    
  //creating the level 7 button
  lev7 = createButton('Level   7');
  
  //creating the level 8 button
  lev8 = createButton('Level   8');
  
  //creating the level 9 button
  lev9 = createButton('Level   9');

  //creating the level 10 button
  lev10 = createButton('Level   10');


  //creating the sprite for the player
  player = createSprite(200,200,20,20);

  player.visible = false;

  player.shapeColor = "black";
}

function draw() {

  background("blue");

  if(gameState === "mainMenu"){

    //positioning the title
    dodgeIt.html("Dodge the Wall");
    dodgeIt.position(250,10);
    
   

    //positioning the level 1 button
    lev1.position(50,150);
   
    lev1.mousePressed(()=>{
      
      gameState = "stage1";
      maze = new Maze1();
    })


    //positioning the level 2 button
    lev2.position(250,150);

    lev2.mousePressed(()=>{
      gameState = "stage2";
    })


    //positioning the level 3 button 
    lev3.position(450,150);


    lev3.mousePressed(()=>{
      gameState = "stage3";
    })


    //positioning the level 4 button
    lev4.position(650,150);

    lev4.mousePressed(()=>{
      gameState = "stage4";
    })


    //positioning the level 5 button
    lev5.position(150,250);

    lev5.mousePressed(()=>{
      gameState = "stage5";
    })
  
    
    //positioning the level 6 button
    lev6.position(350,250);

    lev6.mousePressed(()=>{
      gameState = "stage6";
    })

    //positioning the level 7 button
    lev7.position(550,250);

    lev7.mousePressed(()=>{
      gameState = "stage7";
    })

    //positioning the level 8 button
    lev8.position(250,350);

    lev8.mousePressed(()=>{
      gameState = "stage8";
    })

    //positioning the level 9 button
    lev9.position(450,350);

    lev9.mousePressed(()=>{
      gameState = "stage9";
    })

    //positioning the level 10 button
    lev10.position(350,450);

    lev10.mousePressed(()=>{
      gameState = "stage10";
    })
    
  }

  if(gameState !== "mainMenu"){
    player.visible = true;
  }

  //giving the if statement for the stage 1 game state
  if(gameState === "stage1"){
    
    buttonHide();

    player.x = 20;
    player.y = 680;

    
  }

  
  if(maze){
    maze.display();
  }
}

//creating a function for hiding all the button
function buttonHide(){
  lev1.hide();
  lev2.hide();
  lev3.hide();
  lev4.hide();
  lev5.hide();
  lev6.hide();
  lev7.hide();
  lev8.hide();
  lev9.hide();
  lev10.hide();
  dodgeIt.hide();
}

function keyPressed(){
  if(keyCode === 32){
    if(gameState !== "mainMenu"){
      switch (gameState){
        case "stage1": 
        console.log(gameState);
        player.velocityY = -2;
        break;
        case "stage2":
        player.velocityY = -4;
        break;
        default:
        break;
        
      }
    }
  }
}


