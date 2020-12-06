class Rope{

    constructor(body1,body2,offsetX,offsetY){

        this.offsetX = offsetX;
        this.offsetY= offsetY;
        var options ={
            bodyA : body1,
            bodyB : body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.chain= Constraint.create(options);
        World.add(world,this.chain);
    }

    display(){
        var point1 = this.chain.bodyA.position;
        var point2= this.chain.bodyB.position;
        var x= point2.x+this.offsetX;
        var y= point2.y+this.offsetY;
        
        stroke(255);
        line(point1.x,point1.y,x,y);
        
    }



}