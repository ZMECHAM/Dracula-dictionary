// script.js
const toggleButton = document.querySelector('.navbar-toggle');
const navbarLinks = document.querySelector('.navbar-links');



toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
});
let currentOpenList = null; // Variable to keep track of the currently open list

// Toggle function to open and close lists
function toggleList(id) {
    const list = document.getElementById(id);

    // If there's already a list open, close it
    if (currentOpenList && currentOpenList !== list) {
        currentOpenList.style.display = 'none';  // Close the currently open list
    }

    // Toggle the display of the clicked list
    list.style.display = (list.style.display === 'block') ? 'none' : 'block';

    // Update the current open list
    currentOpenList = (list.style.display === 'block') ? list : null;
}

// Function to show the popup with the given text
function showPopup(text) {
    const popupText = document.getElementById('popup-text');
    popupText.textContent = text;

    const popup = document.getElementById('popup');
    popup.style.display = 'block';  // Display the popup
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';  // Hide the popup
}

// Event listener initialization
document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with class 'popup-trigger'
    const popupTriggers = document.querySelectorAll('.popup-trigger');

    // Add click event listener to each popup trigger
    popupTriggers.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent default link behavior

            // Get the text from the 'data-text' attribute of the clicked item
            const text = item.getAttribute('data-text');

            // Show the popup with the appropriate text
            showPopup(text);
        });
    });

    // Add event listener for closing the popup
    const closeButton = document.getElementById('close-popup');
    if (closeButton) {
        closeButton.addEventListener('click', closePopup);
    }
});
const toggleEpisodes = document.getElementById('toggle-columns-button');
const episodesContainer = document.getElementById('episodes-container');

toggleEpisodes.addEventListener('click', () => {
    episodesContainer.classList.toggle('hidden');
    //updates the button text
    if (episodesContainer.classList.contains('hidden')) {
        toggleEpisodes.textContent = 'Show Episodes';
    } else {
        toggleEpisodes.textContent = 'Hide Episodes'
    }
});
