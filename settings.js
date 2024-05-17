function toggleSetting(element) {
    element.classList.toggle('on');
}

function toggleWiFi(element) {
    element.classList.toggle('on');
    const wifiNetworks = document.getElementById('wifiNetworks');
    if (element.classList.contains('on')) {
        wifiNetworks.style.display = 'block';
    } else {
        wifiNetworks.style.display = 'none';
    }
}

function savePassword() {
    const passwordInput = document.getElementById('passwordInput').value;
    if (/^\d+$/.test(passwordInput)) {
        alert('Password saved!');
    } else {
        alert('Only numbers / digits are allowed in the password!');
    }
}

function resetWatchX() {
    alert('WatchX has been reset!');
}
