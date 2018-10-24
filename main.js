var state = 1;
document.getElementById("yes").innerHTML = "englishmen";
document.getElementById("no").innerHTML = "native";





function yes() {
  var story = document.getElementById("story").innerHTML
  switch (state) {

    case 1:
       document.getElementById("story").innerHTML = "what do you want to be"
;
      document.getElementById("yes").innerHTML = "English";
      document.getElementById("no").innerHTML = "Natives";
      state = 2
    case 2:
      document.getElementById("story").innerHTML = "You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...
"
;
      document.getElementById("yes").innerHTML = "Fight";
      document.getElementById("no").innerHTML = "Jump out the window behind you";
      state = 3
    case 3:
      document.getElementById("story").innerHTML = "You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...
"
;
      document.getElementById("yes").innerHTML = "Tomahawk";
      document.getElementById("no").innerHTML = "Bow";
      state = 5
    case 4:
    case 5:
      document.getElementById("story").innerHTML = "You lunge at the man holding the tomahawk and stab him in the chest. He screams in agony dropping his weapon. The bow attempts to shoot you, missing by an inch hitting the wall. You make your quick escape and stare behind to make sure no one is chasing you. Looking back may not have been the best decision, considering that you instantly fall straight onto your knife and it impales your leg. Do you...

"
;
      document.getElementById("yes").innerHTML = "Ignore the bleeding wound completely. ";
      document.getElementById("no").innerHTML = "Search an abandoned house for medical supplies ";
      state = 15
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
      document.getElementById("story").innerHTML = "You lunge at the man holding the tomahawk and stab him in the chest. He screams in agony dropping his weapon. The bow attempts to shoot you, missing by an inch hitting the wall. You make your quick escape and stare behind to make sure no one is chasing you. Looking back may not have been the best decision, considering that you instantly fall straight onto your knife and it impales your leg. Do you...

"
;
      document.getElementById("yes").innerHTML = "Do the most stupid thing, ignoring the bleeding wound completely. ";
      document.getElementById("no").innerHTML = "Search an abandoned house for medical supplies ";
      state = 1
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




  }
  scrollD()
}

function scrollD() {
  var objDiv = document.getElementById("story");
  objDiv.scrollTop = objDiv.scrollHeight;
}
