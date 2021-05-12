//hide the nav bar when scrolling down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-5em";
  }
  prevScrollpos = currentScrollPos;
}


//close the dropdown if the user clicks outside it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-contentBtn");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show') && !event.target.matches('#background') && !event.target.matches('#text')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

//fuctions to change the background and text colour
function backgroundColour() {
  var backgroundColour = document.getElementById("background").value;
  document.body.style.backgroundColor = backgroundColour;
}

function textColour() {
  var backgroundColour = document.getElementById("text").value;
  document.body.style.color = backgroundColour;
}

function showContent() {
  document.getElementById("dropContent1").classList.toggle("show");
}

function showContent2() {
  document.getElementById("dropContent2").classList.toggle("show");
}


//mouseover functions for game image thumbnails
function img1() {
  var image = document.getElementById("bigImg").src = "Images/mario3.png"

  var title = "1990: Super Mario Bros. 3";
  document.getElementById("gameTitle").innerHTML = title;

  var description = "When the first Super Mario Brothers game was released in 1988 with the lauch of the NES it became an instant hit in the western market, almost two years later Nintendo found themselves with the best selling game of the year with Super Mario Bros. 3 a 2D - platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). Led by Shigeru Miyamoto, Mario found it's way into the American household thtough this simple yet sophisticated game at the time. Players control brothers Mario or Luigi, who must save Princess Toadstool and the rulers of seven different kingdoms from the antagonist Bowser. Super Mario 3 gave Nintendo an edge over Sega at the time of the NES and helped them become known worldwide for their iconic characters. Even with hardware relatively weak compares to the likes of SEGA and ATARI Miyamoto and his team managed to create a sensational and creative platforming game that is regarded as the gold standard of all 2D plaformers to this day. Mario is still used today as a console seller for Nintendo. Shigeru Miyamoto is remains to be the designer and the man behind Mario to this day.";
  document.getElementById("content").innerHTML = description;

  document.getElementById("bigImg").style.display = "inherit"
  document.getElementById("gameTitle").style.display = "inherit"
  document.getElementById("content").style.display = "inherit"

  //hide the console section
  document.getElementById("bigImg2").style.display = "none"
  document.getElementById("consoleTitle").style.display = "none"
  document.getElementById("content2").style.display = "none"
}

function img2() {
  var image = document.getElementById("bigImg").src = "Images/91sonic.jpg"

  var title = "1991: Sonic the Hedgehog"
  document.getElementById("gameTitle").innerHTML = title;

  var description = "In the era of Nintendo and it's NES and Mario Sega entered the video game market they didn't have iconic characters such as Mario or Zelda. Sega tasked Naoto Ohshima to create an icon to sell it's new Genesis Console. Sonic the Hedgehog is a platform game published by Sega for the Sega Genesis home video game console. It was released in North America in June 1991. The game features Sonic the Hedgehog, who runs supersonic speeds, sets on a quest to defeat Dr. Robotnik, a scientist who has imprisoned animals in robots and stolen the powerful Chaos Emeralds. The gameplay involves collecting rings as a form of health, and a simple control scheme, with jumping and attacking controlled by a single button. Sonic the Hedgehog, designed for fast gameplay, was influenced by games by Super Mario series creator Shigeru Miyamoto. Sonic the Hedgehog uses a novel technique that allows Sonic's sprite to roll along curved scenery. This fast paces 2d platformer was able to differentiate itself from Mario and gave Sega a change to enter the video game market with a strong start.";

  document.getElementById("content").innerHTML = description;

  document.getElementById("bigImg").style.display = "inherit"
  document.getElementById("gameTitle").style.display = "inherit"
  document.getElementById("content").style.display = "inherit"

  //hide the console section
  document.getElementById("bigImg2").style.display = "none"
  document.getElementById("consoleTitle").style.display = "none"
  document.getElementById("content2").style.display = "none"
}

function img3() {
  var image = document.getElementById("bigImg").src = "Images/92sonic.jpg"

  var title = "1992: Sonic the Hedgehog 2"
  document.getElementById("gameTitle").innerHTML = title;

  var description = "Sonic the Hedgehog 2 was a sequel to the 91 Sonic, developed and published by Sega for the Sega Genesis and Mega Drive console. It is the second main entry in the Sonic the Hedgehog series and introduced Sonic's sidekick, Miles Tails Prower. With the Genesis and Mega drive being 16-bit systems rather than Nintendo's 8-bit systems the Developers were able to make major improvements to visual quality and performance of this fast paced game which attracted a huge younger audience to SEGA's consoles. Another factor that contributed was to the success of SEGA and it's games was the fact that SEGA primarily focused on the western market, releasing games and consoles well before the japaneese market gave them an egde over Nintendo at the time. In the story, Sonic and Tails must stop series antagonist Dr. Ivo Robotnik from stealing the Chaos Emeralds to power his space station, the Death Egg. Sonic the Hedgehog 2 was able to live upto it's predecessor's name and claim SEGA's title of best selling game for two years in a row, this would mark the symbolic rivalry of Nintendo and SEGA.";

  document.getElementById("content").innerHTML = description;

  document.getElementById("bigImg").style.display = "inherit"
  document.getElementById("gameTitle").style.display = "inherit"
  document.getElementById("content").style.display = "inherit"

  //hide the console section
  document.getElementById("bigImg2").style.display = "none"
  document.getElementById("consoleTitle").style.display = "none"
  document.getElementById("content2").style.display = "none"

}

