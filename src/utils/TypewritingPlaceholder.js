"use client";
// TypewritingPlaceholder.js
import React, { useState, useEffect } from "react";

const TypewritingPlaceholder = ({
	placeholdersTitles,
	onPlaceholderChange,
	intervalTime = 5000,
	typingSpeed = 100,
}) => {
	const [placeholder, setPlaceholder] = useState(""); // Current typed portion
	const [currentPlaceholder, setCurrentPlaceholder] = useState(""); // Full text
	const [typingIndex, setTypingIndex] = useState(0); // Typing position
	const [isTyping, setIsTyping] = useState(false); // Typing status

	// Function to get a random placeholder from the array
	const getRandomPlaceholder = () => {
		const randomIndex = Math.floor(
			Math.random() * placeholdersTitles.length
		);
		return placeholdersTitles[randomIndex];
	};

	useEffect(() => {
		// Start typing effect immediately after selecting a random placeholder
		const startTypingEffect = (placeholderText) => {
			setTypingIndex(0); // Reset typing index
			setPlaceholder(""); // Clear the current typed placeholder
			setCurrentPlaceholder(placeholderText); // Set new placeholder text
			setIsTyping(true); // Start typing
		};

		// Select the initial random placeholder and start typing
		const initialPlaceholder = getRandomPlaceholder();
		startTypingEffect(initialPlaceholder); // Immediate start

		// Set interval to change the placeholder every `intervalTime` milliseconds
		const intervalId = setInterval(() => {
			const newPlaceholder = getRandomPlaceholder();
			startTypingEffect(newPlaceholder);
		}, intervalTime); // Change placeholder every intervalTime seconds

		// Cleanup interval on component unmount
		return () => clearInterval(intervalId);
	}, [placeholdersTitles, intervalTime]);

	useEffect(() => {
		if (isTyping && typingIndex < currentPlaceholder.length) {
			const typingTimeout = setTimeout(() => {
				const nextPlaceholder =
					placeholder + currentPlaceholder[typingIndex]; // Add one character at a time
				setPlaceholder(nextPlaceholder); // Update the placeholder state
				setTypingIndex((prev) => prev + 1); // Move to the next character
				onPlaceholderChange(nextPlaceholder); // Send the updated placeholder to the parent component
			}, typingSpeed); // Typing speed

			return () => clearTimeout(typingTimeout); // Cleanup typing timeout
		} else if (typingIndex === currentPlaceholder.length) {
			setIsTyping(false); // Stop typing when full text is typed
		}
	}, [isTyping, typingIndex, currentPlaceholder, typingSpeed]);

	return null; // No need to render anything from this component
};

export default TypewritingPlaceholder;
