const router = require("express").Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thoughtController");

// /api/Thoughts
router.route("/").get(getThoughts).post(createThought);

// /api/Thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

router.route("/:thoughtId").put(updateThought);

router.route("/:thoughtId").delete(deleteThought);

// /api/applications/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// /api/applications/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
