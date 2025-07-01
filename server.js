// const express = require('express');
// const cors = require('cors');
// const app = express();
// const PORT = 3000;

// app.use(cors());
// app.use(express.json());

// const distances = {
//   'mumbai-kolkata': 2000,
//   'mumbai-pune': 150,
//   'mumbai-delhi': 1450,
//   'pune-nagpur': 750
// };

// const fuelEfficiency = 12; // km/litre
// const fuelPrice = 100;     // ₹ per litre

// app.post('/calculate', (req, res) => {
//   const { from, to } = req.body;
//   const key = `${from.toLowerCase()}-${to.toLowerCase()}`;

//   if (!distances[key]) {
//     return res.status(400).json({ error: 'Distance not found' });
//   }

//   const distance = distances[key];
//   const fuelNeeded = distance / fuelEfficiency;
//   const fuelCost = fuelNeeded * fuelPrice;

//   res.json({
//     distance,
//     fuelCost: fuelCost.toFixed(2),
//     fuelNeeded: fuelNeeded.toFixed(2)
//   });
// });

// app.listen(PORT, () => {
//   console.log(`✅ Server running at http://localhost:${PORT}`);
// });
