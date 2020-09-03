const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/project');
const authMiddleware = require('../middleware/authsystem')

// root route
router.get('/', projectsController.index);

// handle create logic
router.post('/create', authMiddleware.requireJWT, projectsController.create);

// delete logic
router.post('/delete/:id', authMiddleware.requireJWT, projectsController.delete);

// toggle as not to show
router.post('/toggleShow/:id', authMiddleware.requireJWT, projectsController.toggleShow);

// update logic
router.post('/update/:id', authMiddleware.requireJWT, projectsController.update);

module.exports = router;