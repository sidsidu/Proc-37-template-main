class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide()
    Contestant.getPlayerInfo()
    if (allContestants !== undefined){
    var index = 0;
    var x = 0
    var y 

    for(var plr in allContestants){
      index = index+1;
      x=x+200
      y = displayHeight - allContestants[plr].answer;

    }
   
    //write code to change the background color here
    background("yellow")
    //write code to show a heading for showing the result of Quiz
    textSize(20)
    text(allContestants[plr].name + ":" + allContestants[plr].answer,120,100)
    //call getContestantInfo( ) here
    
    var correctAns = "2"
    if(correctAns === allContestants[plr].answer){
      fill("green")
    }
      else{
        fill("red")
      }
    
      


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
  }
  }

}
