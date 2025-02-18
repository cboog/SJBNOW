document.getElementById('eventForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Retrieve event data from the form
    const eventName = document.getElementById('eventName').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventHour = document.getElementById('eventHour').value;
    const eventMinute = document.getElementById('eventMinute').value;
    const eventAMPM = document.getElementById('eventAMPM').value;

    const eventTime = `${eventHour}:${eventMinute} ${eventAMPM}`;
    const eventImage = `images/${eventLocation}.jpg`;  // Placeholder for event images
    
    // Get the marker location (adjust the coordinates as necessary)
    const locationCoordinates = getLocationCoordinates(eventLocation);

    // Create a new marker element
    const marker = document.createElement('div');
    marker.classList.add('marker');
    marker.style.top = `${locationCoordinates.top}px`;
    marker.style.left = `${locationCoordinates.left}px`;

    // Create an image for the marker
    const markerImage = document.createElement('img');
    markerImage.src = eventImage;
    marker.appendChild(markerImage);

    // Add event name as a title when hovering
    marker.title = `${eventName} - ${eventTime}`;

    // Append the marker to the map
    document.getElementById('eventMarkers').appendChild(marker);

    // Clear form fields
    document.getElementById('eventForm').reset();
});

// Example function to get coordinates for locations (replace with your actual coordinates)
function getLocationCoordinates(location) {
    const coordinates = {
        'location1': { top: 100, left: 150 },
        'location2': { top: 200, left: 300 },
        // Add other locations here
    };

    return coordinates[location] || { top: 0, left: 0 };
}
