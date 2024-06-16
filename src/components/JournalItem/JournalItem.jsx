import React from 'react';


const JournalItem = ({ title, post, date, selected }) => {
  const formatedDate = date.toLocaleDateString("ru-RU");

  return (
    <>
      <h2
        className={
          selected
            ? "text-lg font-bold leading-7 text-black"
            : "text-lg font-bold leading-7"
        }
      >
        {title}
      </h2>
      <div className="flex gap-3">
        <div
          className={
            selected
              ? "text-black text-base font-bold"
              : "text-zinc-500 text-base font-bold"
          }
        >
          {formatedDate}
        </div>
        <div
          className={
            selected
              ? "text-black text-base font-normal overflow-hidden"
              : "text-zinc-500 text-base font-normal overflow-hidden"
          }
        >
          {post}
        </div>
      </div>
    </>
  );
};

export default JournalItem;