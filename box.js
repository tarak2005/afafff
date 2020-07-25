class Box {
    constructor(x, y,width,height) {
    var score = 0;
    var options = {
         isStatic: false,
         restitution :0.3,
         friction :0.5,
         density :1.2
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width = width;
    this.height= height;
    
    
    World.add(world, this.body);
    }
    
    score(){
        if(this.visibility<0 && this.visibility>-105 ){
          score= score+10;
        }}

    display(){

        
        

        if(this.body.speed<3){
            var pos= this.body.position;
            rectMode(CENTER);
            fill(225);
            rect(pos.x,pos.y,this.width,this.height);
      
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility - 5
            score = score +2
            tint(255,this.visibility);
            pop();
        }
       
        
      }
     
      score(){
        if(this.visibility<0 && this.visibility >-105){
          score+1
        }
      }
    
    }