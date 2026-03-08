const Genero = require('../models/Genero');

const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener géneros', error });
  }
};

const getGeneroById = async (req, res) => {
  try {
    const genero = await Genero.findById(req.params.id);
    if (!genero) return res.status(404).json({ mensaje: 'Género no encontrado' });
    res.json(genero);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener género', error });
  }
};

const createGenero = async (req, res) => {
  try {
    const nuevo = new Genero(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear género', error });
  }
};

const updateGenero = async (req, res) => {
  try {
    const actualizado = await Genero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: 'Género no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar género', error });
  }
};

const deleteGenero = async (req, res) => {
  try {
    const eliminado = await Genero.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Género no encontrado' });
    res.json({ mensaje: 'Género eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar género', error });
  }
};

module.exports = { getGeneros, getGeneroById, createGenero, updateGenero, deleteGenero };