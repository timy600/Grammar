var plusBtn = document.querySelector("footer>div:nth-of-type(3)>button:nth-of-type(1)");
var minusBtn = document.querySelector("footer>div:nth-of-type(3)>button:nth-of-type(2)");
var getNum = document.querySelector("footer>div:nth-of-type(3)>div");
var getBtns = document.querySelector("footer>div:nth-of-type(3)>div:nth-of-type(2)");
var getdiv = document.querySelector("footer div");
var clickCount = 0;
var newBtn = $('<button></button>');

plusBtn.onclick = function(){
  clickCount++;
  getNum.innerHTML = clickCount;
  $("#buttons").append(newBtn);
}

minusBtn.onclick = function(){
  if (clickCount > 0) {
    clickCount--;
    getNum.innerHTML = clickCount;
  }
}

var mydragg = function() {
  return {
    move: function(divid, xpos, ypos) {
      divid.style.left = xpos + 'px';
      divid.style.top = ypos + 'px';
    },

    startMoving: function(divid, container, evt) {
      evt = evt || window.event;
      var posX = evt.clientX,
        posY = evt.clientY,
        divTop = divid.style.top,
        divLeft = divid.style.left,
        eWi = parseInt(divid.style.width),
        eHe = parseInt(divid.style.height),
        cWi = parseInt(document.getElementById(container).style.width),
        cHe = parseInt(document.getElementById(container).style.height);

      document.getElementById(container).style.cursor = 'move';
      divTop = divTop.replace('px', '');
      divLeft = divLeft.replace('px', '');
      var diffX = posX - divLeft,
        diffY = posY - divTop;

      document.onmousemove = function(evt) {
        evt = evt || window.event;
        var posX = evt.clientX,
          posY = evt.clientY,
          aX = posX - diffX,
          aY = posY - diffY;

          var boxwidth = parseInt((getComputedStyle(document.getElementById("container")).getPropertyValue("width")));
          var boxheight = parseInt((getComputedStyle(document.getElementById("container")).getPropertyValue("height")));
          var squarewidth = parseInt((getComputedStyle(document.getElementById("elem")).getPropertyValue("width")));
          var squareheight = parseInt((getComputedStyle(document.getElementById("elem")).getPropertyValue("height")));

        if (aX > (boxwidth/2)-(squarewidth/2))
          aX = (boxwidth/2)-(squarewidth/2);
        if (aX < -(boxwidth/2)+(squarewidth/2))
          aX = -(boxwidth/2)+(squarewidth/2);

        if (aY > (boxheight/2)-(squareheight/2)+3)
          aY = (boxheight/2)-(squareheight/2)+3;
        if (aY < -(boxheight/2)+(squareheight/2)+2)
          aY = -(boxheight/2)+(squareheight/2)+2;

        if (aX + eWi > cWi)
          aX = cWi - eWi;
        if (aY + eHe > cHe)
          aY = cHe - eHe;

        mydragg.move(divid, aX, aY);

        document.getElementById("coordinates").innerHTML = "New coordinates => {x:" + (aX+boxwidth/2 - squarewidth/2) +", y:" + (aY+boxheight/2 - squareheight/2-2) +"}";
      }
    },

    stopMoving: function(container) {
      var a = document.createElement('script');
      document.getElementById(container).style.cursor = 'default';
      document.onmousemove = function() {}
    }
  }
}();
