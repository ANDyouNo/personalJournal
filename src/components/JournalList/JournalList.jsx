import React, { useContext, useMemo } from "react";
import "./JournalList.css";
import JournalItem from "../JournalItem/JournalItem";
import CardButton from "../CardButton/CardButton";
const JournalList = ({ items, setItem, selectedItem }) => {
  const sortItems = (a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  };

  const filteredItems = useMemo(() => items.sort(sortItems), [items]);

  if (items.length === 0) {
    return <p>Записей пока нет, добавь первую</p>;
  }

  const selectCard = () => {};

  return (
    <div className="flex flex-col gap-3">
      {filteredItems.map((el) => (
        <CardButton
          key={el.id}
          onClick={() => setItem(el)}
          selected={selectedItem && selectedItem.id === el.id} // Передача selected
        >
          <JournalItem
            selected={selectedItem && selectedItem.id === el.id}
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
