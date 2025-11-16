window.addEventListener('load', function() {
  const lookupBtn = document.getElementById('lookup');
  const resultDiv = document.getElementById('result');

  lookupBtn.addEventListener('click', function() {
    const countryInput = document.getElementById('country').value;
    const url = `world.php?country=${encodeURIComponent(countryInput)}`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });
});