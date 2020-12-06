class Bob {
    constructor(x,y){
        this.radius =40;
        var options={
            isStatic:false,
            restitution:1,
            density:2,
           
        }
        this.body= Bodies.circle(x,y,this.radius/2,options);
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CORNER);
        fill("lime");
        ellipse(pos.x,pos.y,this.radius);



    }


}