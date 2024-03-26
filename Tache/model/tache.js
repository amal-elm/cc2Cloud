const mongoose = require('mongoose');

const TacheSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date_echeance: {
    type: String,
    required: true,
  },
  priorite: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Tache', TacheSchema);