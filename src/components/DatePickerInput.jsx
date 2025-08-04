import { useCallback, useEffect, useRef, useState } from "react";
import { DayPicker } from "react-day-picker";
import "../../app.css";
import "react-day-picker/style.css";

const DatePickerInput = ({ label, id, onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState();
  const [isDayPickerVisible, setIsDayPickerVisible] = useState(false);
  const dayPickerRef = useRef(null);

  const handleDaySelect = (date) => {
    setSelectedDate(date);
    setIsDayPickerVisible(false);
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const handleInputClick = () => {
    setIsDayPickerVisible(true);
  };

  const handleClickOutside = useCallback((event) => {
    if (dayPickerRef.current && !dayPickerRef.current.contains(event.target)) {
      setIsDayPickerVisible(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const formatDate = (date) => {
    if (!date) return "";
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  return (
    <div ref={dayPickerRef}>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={formatDate(selectedDate)}
        onClick={handleInputClick}
        readOnly
      />
      {isDayPickerVisible && (
        <div
          style={{
            position: "absolute",
            zIndex: 1000,
            backgroundColor: "#ffffff",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={handleDaySelect}
          />
        </div>
      )}
    </div>
  );
};

export default DatePickerInput;
