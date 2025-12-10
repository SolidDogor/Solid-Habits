import Habit from "../models/Habit.js";

export async function getAllHabits(_, res) {
  try {
    const habits = await Habit.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(habits);
  } catch (error) {
    console.error("Error in getAllHabits controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getHabitById(req, res) {
  try {
    const habit = await Habit.findById(req.params.id);
    if (!habit) return res.status(404).json({ message: "Habit not found!" });
    res.json(habit);
  } catch (error) {
    console.error("Error in getHabitById controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createHabit(req, res) {
  try {
    const { title, content } = req.body;
    const habit = new Habit({ title, content });

    const savedHabit = await habit.save();
    res.status(201).json(savedHabit);
  } catch (error) {
    console.error("Error in createHabit controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateHabit(req, res) {
  try {
    const { title, content } = req.body;
    const updatedHabit = await Habit.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );

    if (!updatedHabit)
      return res.status(404).json({ message: "Habit not found" });

    res.status(200).json(updatedHabit);
  } catch (error) {
    console.error("Error in updateHabit controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteHabit(req, res) {
  try {
    const deletedHabit = await Habit.findByIdAndDelete(req.params.id);
    if (!deletedHabit)
      return res.status(404).json({ message: "Habit not found" });
    res.status(200).json({ message: "Habit deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteHabit controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
