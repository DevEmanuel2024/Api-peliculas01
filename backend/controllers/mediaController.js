const Media = require('../models/Media');
const Genero = require('../models/Genero');
const Director = require('../models/Director');
const Productora = require('../models/Productora');

const getMedias = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate('genero')
      .populate('director')
      .populate('productora')
      .populate('tipo');
    res.json(medias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener medias', error });
  }
};

const getMediaById = async (req, res) => {
  try {
    const media = await Media.findById(req.params.id)
      .populate('genero')
      .populate('director')
      .populate('productora')
      .populate('tipo');
    if (!media) return res.status(404).json({ mensaje: 'Media no encontrada' });
    res.json(media);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener media', error });
  }
};

const createMedia = async (req, res) => {
  try {
    const { genero, director, productora } = req.body;

    const generoActivo = await Genero.findOne({ _id: genero, estado: 'Activo' });
    if (!generoActivo) return res.status(400).json({ mensaje: 'El género no existe o no está activo' });

    const directorActivo = await Director.findOne({ _id: director, estado: 'Activo' });
    if (!directorActivo) return res.status(400).json({ mensaje: 'El director no existe o no está activo' });

    const productoraActiva = await Productora.findOne({ _id: productora, estado: 'Activo' });
    if (!productoraActiva) return res.status(400).json({ mensaje: 'La productora no existe o no está activa' });

    const nueva = new Media(req.body);
    const guardada = await nueva.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear media', error });
  }
};

const updateMedia = async (req, res) => {
  try {
    const actualizada = await Media.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actualizada) return res.status(404).json({ mensaje: 'Media no encontrada' });
    res.json(actualizada);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar media', error });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const eliminada = await Media.findByIdAndDelete(req.params.id);
    if (!eliminada) return res.status(404).json({ mensaje: 'Media no encontrada' });
    res.json({ mensaje: 'Media eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar media', error });
  }
};

module.exports = { getMedias, getMediaById, createMedia, updateMedia, deleteMedia };