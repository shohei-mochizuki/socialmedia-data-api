const router = require('express').Router();
const {
  getThoughts,
  getSingleApplication,
  createThought,
  updateApplication,
  deleteApplication,
  addTag,
  removeTag,
} = require('../../controllers/thoughtController');

// /api/thoughts
router
  .route('/')
  .get(getThoughts)
  .post(createThought);

// /api/applications/:applicationId
router
  .route('/:applicationId')
  .get(getSingleApplication)
  .put(updateApplication)
  .delete(deleteApplication);

// /api/applications/:applicationId/tags
router.route('/:applicationId/tags').post(addTag);

// /api/applications/:applicationId/tags/:tagId
router.route('/:applicationId/tags/:tagId').delete(removeTag);

module.exports = router;
