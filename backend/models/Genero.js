const mongoose = require('mongoose');

const generoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    estado: { type: String, enum: ['Activo', 'Inactivo'], default: 'Activo' },
    descripcion: { type: String }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Genero', generoSchema);