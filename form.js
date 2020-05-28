class Form{
    constructor(){
        this.input = createInput("Name");
        this.text = createElement('h3',"Let's do a fun survey.");
        
        this.question = createElement('h3',"1. Do you prefer Iced Tea or Coffee?");
        this.radio2 = createRadio('h3');
        this.radio2.option("Burger");
        this.radio2.option("Pizza");
        this.question2 = createElement('h3',"Do you prefer burger or pizza?")
        this.radio = createRadio('h3');
        this.radio.option("Iced Tea");
        this.radio.option("Coffee");
        this.submit = createButton("Submit");
        this.endGreeting = createElement('h3',"Thank You For Taking This Survey.");

    }


    hide(){
        this.input.hide();
        this.question.hide();
        this.question2.hide();
        this.radio.hide();
        this.radio2.hide();
        this.submit.hide();
        this.text.hide();
    }
    
    display(){
        
        
        this.input.position(300,150);
        this.text.position(300,50);
        this.question.position(300,300);
        this.radio.position(300,350);
        this.question2.position(300,400);
        this.radio2.position(300,450);
        this.submit.position(400,500);
        

        
        this.submit.mousePressed(()=>{
            user.q1 = this.radio.value();
            user.q2 = this.radio2.value();
            user.name = this.input.value();
            database.ref("user").set({
                question1: user.q1,
                question2: user.q2,
                name: user.name
            })
            this.hide();
            this.endGreeting.position(300,300);
        })
       
        

    }
}