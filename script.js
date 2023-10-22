// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Get the list items
var list = document.querySelector("#myUL");
var items = list.querySelectorAll(".main__item");

// Add a click event listener to each item
items.forEach(function (item) {
  item.addEventListener("click", function () {
    // Toggle the "checked" class on the clicked item
    this.classList.toggle("main__item--checked");
  });
});

// Add a new item to the list
function newElement() {
  var inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("You must enter a task!");
  } else {
    //append the new item
    var li = document.createElement("li");
    li.className = "main__item";
    li.appendChild(document.createTextNode(inputValue));
    list.appendChild(li);

    //append the close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    //This is to close the item
    span.addEventListener("click", function () {
      var div = this.parentElement;
      div.style.display = "none";
    });
    li.appendChild(span);
    document.querySelector("#myInput").value = "";

    // Add a click event listener to the new item
    li.addEventListener("click", function () {
      // Toggle the "checked" class on the clicked item
      this.classList.toggle("main__item--checked");
    });
  }
}
