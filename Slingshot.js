class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB=pointB;
        this.bodyA=bodyA;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(5);
        line(pointA.x,pointA.y, pointB.x, pointB.y);
        console.log(pointA.x)
        console.log(pointA.y)
        console.log(pointB.x)
        console.log(pointB.y)
        console.log(this.chain)
        }

    }
    fly(){
        this.chain.bodyA=null;
    }
}