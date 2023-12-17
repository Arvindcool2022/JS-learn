document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
    sendFormData(formData);
  });

  function sendFormData(formData) {
    const apiUrl = 'https://example.com/api/submit'; // Replace with your actual API endpoint

    fetch(apiUrl, {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); // Assuming the server sends back JSON
      })
      .then(data => {
        console.log('Response:', data);
        // Optionally handle the response data
      })
      .catch(error => {
        console.error('Fetch error:', error);
        // Optionally handle errors during the fetch request
      });
  }
});
