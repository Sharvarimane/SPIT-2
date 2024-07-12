document.addEventListener('DOMContentLoaded', () => {
    const itineraryForm = document.getElementById('itinerary-form');
    const itineraryItems = document.getElementById('itinerary-items');

    itineraryForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const destination = document.getElementById('destination').value;
        const date = document.getElementById('date').value;
        const activity = document.getElementById('activity').value;

        addItineraryItem(destination, date, activity);
        
        itineraryForm.reset();
    });

    function addItineraryItem(destination, date, activity) {
        const listItem = document.createElement('li');

        listItem.innerHTML = `
            <strong>Destination:</strong> ${destination} <br>
            <strong>Date:</strong> ${date} <br>
            <strong>Activity:</strong> ${activity} 
            <button class="remove">Remove</button>
        `;

        itineraryItems.appendChild(listItem);

        const removeButton = listItem.querySelector('.remove');
        removeButton.addEventListener('click', () => {
            itineraryItems.removeChild(listItem);
        });
    }
});

