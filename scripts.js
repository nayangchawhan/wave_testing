// Function to send an API GET request to turn on the light
function turnOnLight() {
    fetch('http://192.168.111.139:1880/light_on') // Replace with your actual API endpoint
        .then(response => {
            if (response.ok) {
                alert('Light turned on successfully!');
            } else {
                alert('Failed to turn on the light.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while turning on the light.');
        });
}

function turnOffLight() {
    fetch('http://192.168.111.139:1880/light_off') // Replace with your actual API endpoint
        .then(response => {
            if (response.ok) {
                alert('Light turned on successfully!');
            } else {
                alert('Failed to turn on the light.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while turning on the light.');
        });
}