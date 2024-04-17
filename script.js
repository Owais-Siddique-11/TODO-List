let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

// Function to add a task
function addTask() {
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "remove";
    delBtn.classList.add("remove");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";

    // Attach event listener to the newly created remove button
    delBtn.addEventListener("click", function() {
        item.remove();
    });
}

// Event listener for clicking the "Add" button
btn.addEventListener("click", addTask);

// Event listener for pressing the "Enter" key in the input field
inp.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Select all remove buttons and attach event listeners to each
let delBtns = document.querySelectorAll(".remove");
delBtns.forEach(function(delBtn) {
    delBtn.addEventListener("click", function() {
        delBtn.parentElement.remove();
    });
});
