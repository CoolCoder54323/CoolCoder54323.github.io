var state = 1;
document.getElementById("yes").innerHTML = "englishmen";
document.getElementById("no").innerHTML = "native";





function yes() {
  var story = document.getElementById("story").innerHTML
  switch (state) {
      
    case 1:
      jump("You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...",
           "Fight",
           "Jump out the window behind you",
           0)
      break;
    case 2:
      jump("","","",0)
      break;
    case 3:
      jump("","","",0)
      break;
    case 4:
      jump("","","",0)
      break;
    case 5:
      jump("","","",0)
      break;
    case 6:
      jump("","","",0)
      break;
    case 7:
      jump("","","",0)
      break;
    case 8:
      jump("","","",0)
      break;
    case 9:
      jump("","","",0)
      break;
    case 10:
      jump("","","",0)
      break;
    case 11:
      jump("","","",0)
      break;
    case 12:
      jump("","","",0)
      break;
    case 13:
      jump("","","",0)
      break;
    case 14:
      jump("","","",0)
      break;
    case 15:
      jump("","","",0)
      break;
    case 16:
      jump("","","",0)
      break;
    case 17:
      jump("","","",0)
      break;
    case 18:
      jump("","","",0)
      break;
    case 19:
      jump("","","",0)
      break;
    case 20:
      jump("","","",0)
      break;
    case 21:
      jump("","","",0)
      break;
    case 22:
      jump("","","",0)
      break;
    case 23:
      jump("","","",0)
      break;
    case 24:
      jump("","","",0)
      break;
    case 25:
      jump("","","",0)
      break;
    case 26:
      jump("","","",0)
      break;
    case 27:
      jump("","","",0)
      break;
    case 28:
      jump("","","",0)
      break;
    case 29:
      jump("","","",0)
      break;
    case 30:
      jump("","","",0)
      break;
    case 32:
      jump("","","",0)
      break;
    case 33:
      jump("","","",0)
      break;
    case 34:
      jump("",
           "",
           "",
           0)
     break;
    case 35:
      jump("","","",0)
      break;

    case 36:
      jump("","","",0)
      break;

    case 37:
      jump("","","",0)
      break;



  }
  scrollD()
}

function no() {

  var story = document.getElementById("story").innerHTML
  switch (state) {

    case 1:
    case 2:
    case 3:
    case 4:
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
    break;




  }
  scrollD()
}


function scrollD() {
  var objDiv = document.getElementById("story");
  objDiv.scrollTop = objDiv.scrollHeight;
}
function jump(story,yes,no,state1){
  var storyOG = document.getElementById("yes").innerHTML
      document.getElementById("story").innerHTML = storyOG + "<br><br>" + story;
      document.getElementById("yes").innerHTML = yes;
      document.getElementById("no").innerHTML = no;
      state = state1
}

