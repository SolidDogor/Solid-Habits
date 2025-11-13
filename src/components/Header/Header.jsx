import "./Header.css";
import HeaderSetting from "./HeaderSetting.jsx";
import { HEADER_DATA } from "../../data";

export default function Header() {
  return (
    <section className="header-section">
      <div className="header-title">Solid Habits</div>
      <div className="header-settings">
        {HEADER_DATA.map((settingsItem, index) => (
          <HeaderSetting key={index} {...settingsItem} />
        ))}
      </div>
    </section>
  );
}
