const mongoose = require('mongoose');

const tipoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    descripcion: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Tipo', tipoSchema);