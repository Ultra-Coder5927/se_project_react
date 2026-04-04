import "./ToggleSwitch.css";
import { useContext } from "react";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

export default function ToggleSwitch() {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext,
  );
  return (
    <label className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch__checkbox"
        checked={currentTemperatureUnit === "C"}
        onChange={handleToggleSwitchChange}
      />
      <span className="toggle-switch__circle"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${currentTemperatureUnit === "F" ? "active" : "inactive"}`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${currentTemperatureUnit === "C" ? "active" : "inactive"}`}
      >
        C
      </span>
    </label>
  );
}
