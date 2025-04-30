const sharp = require('sharp');

const MIME_TYPES = {
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
  }

const sharpProcess = async (req, res, next) => {
    if (!req.file) {
      return next();
    }
  
    try {
        const name = req.file.originalname.split(' ').join('_');
        const filename = name + Date.now() + '.webp';

      await sharp(req.file.buffer)
        .toFormat('webp')
        .webp({ quality: 50 })
        .toFile("./images/" + filename);
  
      req.file.filename = filename;
  
      next();
    } catch (error) {
      console.error('Erreur Sharp:', error);
      res.status(500).json({ error: 'Erreur lors du traitement de l\'image.' });
    }
  };
  
  module.exports = sharpProcess;