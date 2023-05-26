const router = require("express").Router();
const { Thought, User } = require("../../models");

const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser);

router.route("/:userId").put(updateUser);

router.route("/:userId").delete(deleteUser);

// /api/applications/:userId/friends
router.route("/:userId/friends").post(addFriend);

// /api/applications/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(removeFriend);
module.exports = router;
