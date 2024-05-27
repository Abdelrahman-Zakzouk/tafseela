function bodyLoad() 
{
  var typingEffect = new Typed(".author",
  {
    strings: ["تفصيلة","&#x62A;فصيلة","&#1578;فصيلة"],
    loop: true,
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 80,
  })

};

i = 0;
function navtoggle()
{
  if (i === 0)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.visibility="visible";
    nav.style.transform="translateX(200.5vw)";
    pg.style.filter="blur(3px)";
    body.style.height="97vh";
    body.style.overflowY="hidden";
    i++;
  }
  else if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    body.style.height="auto";
    body.style.overflowY="auto";
    i--;
    
  }
  
}
// close nav on page click
function unnavpageclk()
{
  if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    body.style.height="auto";
    body.style.overflowY="auto";
    i--;
  }
  
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}

const touch = isTouchDevice();

if (touch)
  {
    function anim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }

    function unanim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }
  else
  {
    function anim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1.7)";
      barbottom.style.transform="scaleX(1.99)";
    }

    function unanim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }


let button = document.querySelector("button");
let navburger = document.querySelector("nav");

function toggle(display) {
  button.style.display = display;
}

window.addEventListener('scroll',function(e) {
  let navHeight = navburger.offsetTop;
  let scrollHeight = window.scrollY;
  
  scrollHeight >= navHeight ? toggle("block") : toggle("none");
});

function back() {
  window.scrollTo(0,0);
}
