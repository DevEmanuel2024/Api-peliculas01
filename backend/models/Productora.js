const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    slogan: { type: String },
    descripcion: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Productora', productoraSchema);