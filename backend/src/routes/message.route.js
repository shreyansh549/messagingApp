import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/upload.middleware.js";
import { getUsersForSidebar } from "../controllers/message.controller.js";
import { getConversationsForSidebar } from "../controllers/message.controller.js";
import { getMessages } from "../controllers/message.controller.js";
import { sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.use(protectRoute);

router.get("/users", getUsersForSidebar);
router.get("/conversations", getConversationsForSidebar);
router.get("/:id", getMessages);
router.get("/send/:id", upload.single("media"), sendMessage);

// todo: show in the fronend part

export default router;
