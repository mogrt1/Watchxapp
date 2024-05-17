function connectWatch() {
    alert('Connecting Watch...');
}

function disconnect() {
    alert('Disconnecting...');
}

function reset() {
    alert('Resetting...');
}

function call() {
    alert('Calling...');
}

function projectPhone() {
    alert('Projecting Phone...');
}

function bringMe() {
    document.getElementById('bringMeOptions').style.display = 'block';
}

function closeOptions() {
    document.getElementById('bringMeOptions').style.display = 'none';
}

function selectOption(option) {
    alert(`Selected: ${option}`);
    closeOptions();
}

function toggleHinge() {
    alert('Toggling Hinge...');
}
