class Dustbin{
    constructor(x, y, width, height){
        var options = {
            isStatic: true
        }
        this.leftBody = Bodies.rectangle(450, 550, 20, 150, options);
        this.rightBody = Bodies.rectangle(640, 550, 20, 150, options);
        this.bottomBody = Bodies.rectangle(547, 530, 80, 20, options);
        this.width = width;
        this.height = height;
        this.image= loadImage("dustbin.png");
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
        World.add(world, this.bottomBody);
    }
    display(){
        var pos1 = this.leftBody.position;
        var pos2 = this.rightBody.position;
        var pos3 = this.bottomBody.position;
        var angle1 = this.leftBody.angle;
        var angle2 = this.rightBody.angle;
        var angle3 = this.bottomBody.angle;

        push();
        translate(pos1.x, pos1.y);
        rotate(angle1);
        rectMode(CENTER);
        rect(0, 0, 20, 150);
        pop();

        push();
        translate(pos2.x, pos2.y);
        rotate(angle2);
        rectMode(CENTER);
        rect(0, 0, 20, 150);
        pop();

        push();
        translate(pos3.x, pos3.y);
        rotate(angle3);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}
