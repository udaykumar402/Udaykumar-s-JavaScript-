// Get references to the input box and list container in the HTML
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Function to add a new task
function addTask() {
  // Check if the input box is empty
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    // Create a new list item and set its inner HTML to the input value
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    // Append the new list item to the list container
    listContainer.appendChild(li);

    // Create a close button (span) for the list item
    let span = document.createElement("span");
    span.innerHTML = "\u00d7"; // Unicode for '×' (close symbol)

    // Append the close button to the list item
    li.appendChild(span);
  }

  // Clear the input box after adding a task
  inputBox.value = "";

  // Save the updated task list to local storage
  saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener(
  "click",
  function (e) {
    // Check if the clicked element is a list item (LI)
    if (e.target.tagName === "LI") {
      // Toggle the 'checked' class for the clicked list item
      e.target.classList.toggle("checked");

      // Save the updated task list to local storage
      saveData();
    } else if (e.target.tagName === "SPAN") {
      // If the clicked element is a close button (SPAN), remove its parent list item
      e.target.parentElement.remove();

      // Save the updated task list to local storage
      saveData();
    }
  },
  false
);

// Function to save the current task list to local storage
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display tasks from local storage
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks when the page is loaded or refreshed
showTask();
