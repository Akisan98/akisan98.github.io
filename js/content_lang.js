var intro = ["<em><strong>Hi, I'm <strong><em>" ];
var navn = ["AKISAN"];

/*if (userLang == 'no' || userLang == 'nb-NO')
{

    document.getElementById("navBrandEn").style.display = "none";
    document.getElementById("menuEn").style.display = "none";
    document.getElementById("buttonEn").style.display = "none";
    document.getElementById("rowEn").style.display = "none";
    document.getElementById("titleEn").style.display = "none";
    
} 
else 
{
    document.getElementById("menuNo").style.display = "none";
    document.getElementById("buttonNo").style.display = "none";
    document.getElementById("rowNo").style.display = "none";
    document.getElementById("titleNo").style.display = "none";

    //document.getElementById("navBrandEn").style.display = "";
    document.getElementById("menuEn").style.display = "";
    document.getElementById("buttonEn").style.display = "";
    document.getElementById("rowEn").style.display = "";
    document.getElementById("titleEn").style.display = "";

    document.documentElement.setAttribute('lang','en');
    //alert(document.documentElement.getAttribute('lang')); 
}*/

var typed = new Typed('#topTextIntro2', {
    //stringsElement: hva,
    loop: false,
    //loopCount: 3,
    typeSpeed: 50,
    showCursor: true,
    cursorChar: '_',
    strings: intro,
    /*strings: [
      'These are the default values...',
      'You know what you should do?',
      'Use your own!',
      'Have a great day!'
    ],*/
    stringsElement: null,
    //shuffle: true,
   /* onComplete: (self) => {
        teller++;
        if (teller == 3)
        {
          document.getElementById("typed").textContent = 'H'
        }
      
    },*/
  });

  var typed = new Typed('#name', {
    loop: false,
    typeSpeed: 50,
    showCursor: false,
    strings: navn,
    startDelay: 1000,
    stringsElement: null,
  });