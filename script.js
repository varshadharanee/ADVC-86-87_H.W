var canvas = new fabric.Canvas("myCanvas");
var x = 10;
var y = 10;
var img_height = 30 ; 
var img_width = 30 ;
var character_object ;
var blockImg_object ; 

function playerUpdate(){
    fabric.Image.fromURL("https://p1.hiclipart.com/preview/485/903/752/captain-marvel-png-clipart.jpg",function(Img){
        character_object = Img;
        character_object.scaleToWidth(150);
        character_object.scaleToHeight(140);
        character_object.set({
            top : y,
            left : x
        })
    })
    canvas.add(player_object);
}

function new_img(getImg){
    fabric.Image.fromURL(getImg , function(Img){
        console.log("inside new img function");
        blockImg_object = Img;
        blockImg_object.scaleToWidth(img_width);   
        blockImg_object.scaleToHeight(img_width);
        blockImg_object.set({
            top : y , 
            left : x
        })
        canvas.add(blockImg_object);
    })
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "187"){
        console.log("hi");
        img_height = img_height + 10;
        img_width = img_width + 10;
        document.getElementById("Width").innerHTML = img_width;
        document.getElementById("Height").innerHTML = img_height;
    }
    if(e.shiftKey == true && keyPressed == "189"){
        console.log("hi");
        img_height = img_height - 10;
        img_width = img_width - 10;
        document.getElementById("Width").innerHTML = img_width;
        document.getElementById("Height").innerHTML = img_height;
    }
    if(keyPressed == "70"){
        new_img("ironMan_face.jpg");
        console.log("f");
    }
    if(keyPressed == "66"){
        new_img("body.jpg");
        console.log("b");
    }
    if(keyPressed == "76"){
        new_img("legs.png");
        console.log("l");
    }
    if(keyPressed == "82"){
        new_img("right_hand.jpg");
        console.log("r");
    }
    if(keyPressed == "72"){
        new_img("left_hand.jpg");
        console.log("h");
    }
    if(keyPressed == "37"){
        left();
    }
    if(keyPressed == "38"){
        up();
    }
    if(keyPressed == "39"){
        right();
    }
    if(keyPressed == "40"){
        down();
    }
}
function up(){
    console.log("inside up");
}
function down(){
    console.log("inside down");
}
function left(){
    console.log("inside left");
}
function right(){
    console.log("inside right");
}