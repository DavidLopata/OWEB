// Function to toggle main sections (new or used cars)
function toggleSection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('new-cars').style.display = sectionId === 'new-cars' ? 'block' : 'none';
    document.getElementById('used-cars').style.display = sectionId === 'used-cars' ? 'block' : 'none';
}

// Function to create and display the popup for brand models
function showBrandModelsPopup(brand, models) {
    // Remove any existing popup to avoid duplicates
    let existingPopup = document.getElementById('brand-popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create popup container
    const popup = document.createElement('div');
    popup.id = 'brand-popup';
    popup.className = 'modal';

    // Create popup content area
    const popupContent = document.createElement('div');
    popupContent.className = 'modal-content';

    // Add close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close';
    closeButton.innerHTML = '&times;';
    closeButton.onclick = () => popup.remove();

    // Add title and model list
    const title = document.createElement('h1');
    title.textContent = `${brand} Models`;

    const modelList = document.createElement('ul');
    models.forEach(model => {
        const listItem = document.createElement('li');
        listItem.textContent = model;
        modelList.appendChild(listItem);
    });

    // Append elements to popup content and then to popup container
    popupContent.appendChild(closeButton);
    popupContent.appendChild(title);
    popupContent.appendChild(modelList);
    popup.appendChild(popupContent);

    // Append popup to body
    document.body.appendChild(popup);

    // Display the popup
    popup.style.display = 'block';

    // Close popup when clicking outside of the content
    popup.onclick = (e) => {
        if (e.target === popup) {
            popup.remove();
        }
    };
}

// Add click event listeners to model boxes for new and used car sections
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.model-box').forEach(modelBox => {
        modelBox.addEventListener('click', () => {
            const brand = modelBox.querySelector('img').alt;
            const sectionId = document.getElementById('new-cars').style.display === 'block' ? 'new' : 'used';
       
        });
    });
});



// Open and close survey popup
function openSurvey() {
    document.getElementById('survey-popup').style.display = 'block';
}
function closeSurvey() {
    document.getElementById('survey-popup').style.display = 'none';
}

// Handle survey form submission
document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert(`Thank you for your feedback!`);
    closeSurvey();
});
