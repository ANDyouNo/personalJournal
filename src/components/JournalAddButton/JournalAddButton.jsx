import React from 'react'
import "./JournalAddButton.css";
import CardButton from '../CardButton/CardButton';
const JournalAddButton = ({clearForm}) => {
  return (
    <CardButton className="journal-add" onClick={clearForm}>
      <span>+</span> New
    </CardButton>
  );
};

export default JournalAddButton