function img4() {
  var image = document.getElementById("bigImg").src = "Images/92stft.jpg"

  var title = "1993: Street fighter II"
  document.getElementById("gameTitle").innerHTML = title;

  var description = "Before Mortal Kombat took over the fighting genre there was Street Fighter. First released as an arcade game like most franchises at the time Street Fighter became and instant hit among the young the second release of it's frachise Street Fighter II: The World Warrior is a competitive fighting game developed by Capcom. Street Fighter II improved many of the concepts introduced in the first game, including the use of special command-based moves and a six-button configuration and introducing the combo system. Street Fighter II became the best-selling title since the golden age of arcade gaming. By 1994, the game had been played by over 25 million people in the United States alone at home and in arcades. All versions of Street Fighter II have sold more than 200,000 arcade cabinets and over 15 million software units worldwide and they are estimated to have grossed over $10 billion in total revenue, making it one of the top three highest-grossing video games of all time as of 2017 and the best-selling fighting game up until 2019.";

  document.getElementById("content").innerHTML = description;

  document.getElementById("bigImg").style.display = "inherit"
  document.getElementById("gameTitle").style.display = "inherit"
  document.getElementById("content").style.display = "inherit"

  //hide the console section
  document.getElementById("bigImg2").style.display = "none"
  document.getElementById("consoleTitle").style.display = "none"
  document.getElementById("content2").style.display = "none"

}

function img5() {

  var image = document.getElementById("bigImg").src = "Images/donkeyKong.jpg";

  var title = "1994: Donkey Kong Country";
  document.getElementById("gameTitle").innerHTML = title;

  var description = "Created by the maker of Mario Donkey was a household staple in the golden era of arcade gaming. Donkey Kong first made his appearance in the 1981 arcade machine called Donkey Kong, in which he faced Mario. Donkey Kong Country is a 1994 platform game published by Nintendo for the Super Nintendo Entertainment System (SNES). It is a reboot of Nintendo's Donkey Kong franchise and follows the gorilla Donkey Kong and his nephew Diddy Kong as they set out to recover their stolen banana hoard from King K. Rool. Donkey Kong Country was inspired by the Super Mario series and was one of the first home console games to feature pre-rendered graphics. Even though the character was created by Miyamoto himself Donkey Kong country was neither produced nor directed by Shigeru Miyamoto. Donkey Kong Country was later remastered for the Nintendo Switch in recent years.";

  document.getElementById("content").innerHTML = description;

  document.getElementById("bigImg").style.display = "inherit"
  document.getElementById("gameTitle").style.display = "inherit"
  document.getElementById("content").style.display = "inherit"

  //hide the console section
  document.getElementById("bigImg2").style.display = "none"
  document.getElementById("consoleTitle").style.display = "none"
  document.getElementById("content2").style.display = "none"


}

// mouseover functions for the console images
function consoleimg1() {
  var image = document.getElementById("bigImg2").src = "Images/nes.png";

  var title = "1983: Nintendo Entertainment System";
  document.getElementById("consoleTitle").innerHTML = title;

  var description = "The Nintendo Entertainment System (NES) is an 8-bit third-generation home video game console produced by Nintendo. Nintendo first released it in Japan as the Family Computer, commonly known as the Famicom, in 1983. The NES, a remodelled version, was released internationally. The NES is can be regarded as the first mainstream video game console with titles like Mario and Zelda the NES was wuick to become of the best selling consoles of all time. As one of the bestselling consoles of its time, the NES helped revitalize the US video game industry following the video game crash of 1983.";
  document.getElementById("content2").innerHTML = description;

  document.getElementById("bigImg2").style.display = "inherit"
  document.getElementById("consoleTitle").style.display = "inherit"
  document.getElementById("content2").style.display = "inherit"

  //hide the classic games section
  document.getElementById("bigImg").style.display = "none"
  document.getElementById("gameTitle").style.display = "none"
  document.getElementById("content").style.display = "none"

}

