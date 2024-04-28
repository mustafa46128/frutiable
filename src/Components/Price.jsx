import React, { useEffect, useState } from "react";

export default function Price() {
  const [value, setValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  const updateMaxValue = () => {
    const newMaxValue = Math.ceil(value / 10) * 1 + 0;
    setMaxValue(newMaxValue);
  };
  return (
    <div className=" mt-8 mb-8 w-full">
      <h4 className="mb-2 text-[1.5rem] font-[600] font-raleway text-[#45595b]">
        Price
      </h4>
      <input
        type="range"
        min="1"
        max="5000"
        value={value}
        onChange={handleSliderChange}
        onMouseMove={updateMaxValue}
        className="slider slider:hover slider::-webkit-slider-thumb"
      />
      <h1>{maxValue}</h1>
    </div>
  );
}
