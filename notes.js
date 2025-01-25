console.log("Welcome to Notes App");

showNotes();

let addBtn = document.getElementById("addBtn");
let addTitle = document.getElementById("addTitle");
let addTxt = document.getElementById("addTxt");

addBtn.addEventListener("click", add);

// Show Notes
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];
    let html = "";

    notesObj.forEach(function (element, index) {
        html += `
            <li>
                <span>${index + 1}. ${element.title}</span>
                <button class="delete-btn" onclick="deleteNote(${index})">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" color="red" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
                </button>
            </li>`;
    });

    let notesElm = document.getElementById("notes-list");
    notesElm.innerHTML = notesObj.length
        ? html
        : "<h3>Nothing to show! Add a Note</h3>";
}
// Theme toggle functionality
document.getElementById('toggle-theme').addEventListener('click', function () {
    const body = document.body;
    const themeButton = document.getElementById('toggle-theme');

    // Toggle the "dark" class
    body.classList.toggle('dark');

    // Update button text/icon based on the theme
    if (body.classList.contains('dark')) {
        themeButton.textContent = '☀️'; // Light mode icon
    } else {
        themeButton.textContent = '🌙'; // Dark mode icon
    }
});




// Add a Note
function add() {
    if (!addTitle.value.trim()) {
        alert("Please add a title to your note!");
        return;
    }

    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];

    notesObj.push({ title: addTitle.value, text: addTxt.value });

    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTitle.value = "";
    addTxt.value = "";
    showNotes();
}

// Delete Note
function deleteNote(index) {
    let notes = localStorage.getItem("notes");
    let notesObj = notes ? JSON.parse(notes) : [];
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Download Note as PDF
function pdf() {
    let pdf = new jsPDF();
    pdf.text(20, 20, `Title: ${addTitle.value}`);
    pdf.text(20, 40, `Content: ${addTxt.value}`);
    pdf.save("note.pdf");
}
