class Question {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
   // this.greeting = createElement('h2');

  }
hide(){
this.input.hide();
this.button.hide();
//this.greeting.hide();

}

  display(){
    var title = createElement('h2')
    title.html("My Quiz Game");
    title.position(130, 0);
    
   // var input = createInput("Name");
   // var button = createButton('Play');
    
    this.input.position(130, 160);
   this.button.position(250, 200);

    this.button.mousePressed(() =>{
      this.input.hide();
      this.button.hide();
      contestant.name = this.input.value();
      contestantCount+=1;
      contestant.index = contestantCount;
     
      //var name = input.value();
      
     
      contestant.update()
      contestant.updateCount(contestantCount);
  //    var greeting = createElement('h3');
     // this.greeting.html("Hello " + contestant.name );
     // this.greeting.position(130, 160)
    });

  }
}
