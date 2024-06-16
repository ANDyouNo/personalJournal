import React from 'react'

import CardButton from '../CardButton/CardButton';
const JournalAddButton = ({clearForm}) => {
  return (
    <CardButton className="p-3 flex items-center justify-center gap-3" onClick={clearForm}>
      <span className='text-2xl'>+</span> New
    </CardButton>
  );
};

export default JournalAddButton