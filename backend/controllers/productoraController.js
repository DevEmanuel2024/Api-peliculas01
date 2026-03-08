const Productora = require('../models/Productora');

const getProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productoras', error });
  }
};

const getProductoraById = async (req, res) => {
  try {
    const productora = await Productora.findById(req.params.id);
    if (!productora) return res.status(404).json({ mensaje: 'Productora no encontrada' });
    res.json(productora);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productora', error });
  }
};

const createProductora = async (req, res) => {
  try {
    const nueva = new Productora(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear productora', error });
  }
};

const updateProductora = async (req, res) => {
  try {
    const actualizada = await Productora.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ mensaje: 'Productora no encontrada' });
    res.json(actualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar productora', error });
  }
};

const deleteProductora = async (req, res) => {
  try {
    const eliminada = await Productora.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: 'Productora no encontrada' });
    res.json({ mensaje: 'Productora eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar productora', error });
  }
};

module.exports = { getProductoras, getProductoraById, createProductora, updateProductora, deleteProductora };