class rope{
constructor(body1,body2,offsetx,offsety){
this.offsetx= offsetx
this.offsety= offsety

    var options={
        bodyA:body1,
        bodyB:body2,
       pointB:{x:this.offsetx,x:this.offsety}
        
        
        
        }
        
        this.rope =Constraint.create(options);
        World.add(world,this.rope);
}
display(){
    var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    strokeWeight(2);
    var a1x=pointA.x;
    var a1y=pointA.y;
    var a2x=pointB.x+this .offsetx;
    var a2y=pointB.y+this .offsety;
line (a1x,a1y,a2x,a2y);
}

}