function consoleimg2() {
  var image = document.getElementById("bigImg2").src = "Images/genesis.png";

  var title = "1988: Sega Genesis";
  document.getElementById("consoleTitle").innerHTML = title;

  var description = "In the years where every home had a Nintendo Console SEGA found it hard break the loyal fanbase of Nintendo. The Sega Genesis, known as the Mega Drive outside North America, is a 16-bit fourth-generation home video game console developed and sold by Sega.The Genesis was Sega's third console. It was the genesis that brought SEGA success, selling over 30 million units sega was able to break into competitive market diluted by ATARI and Nintendo. SEGA was able to to together a console that was fast and utilise the 16-bit architecture even before Nintendo. Contributing to its success were its library of arcade game ports, the popularity of Sega's Sonic the Hedgehog series, several popular sports franchises, and aggressive youth marketing that positioned it as the cool console for adolescents.";
  document.getElementById("content2").innerHTML = description;

  document.getElementById("bigImg2").style.display = "inherit"
  document.getElementById("consoleTitle").style.display = "inherit"
  document.getElementById("content2").style.display = "inherit"

  //hide the classic games section
  document.getElementById("bigImg").style.display = "none"
  document.getElementById("gameTitle").style.display = "none"
  document.getElementById("content").style.display = "none"

}

function consoleimg3() {
  var image = document.getElementById("bigImg2").src = "Images/snes.png";

  var title = "1990: Super Nintendo Entertainment System";
  document.getElementById("consoleTitle").innerHTML = title;

  var description = "The Super Nintendo Entertainment System (SNES), also known as the Super NES or Super Nintendo, is a 16-bit home video game console developed by Nintendo that was released in 1990. The SNES was the successor to the NES. The SNES received largely positive reviews and was a global success, becoming the best-selling console of the 16-bit era after launching relatively late and facing intense competition from Sega's Genesis console in North America and Europe. Overlapping the NES's 61.9 million unit sales, the SNES remained popular well into the 32-bit era, with 49.1 million units sold worldwide by the time it was discontinued in 2003";

  document.getElementById("content2").innerHTML = description;

  document.getElementById("bigImg2").style.display = "inherit"
  document.getElementById("consoleTitle").style.display = "inherit"
  document.getElementById("content2").style.display = "inherit"

  //hide the classic games section
  document.getElementById("bigImg").style.display = "none"
  document.getElementById("gameTitle").style.display = "none"
  document.getElementById("content").style.display = "none"

}

function consoleimg4() {
  var image = document.getElementById("bigImg2").src = "Images/ps1.png";

  var title = "1994: Sony PlayStation";
  document.getElementById("consoleTitle").innerHTML = title;

  var description = "The first Sony PlayStation would come to be the stepping stone of the company. Eventually becoming the first console to ship over 100 million units, doing so in under a decade.The PlayStation's use of compact discs (CDs) heralded the game industry's transition from cartridges. Games for the PlayStation continued to sell until Sony ceased production of both the PlayStation and its games on 23 March 2006 – over eleven years after it had been released. Releasing with impressive titles like NBA and Rayman and Street Fighter Sony put up fierce competition with it's rivals. Being the first to use CD's instead of cartridges brought drastic improvements to visual fidelity and performance. The launch of the PlaySation was so spectacular that it eventually was one of the reasons why SEGA had to quit the console market altogether. ";
  document.getElementById("content2").innerHTML = description;

  document.getElementById("bigImg2").style.display = "inherit"
  document.getElementById("consoleTitle").style.display = "inherit"
  document.getElementById("content2").style.display = "inherit"

  //hide the classic games section
  document.getElementById("bigImg").style.display = "none"
  document.getElementById("gameTitle").style.display = "none"
  document.getElementById("content").style.display = "none"

}

function consoleimg5() {
  var image = document.getElementById("bigImg2").src = "Images/n64.png";

  var title = "1996: Nintendo 64";
  document.getElementById("consoleTitle").innerHTML = title;

  var description = "The Nintendo 64 brought 3D graphics for a Nintendo console for the first time. Developed on a 64-bit architecture the N64 as it's commonly known brought some unique features to a console at the time. With it's unique and useful controller design to the new 3D inspired Mario and Zelda games the Nintedo 64 was one of the most impressive consoles released. During it's lifespan N64 had to compete with the likes of PlayStation and SEGA Saturn the latter of which was quickly falling behind due to the impressive launch title that Nintendo had manages to put together. 3 major titles defined the N64's success Super Mario 3D, PilotWings 64 and SuperSmash Bros. Time named it Machine of the Year in 1996, and in 2015, IGN named it the ninth-greatest video game console of all time.";
  document.getElementById("content2").innerHTML = description;

  document.getElementById("bigImg2").style.display = "inherit"
  document.getElementById("consoleTitle").style.display = "inherit"
  document.getElementById("content2").style.display = "inherit"

  //hide the classic games section
  document.getElementById("bigImg").style.display = "none"
  document.getElementById("gameTitle").style.display = "none"
  document.getElementById("content").style.display = "none"
}