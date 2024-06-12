import React from 'react'
import "./JournalAddButton.css";
import CardButton from '../CardButton/CardButton';
const JournalAddButton = () => {
	return (
		<CardButton className="journal-add">
			<span>+</span> New
		</CardButton>
	)
}

export default JournalAddButton