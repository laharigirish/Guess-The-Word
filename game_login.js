function nameupdate(){
 player_1_name= document.getElementById("playername1").value;
 player_2_name= document.getElementById("playername2").value;
 localStorage.setItem("player_1", player_1_name);
localStorage.setItem("player_2", player_2_name);
window.location="game_page.html";
}




