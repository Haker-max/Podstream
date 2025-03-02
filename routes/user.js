import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";
import { getUser } from "../controllers/user.js";


const router = express.Router();

//get  user
router.get("/",verifyToken, getUser);
const recommendPodcasts = require("../recommendations");
router.get("/:id/recommendations", async (req, res) => {
    const recommendations = await recommendPodcasts(req.params.id);
    res.json(recommendations);
});
const chatbotResponse = require("../utils/chatbot");
router.post("/chatbot", async (req, res) => {
    const response = await chatbotResponse(req.body.message);
    res.json({ response });
});







export default router;