
var database;
var user,form;


function setup(){
    createCanvas(600,600);
    database = firebase.database();

    form = new Form();

    user = new User();
    
}

function draw(){
    background(255);

    form.display();
}

