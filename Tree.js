class Tree{
    constructor(x,y){
        var options ={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y);
        this.image=loadImage("tree.png");
        this.image.scale=0.2;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        image(this.image,1000,5)
    }
}