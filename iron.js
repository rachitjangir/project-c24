class Iron {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction':3,
        'dencity':30
      };

      this.body =Bodies.rectangle(x,y,50,50,options);
      this.width=80;
      this.height=50;
      
      
    };
    display(){
      var pos =this.body.position;
      var angle =this.body.angle;
      Push();
      Translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      world.add(world,this.body);
      Fill("brown");
      rect(0,0,this.width, this.height);
      Pop();
    };
};