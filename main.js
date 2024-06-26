const formEntries = []; // array to hold all form entries

const updateEntryCount = () => {
    const entryCountElement = document.getElementById('count');
    const count = formEntries.length;
    if (entryCountElement) {
        entryCountElement.textContent = `Number of entries: ${formEntries.length}`;
    } else {
        console.error('Element with id "count" not found.');
    }
    if (count < 5) {
        entryCountElement.style.color = "green";
    } else {
        entryCountElement.style.color = "red";
    }
};
const showEntries = () => {
    const entriesSection = document.getElementById('entries-section');
    entriesSection.innerHTML = ''; // clear previous entries
    formEntries.forEach((entry, index) => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');
        entryDiv.innerHTML = `
        <h3 class="custom-font">Entry ${index + 1}</h3>
        <p>Name: ${entry.name}</p>
        <p>Email: ${entry.email}</p>
        <p>Message: ${entry.message}<p>
        `;
        entriesSection.appendChild(entryDiv);
    })
}
const submitHandler = (event) => {
    event.preventDefault();

    const form = document.querySelector("#user-form");
    const formData = new FormData(form);
    const formObject = {};

    formData.forEach((value, key) => {
        formObject[key] = value;
    });

    formEntries.push(formObject);
    updateEntryCount();
    showEntries();
    console.log(formEntries); // for debugging purposes
    
};


const main = () => {
    const form = document.querySelector("#user-form");
    form.addEventListener("submit", submitHandler);
}

document.addEventListener("DOMContentLoaded", main);