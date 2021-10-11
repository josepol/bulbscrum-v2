import React from "react";
import classNames from "classnames";

const Button = React.forwardRef(
  ({ type = "button", text, className, color = "primary", onClick }, ref) => {
    const classes = classNames(
      "p-4 text-center w-full cursor-pointer",
      { "bg-darkBlue text-white": color === "primary" },
      { "bg-gray-200 text-black": color === "secondary" },
      className
    );

    return (
      <div>
        <button ref={ref} className={classes} type={type} onClick={onClick}>
          {text}
        </button>
      </div>
    );
  }
);

export default Button;
