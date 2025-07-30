function getSuggestion() {
  const location = document.getElementById("location").value;
  const ph = parseFloat(document.getElementById("ph").value);

  // Simulated weather data (in real app, get from API)
  const temperature = 30; // in °C
  const rainfall = 120; // mm

  let crop = "Unknown";

  if (ph > 6.5 && rainfall > 100) {
    crop = "Rice";
  } else if (ph < 6 && temperature > 28) {
    crop = "Millet";
  } else if (temperature < 20) {
    crop = "Wheat";
  } else if (temperature >30){
    crop = "Maize";
   
  }else { temperature <30}
     crop= "potato";

  const output = `
    <strong>Location:</strong> ${location}<br>
    <strong>Soil pH:</strong> ${ph}<br>
    <strong>Temperature:</strong> ${temperature}°C<br>
    <strong>Rainfall:</strong> ${rainfall} mm<br><br>
     <strong>Suggested Crop:</strong> ${crop}
  `;

  document.getElementById("output").innerHTML = output;
}
