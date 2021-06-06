class iron{
	constructor(x,y,height,width)
	{
		var options = {
			'density':30,
			'friction': 3,
			'restitution':0.8
		  };
		this.body=Bodies.circle(this.x, this.y,this.height,this.width, options)
		World.add(world, this.body);
		this.x=x;
		this.y=y;
		this.height = height ;
		this.width = width ;

	};
	display()
	{
			var pos=this.body.position;	
			var angle = this.body.angle;	
			push()
			translate(pos.x,pos.y);
			rotate(angle);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			rect(pos.x, pos.y, this.width, this.height);
			pop()
	};

};