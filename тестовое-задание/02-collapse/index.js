(function() {
    var div = document.getElementsByClassName('collapsible__content');
    style = div[0].style;
    style.display = "none";
})();

var coll = document.getElementsByClassName("collapsible__button");

var i;

for (i = 0; i < coll.length; i++) { 
    coll[i].addEventListener("click", function() 
        { 
            this.classList.toggle("active"); 
            var div = this.nextElementSibling; 
            if (div.style.display == "none") {
                div.style.display = "inline"; 
            } else { 
                div.style.display = 
                "none"; 
             }
        }); 
}

(function() {
    var buttonOne = document.getElementsByClassName('collapsible__action--visible');
    style = buttonOne[0].style;
    style.display = "none";
    var buttonTwo = document.getElementsByClassName('collapsible__action--hidden');
    style = buttonTwo[0].style;
    style.display = "inline";
})();

function text() {
    if (div.style.display === "none") {
    buttonOne.style.display = "inline";
    buttonTwo.style.display = "none";
      div.style.display = "none";
}
else {
    div.style.display = "inline";
    buttonOne.style.display = "none";
    buttonTwo.style.display = "inline";
}
};