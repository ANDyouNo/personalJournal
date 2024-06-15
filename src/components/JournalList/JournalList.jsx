import React, { useContext, useMemo } from "react";
import "./JournalList.css";
import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton";
const JournalList = ({ items }) => {



const sortItems = (a, b) => {
  if (a.date < b.date) {
    return 1;
  } else {
    return -1;
  }
};

	const filteredItems = useMemo(
    () => items.sort(sortItems),
    [items]
  );

  if (items.length === 0) {
    return <p>Записей пока нет, добавь первую</p>;
  }
  

  return (
    <div className="journal">
      {filteredItems.map((el) => (
        <CardButton key={el.id}>
          <JournalItem
            title={el.title}
            post={el.post}
            date={el.date}
          ></JournalItem>
        </CardButton>
      ))}
    </div>
  );
};

export default JournalList;
