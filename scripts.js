
function updateCapacity() {
  const value = document.getElementById('capacity').value;
  document.getElementById('capacityValue').innerText = `${value} Ton`;
}

let selectedStars = 0;
window.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('#starRating span');
  stars.forEach(star => {
    star.addEventListener('click', function() {
      selectedStars = this.getAttribute('data-value');
      stars.forEach(s => s.classList.remove('selected'));
      for (let i = 0; i < selectedStars; i++) {
        stars[i].classList.add('selected');
      }
    });
  });
});

let selectedType = '';
function selectType(type) {
  selectedType = type;
  document.getElementById('windowAC').classList.remove('active');
  document.getElementById('splitAC').classList.remove('active');

  if (type === 'Window') {
    document.getElementById('windowAC').classList.add('active');
  } else {
    document.getElementById('splitAC').classList.add('active');
  }
}

function calculateBill() {
  const brand = document.getElementById('brand').value;
  const capacity = parseFloat(document.getElementById('capacity').value);
  const stars = selectedStars;
  const type = selectedType;

  if (!brand || !capacity || !stars || !type) {
    alert('Please fill all fields!');
    return;
  }

  // Example calculation (replace with your own logic):
  const unitRate = 8; // ₹ per kWh
  const watts = capacity * 1000 * (1 - (stars * 0.05)); // Less wattage for higher star rating
  const hoursPerDay = 8;
  const days = 30;

  const totalKWh = (watts * hoursPerDay * days) / 1000;
  const cost = totalKWh * unitRate;

  document.getElementById('result').innerHTML = `
    <p>Total Units: ${totalKWh.toFixed(2)} kWh</p>
    <p>Estimated Cost: ₹${cost.toFixed(2)}</p>
  `;
}