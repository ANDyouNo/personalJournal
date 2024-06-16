import React, {forwardRef} from 'react'

import classNames from 'classnames';

const Input = forwardRef(function Input({ isValid = true, apperence, ...props }, ref) {
  return (
    <input
      {...props}
      ref={ref}
      className={classNames(
        "bg-inherit border-b rounded font-semibold w-full p-2",
        {
          "border border-red-600": !isValid,
          "text-4xl": apperence === "title",
          "text-base": apperence !== "title",
          "border-zinc-700": isValid,
          "focus:outline-none": true, // убираем стандартный outline браузера
        }
      )}
    />
  );
});


export default Input