const express = require('express');
const router = express.Router();
const workexperienceController = require('../controllers/workExperience');
const authMiddleware = require('../middleware/authsystem')

// root route
router.get('/', workexperienceController.index);

// handle create logic
router.post('/create', authMiddleware.requireJWT, workexperienceController.create);

// delete logic
router.post('/delete/:id', authMiddleware.requireJWT, workexperienceController.delete);

// update logic
router.post('/update/:id', authMiddleware.requireJWT, workexperienceController.update);

module.exports = router;