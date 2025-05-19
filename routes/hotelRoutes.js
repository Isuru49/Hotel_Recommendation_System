// routes/hotelRoutes.js
const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel'); // ✅ Import your Hotel model (adjust path as needed)

// ✅ Route to get hotels by selected type
router.get('/search', async (req, res) => {
    const { type, district, view, rooms, price } = req.query;
  
    const query = {};
    if (type) query.Type = type;
    if (district) query.District = district;
    if (view) query.View = view;
    if (rooms) query.Rooms = { $gte: Number(rooms) };
    if (price) query.Price = price;
  
    console.log('Incoming query:', query); // 🔍 Debug this
  
    try {
      const hotels = await Hotel.find(query);
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ msg: 'Error searching hotels', error });
    }
  });  
  

// ✅ Route to get hotel types
router.get('/types', async (req, res) => {
  try {
    const types = await Hotel.distinct('Type'); // Fetch distinct hotel types
    res.json(types); // ✅ Return the data to the client
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching hotel types', error: err.message });
  }
});


// ✅ Get distinct hotel districts
router.get('/districts', async (req, res) => {
    try {
      const districts = await Hotel.distinct('District');
      res.json(districts);
    } catch (err) {
      res.status(500).json({ msg: 'Error fetching districts', error: err.message });
    }
  });

  // ✅ Get distinct hotel views
router.get('/views', async (req, res) => {
    try {
      const views = await Hotel.distinct('View');
      res.json(views);
    } catch (err) {
      res.status(500).json({ msg: 'Error fetching views', error: err.message });
    }
  });
  

module.exports = router;
