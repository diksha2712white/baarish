class Boy{
    constructor(x,y){

        var options={
            isStatic:true,
          }
          this.image = loadImage("WalkingFrame/walking_5.png")
        this.body = Bodies.rectangle(x,y,30,30,options)
        World.add(world,this.body)
       
      
    

    }
    display(){

        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y+100,300,300)

    }
}
