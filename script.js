// Function to add events to markers
function addEvent() {
    let eventName = document.getElementById("event-name").value;
    let eventLocation = document.getElementById("event-location").value;
    let eventTime = document.getElementById("event-time").value;

    if (!eventName) {
        alert("Please enter an event name.");
        return;
    }

    let marker = document.getElementById(eventLocation);
    if (marker) {
        let eventTag = document.createElement("div");
        eventTag.classList.add("event-tag");
        eventTag.innerHTML = `<strong>${eventName}</strong><br>${eventTime}`;
        eventTag.style.position = "absolute";
        eventTag.style.background = "white";
        eventTag.style.padding = "5px";
        eventTag.style.border = "1px solid navy";
        eventTag.style.borderRadius = "5px";
        eventTag.style.top = "-40px";
        eventTag.style.left = "10px";
        eventTag.style.fontSize = "12px";
        eventTag.style.whiteSpace = "nowrap";

        marker.appendChild(eventTag);
        
        // Remove event display after 5 seconds
        setTimeout(() => {
            eventTag.remove();
        }, 5000);
    }
}
