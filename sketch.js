var person, butterfly;
var background;
var points=0;

function preload(){
    personImg=loadImage("person.jpg")
    backgroundImg=loadImage("background.png")
    butterflyImg=loadImage("butterfly.jpg")
}
function setup (){
createCanvas(900,400);
person=createSprite(550,290,40,10);
person.addImage(personImg)
person.scale=0.25
butterfly1=createSprite(300,100,30,30);
butterfly1.addImage(butterflyImg)
butterfly1.scale=0.03
butterfly2=createSprite(400,190,30,30);
butterfly2.addImage(butterflyImg)
butterfly2.scale=0.03
butterfly3=createSprite(190,170,30,30);
butterfly3.addImage(butterflyImg)
butterfly3.scale=0.03
butterfly4=createSprite(450,100,30,30);
butterfly4.addImage(butterflyImg)
butterfly4.scale=0.03
butterfly5=createSprite(700,90,30,30);
butterfly5.addImage(butterflyImg)
butterfly5.scale=0.03
}

function draw(){
    background(backgroundImg);

    if(keyDown(UP_ARROW)){

        person.y=person.y-10;

    }
     if(keyDown(RIGHT_ARROW)){

        person.x=person.x+10;

    }
    if(keyDown(LEFT_ARROW)){

        person.x=person.x-10;

    }

    if(keyDown(DOWN_ARROW)){

        person.y=person.y+10;

    }
    if(person.isTouching(butterfly1)){
        points=points+10
        butterfly1.destroy()
        }
        
        if(person.isTouching(butterfly2)){
            points=points+10
           butterfly2.destroy()
        }
        
            
        if(person.isTouching(butterfly3)){
            points=points+10
            butterfly3.destroy()
        }
            
        if(person.isTouching(butterfly4)){
            points=points+10
            butterfly4.destroy()
        }
            
        if(person.isTouching(butterfly5)){
            points=points+10
            butterfly5.destroy()
        }
        textSize(60)
        text("score : " + points,400,60)
    person.display();
    butterfly1.display();
    butterfly2.display();
    butterfly3.display();
    butterfly4.display();
    butterfly5.display();
}
