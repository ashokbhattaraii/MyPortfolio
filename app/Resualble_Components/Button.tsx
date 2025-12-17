import React from "react";
export default function Button({
  children,
  variant = "primary",
  className,
  onClick: onClickAny,
}: any) {
  let baseStyles = "py-2 px-5 bg-blue-700 text-white rounded-2xl font-bold  ";
  let variantStyles = "";
  switch (variant) {
    case "secondary":
      variantStyles =
        "py-2 px-5 bg-gray-700 text-white rounded-2xl font-bold hover:bg-gray-900 ";
      break;

    case "danger":
      variantStyles =
        "py-2 px-5 bg-red-700 text-white rounded-2xl font-bold hover:bg-red-900 ";
      break;
  }

  const finalClassName = `${variantStyles} ${baseStyles} ${className}`;

  return (
    <button type="button" onClick={onClickAny} className={finalClassName}>
      {children}
    </button>
  );
}
