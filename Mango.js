class Mango{
  constructor(x,y,r){
      var options ={
          isStatic:true
      }
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(x,y,r,options);
      this.image=loadImage("mango.png");
      World.add(world,this.body);
  }
  display(){
      push();
      var pos=this.body.position;
      translate(pos.x,pos.y)
      imageMode(CENTER);
      image(this.image,0,0)
      pop();
  }
}