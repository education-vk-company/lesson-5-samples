import { useState } from "react";

// State management
// Handling Events
export const Toggle = () => {
  const [isToggleOn, setIsToggleOn] = useState(true);

	const handleClick = () => {
    // debugger;
		setIsToggleOn(!isToggleOn);
	}

  return (
    <button onClick={handleClick}>
      { isToggleOn ? 'ON' : 'OFF' }
    </button>
  );
}
