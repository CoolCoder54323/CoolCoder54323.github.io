var state = 0;
document.getElementById("yes").innerHTML = "englishmen";
document.getElementById("no").innerHTML = "native";





function yes() {
  var story = document.getElementById("story").innerHTML
  switch (state) {

    case 0:
      document.getElementById("story").innerHTML = "You wake up with screaming piercing your ears from outside from the cold Southern English environment. You sit up startled and dazed as two Indians break through your door. It’s the Wampanoag Indians, you have a peace treaty with them, but it has been slowly crumbling over the years. Do you...";
      document.getElementById("yes").innerHTML = "fight";
      document.getElementById("no").innerHTML = "jump out window";



      state = 1;
      break;
    case 1:
      document.getElementById("story").innerHTML = story + "<br> <br> You pick up your knife off of the bedside table and stare the Indians down scanning them to decide your best chance of surviving. One of the Wampanoag is holding a tomahawk while the other is holding a bow. Do you attack the...";
      document.getElementById("yes").innerHTML = "tomohawk";
      document.getElementById("no").innerHTML = "bowman";
      state = 2;
      break;

    case 2:
      document.getElementById("story").innerHTML = story + "<br> <br> You lunge at the Indian with the bow straining your arm towards his leg and gashing it deeply, he falls over as you make your swift escape past the tomahawk. You take a quick look around with no Indians within your vision, suddenly you realize that through all of the adrenaline the Wampanoag with the tomahawk had sliced your leg and blood was oozing down. Do you...";
      document.getElementById("yes").innerHTML = "Search a raided house for medical supplies ";
      document.getElementById("no").innerHTML = " Leave into the forest through the cold climate";
      state = 3;
      break;

    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:




  }
  scrollD()
}

function no() {

  var story = document.getElementById("story").innerHTML
  switch (state) {

    case 0:
      document.getElementById("story").innerHTML = story + "<br>the storys over";
      break;
    case 1:
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