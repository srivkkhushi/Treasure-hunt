function submitForm() {
    var count=0;
    var clue1 = document.getElementById("clue-1").value;
    var clue2 = document.getElementById("clue-2").value;
    var clue3 = document.getElementById("clue-3").value;
    var clue4 = document.getElementById("clue-4").value;
    var clue5 = document.getElementById("clue-5").value;
    if(clue1=="Vampires"){
      count++;}
    if(clue2=="Vervain"){
      count++;}
    if(clue3=="The original"){
      count++;}
    if(clue4=="Bonnie"){
      count++;}
    if(clue5=="Stefan Salvatore"){
      count++;}
    console.log(count)
    document.getElementById("score").innerHTML = "Total Score: " + count;

    console.log("clue: " + clue1);
    console.log("clue: " + clue2);
    console.log("clue: " + clue3);
    console.log("clue: " + clue4);
    console.log("clue: " + clue5);
 
    document.getElementById("clue1").value = "";
    document.getElementById("clue2").value = "";
    document.getElementById("clue3").value = "";
    document.getElementById("clue4").value = "";
    document.getElementById("clue5").value = "";
  }
  