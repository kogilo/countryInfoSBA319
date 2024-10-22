// Import
import express from 'express';
import Song from '../models/country.mjs';
const router = express.Router();

// Create
router.post('/api', async (req, res) => {
    try {
      const newCountry = new Country(req.body);
  
      await newCountry.save();
  
      res.json(newCountry);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Server Error' });
    }
  });


  export default router;