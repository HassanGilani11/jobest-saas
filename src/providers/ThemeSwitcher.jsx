"use client";

import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const ThemeSwitcher = () => {
	const [theme, setTheme] = useState(Cookies.get("theme") || "light");

	// Function to toggle theme and update the cookie
	const handleToggle = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		Cookies.set("theme", newTheme, { expires: 365 }); // Store the theme in cookies for 1 year
		document.documentElement.className = `theme-${newTheme}`; // Update the <html> tag instantly
	};

	// On initial render, set the <html> tag's class to the correct theme
	useEffect(() => {
		document.documentElement.className = `theme-${theme}`;
	}, [theme]);

	return (
		<div className="switch-theme-mode">
			<label id="switch" className="switch">
				<input
					type="checkbox"
					id="slider"
					checked={theme === "dark"} // Checked if theme is dark
					onChange={handleToggle} // Toggle theme on checkbox change
				/>
				<span className="slider round"></span>
			</label>
		</div>
	);
};

export default ThemeSwitcher;
