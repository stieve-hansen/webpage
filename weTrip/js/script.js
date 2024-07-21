// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementsByTagName("header").style.fontSize = "30px";
  } else {
    document.getElementByTagName("header").style.fontSize = "90px";
  }
}