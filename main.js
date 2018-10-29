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
           2)
      break;
    case 2:
      jump("You pick up your knife off of the bedside table and stare the Indians down scanning them to decide your best chance of surviving. One of the Wampanoag is holding a tomahawk while the other is holding a bow. Do you attack the...",
           "Tomahawk",
           "Bow",
           3)
      break;
    case 3:
      jump("You lunge at the man holding the tomahawk and stab him in the chest. He screams in agony dropping his weapon. The bow attempts to shoot you, missing by an inch hitting the wall. You make your quick escape and stare behind to make sure no one is chasing you. Looking back may not have been the best decision, considering that you instantly fall straight onto your knife and it impales your leg. Do you...",
           "Ignore the bleeding wound completely",
           "Search an abandoned house for medical supplies",
           5)
      break;
    case 4:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 5:
      jump("You Bleed out and die. Now that was just stupid. What did you expect?",
           "reset",
           "reset",
           15)
            break;
    case 6:
      jump("You run to a house that appears to have already been raided searching for bandages, and much to your luck you discover bandages and a cloth to keep your wound clean. Do you...",
           "find a safe hiding spot outside then apply bandages",
           "Apply bandages in the house",
           7)
            break;
    case 7:
      jump("You attempt to leave the house only to find a group of the Wampanoag Indians right outside of the door. They must have heard you rummaging the house. Of course, you die ",
           "reset",
           "reset",
          14)
            break;
    case 8:
      jump("You begin to head back towards the settlement not realizing that you are making quite a bit of noise, you forget about the invaders focusing on your wound and just when you can see the settlement an arrow flies through your chest as you drop to the ground.",
           "reset",
           "reset",
           9)
            break;
    case 9:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 10:
      jump("You fall asleep for about 40 minutes not getting a full hour because you wake up in excruciating pain. You stare down at your wound as your vision goes blurry and you pass out and perish.",
           "reset",
           "reset",
           11)
            break;
    case 11:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 12:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 13:
      jump("You inspect the source of the footsteps finding yourself eye to eye with an Indian when you turn the corner. Startled you fall backwards and ask why they have raided your settlement. The Indian named King Philip explains that they are attempting to drive you out of England for taking their land before he kills you.",
           "reset",
           "reset",
           16)
            break;
    case 14:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
          break;
    case 15:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
          break;
    case 16:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 17:
      jump("You begin walking North towards the frontier. You check on your leg, it already looking better and re-apply the bandages. Do you...",
           "Rest for the night",
           "Tuff the walk out for another 12 hours",
           18)
            break;
    case 18:
      jump("You drift off to sleep and wake up in the morning. Your wound is looking better and you feel ready to continue. The only thing you need is some food and water. Finding water is a breeze and it only takes you seconds to find a stream. Finding food on the other hand is difficult for you. You don’t want to starve to death anytime soon. Do you...",
           "Continue without food",
           "Cut off a chunk of your torso and eat it.",
           20)
            break;
    case 19:
      jump("You attempt to withstand the natives and in doing so they get freaked out, proceeding to beat you to death with their bare hands.",
           "reset",
           "reset",
           34)
            break;
    case 20:
      jump("You continue walking and eventually make it to the frontier. You proceed to the back of the frontier to talk to the whoever is in charge. Upon embarking there Commander Jorgan asks if you are doing ok and asks if you know why it happened. Do you...",
           "Say that you already know",
           "Ask him to tell you the story",
           22)
            break;
    case 21:
      jump("Chief Jorgan begins to explain what has happened over the past months. The Wampanoag along with a few other tribes have been raiding villages attempting to drive us out of England. Your settlement is the 12th one to be attacked and hopefully the final. We had beheaded three of their warriors starting the war between us. Their leader King Philip was extremely upset and decided to take drastic measures. Chief Jorgan explains that he has an army ready to invade them on command and that they will begin their way to the Wampanoag on your command. Do you...",
           "Send the the pilgrim army now",
           "Send the army tomorrow after you are rested",
           25)
            break;
    case 22:
      jump("This is probably important. You should listen along.",
           "Ask to hear",
           "Ask to hear",
           25)
            break;
    case 23:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 24:
      jump("Chief Jorgan begins to explain what has happened over the past months. The Wampanoag along with a few other tribes have been raiding villages attempting to drive us out of England. Your settlement is the 12th one to be attacked and hopefully the final. We had beheaded three of their warriors starting the war between us. Their leader King Philip was extremely upset and decided to take drastic measures. Chief Jorgan explains that he has an army ready to invade them on command and that they will begin their way to the Wampanoag on your command. Do you...",
           "Send the the pilgrim army now",
           "Send the army tomorrow after you are rested",
           25)
            break;
    case 25:
      jump("Considering the trouble that the Natives caused you, you decide to grab your musket and lead the army today. The army begins their trek through the forest back to your destroyed settlement. Once you arrive the the Wampanoag are still raiding the settlement. Do you... ",
           "Charge your army",
           "Send one man in to scout",
           0)
            break;
    case 26:
      jump("Your army rushes into the decaying settlement and begins firing at the Wampanoag. Bodies drop to the ground after the lead bullets get stuck inside of them. The Natives fight back with bows, as more and more rush in to help. You have the clear advantage considering that only a few Natives are wielding muskets. You see King Philip fighting along with the rest, easily recognized with his different appearance in clothing. The Wampanoag’s numbers begin to die down and eventually they surrender. Do you... ",
           "Behead King Philip and let the rest go",
           "Behead King Philip and sell the rest into slavery",
           0)
            break;
    case 27:
      jump("You gather the Indians and surround them with King Philip in the middle. To signify the end of the war you behead king Philip the leader of the Wampanoag. You release the other indians, and have won the war pridefully and generously.",
           "click here to partae",
           "click here to partae",
           50)
            break;
    case 28:
      jump("",
           "",
           "",
           0)
            break;
    case 29:
      jump("",
           "",
           "",
           0)
            break;
    case 30:
      jump("Your army rushes into the decaying settlement and begins firing at the Wampanoag. Bodies drop to the ground after the lead bullets get stuck inside of them. The Natives fight back with bows, as more and more rush in to help. You have the clear advantage considering that only a few Natives are wielding muskets. You see King Philip fighting along with the rest, easily recognized with his different appearance in clothing. The Wampanoag’s numbers begin to die down and eventually they surrender. Do you... ",
           "Behead King Philip and let the rest go",
           "Behead King Philip and sell the rest into slavery",
           27)
            break;
    case 31:
      jump("",
           "",
           "",
           0)
            break;
    case 32:
      jump("",
           "",
           "",
           0)
            break;
    case 33:
      jump("",
           "",
           "",
           0)
            break;
    case 34:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
     break;
    case 35:
      jump("",
           "",
           "",
           0)
            break;

    case 36:
      jump("",
           "",
           "",
           0)
            break;

    case 37:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 40:
      jump("",
           "",
           "",
           0)
            break;
    case 41:
      jump("",
           "",
           "",
           0)
            break;
    case 42:
      jump("",
           "",
           "",
           0)
            break;
    case 43:
      jump("",
           "",
           "",
           0)
            break;
    case 44:
      jump("",
           "",
           "",
           0)
            break;
    case 45:
      jump("",
           "",
           "",
           0)
            break;
    case 46:
      jump("",
           "",
           "",
           0)
            break;
    case 47:
      jump("",
           "",
           "",
           0)
            break;
    case 48:
      jump("",
           "",
           "",
           0)
            break;
    case 49:
      jump("",
           "",
           "",
           0)
            break;

    
  }
  scrollD()
}

