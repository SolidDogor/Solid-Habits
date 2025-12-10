import express from "express";
import {
  createHabit,
  deleteHabit,
  getAllHabits,
  getHabitById,
  updateHabit,
} from "../controllers/habitsController.js";

const router = express.Router();

router.get("/", getAllHabits);
router.get("/:id", getHabitById);
router.post("/", createHabit);
router.put("/:id", updateHabit);
router.delete("/:id", deleteHabit);

export default router;
