// Load items from local storage if available
var savedItems = JSON.parse(localStorage.getItem("items")) || [];

// Get the list
var list = document.querySelector("#myUL");

// Add existing items from local storage to the list
savedItems.forEach(function (itemText) {
  var li = document.createElement("li");
  li.className = "main__item";
  li.appendChild(document.createTextNode(itemText));
  list.appendChild(li);

  // Append the close button
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  // This is to close the item
  span.addEventListener("click", function () {
    var div = this.parentElement;
    div.style.display = "none";
    // Remove the item from local storage
    savedItems.splice(savedItems.indexOf(div.textContent), 1);
    localStorage.setItem("items", JSON.stringify(savedItems));
  });
  li.appendChild(span);

  // Add a click event listener to the new item
  li.addEventListener("click", function () {
    // Toggle the "checked" class on the clicked item
    this.classList.toggle("main__item--checked");
  });
});

// Add a new item to the list and store it in local storage
function newElement() {
  var inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("You must enter a task!");
  } else {
    // Append the new item
    var li = document.createElement("li");
    li.className = "main__item";
    li.appendChild(document.createTextNode(inputValue));
    list.appendChild(li);

    // Append the close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    // This is to close the item
    span.addEventListener("click", function () {
      var div = this.parentElement;
      div.style.display = "none";
      // Remove the item from local storage
      savedItems.splice(savedItems.indexOf(div.textContent), 1);
      localStorage.setItem("items", JSON.stringify(savedItems));
    });
    li.appendChild(span);

    // Add the new item to the local storage
    savedItems.push(inputValue);
    localStorage.setItem("items", JSON.stringify(savedItems));

    document.querySelector("#myInput").value = "";

    // Add a click event listener to the new item
    li.addEventListener("click", function () {
      // Toggle the "checked" class on the clicked item
      this.classList.toggle("main__item--checked");
    });
  }
}