function no() {

  var story = document.getElementById("story").innerHTML
    switch (state) {
      
    case 1:
      jump("You consult King Philip about the next frontier to be raided. After you and your fellow warriors had destroyed and raided 11 consecutive frontiers this would be no different. The war all started after the white men killed off three of your warriors for no reason, drastic measures have to be taken, although you are not sure if fighting is the right option and stop to rethink what you are doing. Do you...",
           "Fight like garbanzo beans",
           "Talk to King Philip about just consulting the English men or moving",
           36)
      break;
    case 2:
      jump("You jump out your window thinking that you have avoided the Wampanoag Indians and all harm that they could cause you only to see 8 different Wampanoag Indians surrounding as they begin to stab you to death.",
           "reset",
           "reset",
           4)
      break;
    case 3:
      jump("You lunge at the Indian with the bow straining your arm towards his leg and gashing it deeply, he falls over as you make your swift escape past the tomahawk. You take a quick look around with no Indians within your vision, suddenly you realize that through all of the adrenaline the Wampanoag with the tomahawk had sliced your leg and blood was oozing down. Do you...",
           "Search a raided house for medical supplies",
           "Leave into the forest through the cold climate",
           6)
      break;
    case 4:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
      	  break;
    case 5:
      jump("You run to a house that appears to have already been raided searching for bandages, and much to your luck you discover bandages and a cloth to keep your wound clean. Do you...",
           "find a safe hiding spot outside then apply bandages",
           "Apply bandages in the house",
           7)
            break;
    case 6:
      jump("You run into the forest towards the nearest settlement in search of help, but while you run your wound gets filthy and infected. Do you...",
           "Head back to the invaded settlement to search for medical supplies",
           "Tough it out and stop acting like a wuss",
           8)
            break;
    case 7:
      jump("You clean off your wound and put the bandages on. Whilst you are almost finished applying that bandage you hear many people walking below you. Do you..",
           "Inspect the footsteps",
           "Ditch out the window",
           13)
            break;
    case 8:
      jump("You decide that it’s not worth going back to the settlement because of the Wampanoag and continue heading towards to the nearest settlement to consult the reset of your fellow English. You decide to rest for a little as you are tired from fighting. Do you...",
           "Sleep for an hour",
           "Stay awake but rest",
           10)
            break;
    case 9:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 10:
      jump("You stay awake perceiving that it is most likely the safest way to be safe from the Wampanoag. After only 40 minutes of waiting you go into shock while your leg causes excruciating pain killing you after 5 minutes.",
           "reset",
           "reset",
           11)
            break;
    case 11:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 12:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 13:
      jump("You instantly jump out the window petrified of what could be outside and much to your luck you land safely on some soft grass. Do you...",
           "Head towards the nearest frontier in search of help",
           "Attempt to talk to the Indians",
           17)
            break;
    case 14:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
          break;
    case 15:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1,
           true)
            break;
    case 16:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 17:
      jump("You decide that it is only logical to talk to the Indians, they are people too. You approach one, hands in the air and they surround you. They do not kill you only drag you with them. Do you...",
           "Resist",
           "Agree to go with them",
           19)
            break;
    case 18:
      jump("HOW-HOW could you have possibly though that cutting off apart of your torso than EATING IT would've worked, You’re not a trained medical professional and if you were you wouldn't have done that because you're body naturally eats itself when you start to starve, and you realize that after you cut a major artery. You begin to bleed out sitting there in stupidity.",
           "reset",
           "reset",
           23)
            break;
    case 19:
      jump("You walk with the Wampanoag and they take you to meet King Philip their leader in this “rebelion”. He explains to you about why they have begun to raid your frontiers, you fall asleep for an unknown amount of time, and wake up hearing the sound of gunfire. There is no one around you, and suddenly another pilgrim breaks into the house you are in setting your free from your ropes. The pilgrims had won the battle successfully getting them to surrender. Do you...",
           "Behead King Philip and let the rest go",
           "Behead King Philip and sell the rest into slavery",
           29)
            break;
    case 20:
      jump("HOW HOW could you have possibly though that cutting off apart of you're torso than EATING IT would've worked, You’re not a trained medical professional and if you were you wouldn't have done that because you're body naturally eats itself when you start to starve, and you realize that after you cut a major artery. You begin to bleed out sitting there in stupidity.",
           "reset",
           "reset",
           23)
            break;
    case 21:
      jump("This is probably important. You should listen along.",
           "Ask to hear",
           "Ask to hear",
           24)
            break;
    case 22:
      jump("This is probably important. You should listen along.",
           "Ask to hear",
           "Ask to hear",
           24)
            break;
    case 23:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
            break;
    case 24:
      jump("Chief Jorgan begins to explain what has happened over the past months. The Wampanoag along with a few other tribes have been raiding villages attempting to drive us out of England. Your settlement is the 12th one to be attacked and hopefully the final. We had beheaded three of their warriors starting the war between us. Their leader King Philip was extremely upset and decided to take drastic measures. Chief Jorgan explains that he has an army ready to invade them on command and that they will begin their way to the Wampanoag on your command. Do you...",
           "Send the the pilgrim army now",
           "Send the army tomorrow after you are rested",
           25)
            break;
    case 25:
      jump("Your army treks through the woods and makes it to the abandoned settlement. Lucky for you the Wampanoag are still there roaming, and raiding the settlement. Do you...",
           "Send your army in right away",
           "send one guy in to scout",
           30)
            break;
    case 26:
      jump("You send your favorite soldier, Nick, in to scout. He peaks around the corner, looks side to side, turns around, gives the thumbs, and is instantly shot in the head. The Wampanoag see you and begin firing at your army with muskets and bows. Many of your men are dropping. Do you...",
           "retreat",
           "Stand your ground",
           31)
            break;
    case 27:
      window.location.href = "https://coolcoder54323.github.io/win.html";
            break;
    case 28:
      jump("",
           "",
           "",
           0)
            break;
    case 29:
      jump("You gather the Indians and surround them with King Philip in the middle. To signify the end of the war you behead king Philip the leader of the Wampanoag. You sell the other Indians into slavery, however some of them escape to Canada to begin a new life. You won the war cruelly.",
           "You win click here!",
           "You win click here!",
           27)
            break;
    case 30:
      jump("You send your favorite soldier, Nick, in to scout. He peaks around the corner, looks side to side, turns around, gives the thumbs, and is instantly shot in the head. The Wampanoag see you and begin firing at your army with muskets and bows. Many of your men are dropping. Do you...",
           "retreat",
           "Stand your ground",
           31)
            break;
    case 31:
      jump("You tell your army to stand their ground and they do so. FInally all of the pilgrims begin to hit their shots as if they were not trying before. Bodies drop to the ground after the lead bullets get stuck inside of them. The Natives fight back with bows, as more and more rush in to help. You have the clear advantage considering that only a few Natives are wielding muskets after the many you slaightered. You see King Philip fighting along with the rest, easily recognized with his different appearance in clothing. The Wampanoag’s numbers begin to die down and eventually they surrender. Do you... ",
           "Behead King Philip and let the rest go",
           "Behead King Philip and sell the rest into slavery",
           33)
            break;
    case 32:
      jump("",
           "",
           "",
           0)
            break;
    case 33:
      jump("",
           "",
           "",
           0)
            break;
    case 34:
      jump("What do you want to be",
           "Englishmen",
           "Native",
           1)
     break;
    case 35:
      jump("",
           "",
           "",
           0)
            break;

    case 36:
      jump("",
           "",
           "",
           0)
            break;

    case 37:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 39:
      jump("",
           "",
           "",
           0)
            break;
    case 40:
      jump("",
           "",
           "",
           0)
            break;
    case 41:
      jump("",
           "",
           "",
           0)
            break;
    case 42:
      jump("",
           "",
           "",
           0)
            break;
    case 43:
      jump("",
           "",
           "",
           0)
            break;
    case 44:
      jump("",
           "",
           "",
           0)
            break;
    case 45:
      jump("",
           "",
           "",
           0)
            break;
    case 46:
      jump("",
           "",
           "",
           0)
            break;
    case 47:
      jump("",
           "",
           "",
           0)
            break;
    case 48:
      jump("",
           "",
           "",
           0)
            break;
    case 49:
      jump("",
           "",
           "",
           0)
            break;
 
    
  }
  scrollD()
}


function scrollD() {
  var objDiv = document.getElementById("story");
  objDiv.scrollTop = objDiv.scrollHeight;
}
function jump(story,yes,no,state1,reset){
	if(reset != null){
	var storyOG = ""
  document.getElementById("story").innerHTML = storyOG + "<br><br>" + story;
  document.getElementById("yes").innerHTML = yes;
  document.getElementById("no").innerHTML = no;
  state = state1
	}
	else {
  var storyOG = document.getElementById("story").innerHTML
  document.getElementById("story").innerHTML = storyOG + "<br><br>" + story;
  document.getElementById("yes").innerHTML = yes;
  document.getElementById("no").innerHTML = no;
  state = state1
}
}

 