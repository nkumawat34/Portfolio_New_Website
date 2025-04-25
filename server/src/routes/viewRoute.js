const express = require("express");
const router = express.Router();
const { incrementView, getView,getAllViews } = require("../controllers/viewController").default;


router.put("/:blogId", incrementView);
router.get("/:blogId", getView);
router.get("/", getAllViews);            
module.exports = router;
