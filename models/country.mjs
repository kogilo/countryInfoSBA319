import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  population: { type: Number, required: true },
  gdp: { type: Number, required: true },
  growthRate: { type: Number, required: true },
  region: { type: String, required: true },
  capital: { type: String, required: true }
});


export default mongoose.model('Country', countrySchema);