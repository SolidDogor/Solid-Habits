import "./Habit.css";
import pencilImage from "../../assets/Habit/pencilsh.png";
import littlePlusImage from "../../assets/Habit/plus-pequeno.png";

export default function Habit({ habitName, habitDescription }) {
  return (
    <div className="habit-section">
      <div className="information">
        <div className="habit-name">{habitName}</div>
        <div className="habit-description">{habitDescription}</div>
      </div>
      <div className="goals-settings">
        <div className="goal">
          <div className="current-quantity">1/8</div>
          <div className="goal-quantity">
            <button>
              <img src={littlePlusImage} />
            </button>
            <button>
              <img src={littlePlusImage} />
            </button>
          </div>
        </div>
        <img className="habit-settings" src={pencilImage} />
      </div>
    </div>
  );
}
