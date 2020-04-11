// src/components/button.js
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: any;
}

export default function Button(props: IProps) {
  // If you don't spread children and title, the restProps
  // still contain these props and compiler will say "no"
  const { children, title, ...buttonProps } = props;
  return (
    <button
      className="px-2 py-1 rounded-lg bg-green-400 text-green-800 text-xl font-light uppercase shadow-md hover:shadow-lg"
      {...buttonProps}
    >
      {children}
    </button>
  );
}
