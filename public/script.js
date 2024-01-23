function fetchData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dataFromBackend').innerText = `Data from Backend: ${data.message}`;
        })
        .catch(error => console.error('Error fetching data:', error));
}
