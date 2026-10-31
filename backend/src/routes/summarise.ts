import { Router } from "express";
import { summarizeText } from "../service/aiService.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { text } = req.body;

    if (!text) {
      return res.status(400).json({ error: "Text is required" });
    }

    const summary = await summarizeText(text);

    res.json({ summary });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

export default router;