const mongoose = require('mongoose');

const ActiviteSchema = new mongoose.Schema({
  utilisateur_id: {
    type: String,
    required: true,
  },
  tache_id: {
    type: String,
    required: true,
  },

});

module.exports = mongoose.model('activite', ActiviteSchema);