window.addEventListener('load', function() {
  const lookupBtn = document.getElementById('lookup');
  const lookupCitiesBtn = document.getElementById('lookup-cities');
  const resultDiv = document.getElementById('result');

  lookupBtn.addEventListener('click', function() {
    const countryInput = document.getElementById('country').value;
    const url = `world.php?country=${encodeURIComponent(countryInput)}`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });

  lookupCitiesBtn.addEventListener('click', function() {
    const countryInput = document.getElementById('country').value;
    const url = `world.php?country=${encodeURIComponent(countryInput)}&lookup=cities`;

    fetch(url)
      .then(response => response.text())
      .then(data => {
        resultDiv.innerHTML = data;
      })
      .catch(error => {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
      });
  });
});