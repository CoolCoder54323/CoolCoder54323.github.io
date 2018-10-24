var state = 0;
document.getElementById("yes").innerHTML = "englishmen";
document.getElementById("no").innerHTML = "native";





function yes() {
  var story = document.getElementById("story").innerHTML
  switch (state) {

    case 1:
      document.getElementById("story").innerHTML = "You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...";
      document.getElementById("yes").innerHTML = "fight";
      document.getElementById("no").innerHTML = "jump out window";



      state = 2;
      break;
    case 2:
      document.getElementById("story").innerHTML = story + "<br> <br> You pick up your knife off of the bedside table and stare the Indians down scanning them to decide your best chance of surviving. One of the Wampanoag is holding a tomahawk while the other is holding a bow. Do you attack the...";
      document.getElementById("yes").innerHTML = "tomohawk";
      document.getElementById("no").innerHTML = "bowman";
      state = 4;
      break;

    case 3:

    case 4:
      document.getElementById("story").innerHTML = "who do you want to be";
      document.getElementById("yes").innerHTML = "Englishmen";
      document.getElementById("no").innerHTML = "Native";
      state = 1;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
    case 31:
    case 32:
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:




  }
  scrollD()
}

function no() {

  var story = document.getElementById("story").innerHTML
  switch (state) {


    case 1:
      document.getElementById("story").innerHTML = "You jump out your window thinking that you have avoided the Wampanoag Indians and all harm that they could cause you only to see 8 different Wampanoag Indians surrounding as they begin to stab you to death.
";
      document.getElementById("yes").innerHTML = "reset";
      document.getElementById("no").innerHTML = "reset";



      state = 4;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:




  }
  scrollD()
}

function scrollD() {
  var objDiv = document.getElementById("story");
  objDiv.scrollTop = objDiv.scrollHeight;
}

