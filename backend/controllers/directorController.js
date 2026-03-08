const Director = require('../models/Director');

const getDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener directores', error });
  }
};

const getDirectorById = async (req, res) => {
  try {
    const director = await Director.findById(req.params.id);
    if (!director) return res.status(404).json({ mensaje: 'Director no encontrado' });
    res.json(director);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener director', error });
  }
};

const createDirector = async (req, res) => {
  try {
    const nuevo = new Director(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear director', error });
  }
};

const updateDirector = async (req, res) => {
  try {
    const actualizado = await Director.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: 'Director no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar director', error });
  }
};

const deleteDirector = async (req, res) => {
  try {
    const eliminado = await Director.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Director no encontrado' });
    res.json({ mensaje: 'Director eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar director', error });
  }
};

module.exports = { getDirectores, getDirectorById, createDirector, updateDirector, deleteDirector };