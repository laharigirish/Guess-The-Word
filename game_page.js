player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_1").innerHTML = player1_name + ":";
document.getElementById("player_2").innerHTML = player2_name + ":";

document.getElementById("player_1score").innerHTML = player1_score;
document.getElementById("player_2score").innerHTML = player2_score;

document.getElementById("question_turn").innerHTML = "Question Turn is : " + player1_name;
document.getElementById("answer_turn").innerHTML = "Answer Turn is : " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Word in lowe case" + word);;
    letter_2 = word.charAt(1);
    console.log("Letter 2:" + letter_2);

    middle_index = Math.floor(word.length / 2);
    middle_letter = word.charAt(middle_index);
    console.log("Middle letter:" + middle_letter);

    last_index = word.length - 1;
    last_letter = word.charAt(last_index);
    console.log("Last letter:" + last_letter);

    charAt1= word.replace(letter_2, "_");
    console.log(charAt1);
    
    charAt2= charAt1.replace(middle_letter, "_");
    console.log(charAt2);

    
    charAt3= charAt2.replace(last_letter, "_");
    console.log(charAt3);

    question_box= "<h4 id='question_word'>Q: " + charAt3 + "</h4>";
    input_box= "<br><br> Answer: <input id= 'answer_word'>";
    button= "<br> <br>  <button onclick='check()' class= 'btn btn-info'>Check </button>";
    row= question_box+ input_box + button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("word").value="";

}

question_turn= "player_1";
answer_turn= "player_2";

function check(){
    get_ans= document.getElementById("answer_word").value;
    fin_ans= get_ans.toLowerCase();
    console.log(fin_ans + "converted ans");
if (fin_ans == word) {
    if(answer_turn=="player_1"){
   player1_score= player1_score+1;
   console.log(player1_score);
   document.getElementById("player_1score").innerHTML = player1_score;
  }
else{
    player2_score= player2_score+1;
    document.getElementById("player_2score").innerHTML = player2_score;
}
}
if(question_turn == "player_1")
{
    question_turn = "player_2";
    document.getElementById("question_turn").innerHTML = "Question Turn is : " + player2_name;
}
else{
    question_turn =="player_1";
    document.getElementById("question_turn").innerHTML = "Question Turn is : " + player1_name;
}
if(answer_turn == "player_1")
{
    answer_turn= "player_2";
    document.getElementById("answer_turn").innerHTML = "Answer Turn is : " + player2_name;
}
else{
    answer_turn ="player_1";
    document.getElementById("answer_turn").innerHTML = "Answer Turn is : " + player1_name;
}
}