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


  // Read
router.get('/', async (req, res) => {
  try {
    const allCountries = await Country.find({});

    res.json(allCountries);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});


// Update
router.put('/:id', async (req, res) => {
  try {
    let updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updatedCountry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});
// Delete
router.delete('/:id', async (req, res) => {
  try {
    let deletedCountry = await Country.findByIdAndDelete(req.params.id);

    res.json(deletedCountry);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server Error' });
  }
});


  export default router;