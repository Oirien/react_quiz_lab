import { useState } from "react";

function Option({ questionItem, handleAnswerSelect }) {
	const [selectedOption, setSelectedOption] = useState("");
	const handleSelectedOption = (evt) => {
		setSelectedOption(evt.target.value);
	};

	const options = questionItem.options.map((option, i) => {
		return (
			<>
				<input
					onChange={handleSelectedOption}
					name={questionItem.question}
					id={i}
					type="radio"
					value={option}
					key={i}
					checked={option === selectedOption}
				/>

				<label htmlFor={i}>{option}</label>
			</>
		);
	});
	return (
		<>
			{options}
			<button
				onClick={() => {
					handleAnswerSelect(selectedOption);
					setSelectedOption("");
				}}
			>
				SUBMIT
			</button>
		</>
	);
}

export default Option;
