// Load items from local storage if available
var savedItems = JSON.parse(localStorage.getItem("items")) || [];
var savedItemsChecked = [];

// Get the list
var list = document.querySelector("#myUL");

// Function to update local storage
function updateLocalStorage() {
  localStorage.setItem("items", JSON.stringify(savedItems));
}

// Function to delete an item from the list and local storage
function deleteItem(index) {
  savedItems.splice(index, 1);
  updateLocalStorage();
  renderList();
}

// Function to render the list
function renderList() {
  list.innerHTML = "";
  savedItems.forEach(function (itemText, index) {
    var li = document.createElement("li");
    li.className = "main__item";
    li.appendChild(document.createTextNode(itemText));
    list.appendChild(li);

    // Check if the item was checked before and add the class back
    if (savedItemsChecked.includes(itemText)) {
      li.classList.add("main__item--checked");
    }

    // Append the close button
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);

    // Event listener for deleting the item
    span.addEventListener("click", function () {
      deleteItem(index);
    });
    li.appendChild(span);

    // Add a click event listener to the new item
    li.addEventListener("click", function () {
      // Toggle the "checked" class on the clicked item
      this.classList.toggle("main__item--checked");

      // Update the array of checked items
      if (this.classList.contains("main__item--checked")) {
        savedItemsChecked.push(itemText);
      } else {
        // Remove the item from the array if unchecked
        var checkedIndex = savedItemsChecked.indexOf(itemText);
        if (checkedIndex !== -1) {
          savedItemsChecked.splice(checkedIndex, 1);
        }
      }
    });
  });
}

// Render the initial list
renderList();

// Add a new item to the list and store it in local storage
function newElement() {
  var inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("You must enter a task!");
  } else {
    // Add the new item to the savedItems array
    savedItems.push(inputValue);
    updateLocalStorage();
    renderList();

    document.querySelector("#myInput").value = "";
  }
}

// This is for Dark Mode
var darkmode = document.getElementsByClassName("Toggle-img")[0];
darkmode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    darkmode.src = "assets/moon.svg";
    document.body.style.backgroundColor = "black";
    document.getElementById("lists").style.backgroundColor = "lightgrey";
  } else {
    darkmode.src = "assets/sun.png";
    document.body.style.backgroundColor = "white";
    document.getElementById("lists").style.backgroundColor = "white";
  }
  // Change the complete background-colors
})();
