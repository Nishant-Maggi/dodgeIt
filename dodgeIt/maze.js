class Maze1{
    constructor(){
        
        this.wallGroup = new Group();
        this.generateWalls();

        this.goal = createSprite(375,0,750,100);
        this.goal.shapeColor = "red";


    }

    generateWalls(){
        var wallL1 = createSprite(0,400,500,150);
        wallL1.shapeColor = "white";
        this.wallGroup.add(wallL1);

        var wallR1 = createSprite(750,200,500,150);
        wallR1.shapeColor = "white";
        this.wallGroup.add(wallR1);        
        
        
    }

    display(){
        drawSprites()
        console.log("hi ");
    }
}