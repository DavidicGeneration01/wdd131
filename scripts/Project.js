// Sample event data
const events = [
    { date: '2023-10-15', name: 'Fall Foliage Ride', level: 'Intermediate' },
    { date: '2023-10-22', name: 'Family Fun Ride', level: 'Beginner' },
    { date: '2023-10-29', name: 'Night Ride', level: 'Advanced' }
];

// Load events into the event list
document.getElementById('loadEvents').addEventListener('click', loadEvents);

// Function to load events
function loadEvents() {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = ''; // Clear previous events

    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `<strong>${event.name}</strong> - ${event.date} (${event.level})`;
        eventList.appendChild(eventItem);
    });
}

// Event listener for the membership form
document.getElementById('membershipForm').addEventListener('submit', handleMembership);

// Function to handle membership form submission
function handleMembership(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const level = document.getElementById('level').value;

    // Create a member object
    const member = {
        name,
        email,
        level
    };

    // Save member to localStorage
    saveMemberToLocalStorage(member);

    // Display success message
    const formMessage = document.getElementById('formMessage');
    formMessage.innerHTML = `Thank you, ${name}! You have successfully signed up as a ${level} member.`;
}

// Function to save member to localStorage
function saveMemberToLocalStorage(member) {
    let members = JSON.parse(localStorage.getItem('members')) || [];
    members.push(member);
    localStorage.setItem('members', JSON.stringify(members));
}

// Function to display stored members (optional)
function displayStoredMembers() {
    const members = JSON.parse(localStorage.getItem('members')) || [];
    console.log('Stored Members:', members);
}

// Call the function to display stored members (for debugging)
displayStoredMembers();