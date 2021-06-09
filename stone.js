class Stone {
    constructor(x, y) {
      var options = {
        'density':4,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = this.height;

      world.add(world,this.body);
    }
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      Push();
      Translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeweight(4);
      stroke("black");
      Fill("black");
      rect(0,0,this.width, this.height);
      Pop();
    }
};