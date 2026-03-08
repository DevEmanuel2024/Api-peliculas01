const Tipo = require('../models/Tipo');

const getTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tipos', error });
  }
};

const getTipoById = async (req, res) => {
  try {
    const tipo = await Tipo.findById(req.params.id);
    if (!tipo) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
    res.json(tipo);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tipo', error });
  }
};

const createTipo = async (req, res) => {
  try {
    const nuevo = new Tipo(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear tipo', error });
  }
};

const updateTipo = async (req, res) => {
  try {
    const actualizado = await Tipo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizado) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar tipo', error });
  }
};

const deleteTipo = async (req, res) => {
  try {
    const eliminado = await Tipo.findByIdAndDelete(req.params.id);
    if (!eliminado) return res.status(404).json({ mensaje: 'Tipo no encontrado' });
    res.json({ mensaje: 'Tipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar tipo', error });
  }
};

module.exports = { getTipos, getTipoById, createTipo, updateTipo, deleteTipo };