const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema(
  {
    nombres: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Director', directorSchema);