document.getElementById("add-event-button").addEventListener("click", function() {
  const location = document.getElementById("event-location").value;
  const eventName = document.getElementById("event-name").value;
  const eventHour = document.getElementById("event-hour").value.padStart(2, '0');
  const eventMinute = document.getElementById("event-minute").value.padStart(2, '0');
  const eventPeriod = document.getElementById("event-period").value;

  if (eventName.trim() === "" || eventHour === "" || eventMinute === "") {
    alert("Please enter all event details.");
    return;
  }

  const eventTime = `${eventHour}:${eventMinute} ${eventPeriod}`;
  const marker = document.getElementById(location);
  if (!marker) {
    alert("Invalid location selected.");
    return;
  }

  const eventText = document.createElement("div");
  eventText.textContent = `${eventName} - ${eventTime}`;
  eventText.classList.add("event-text");

  marker.appendChild(eventText);
  marker.style.visibility = "visible";
});

// Tooltip functionality
const circles = document.querySelectorAll('.marker');
const tooltip = document.getElementById('tooltip');

circles.forEach(circle => {
  circle.addEventListener('mouseover', (e) => {
    const locationName = circle.getAttribute('data-location');
    tooltip.textContent = locationName;
    tooltip.style.display = 'block';
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  circle.addEventListener('mousemove', (e) => {
    tooltip.style.top = `${e.pageY + 10}px`;
    tooltip.style.left = `${e.pageX + 10}px`;
  });

  circle.addEventListener('mouseout', () => {
    tooltip.style.display = 'none';
  });
});
