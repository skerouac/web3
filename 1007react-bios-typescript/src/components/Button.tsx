import { MouseEventHandler, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick: MouseEventHandler;
}

const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-sky-400 text-white hover:bg-sky-300 rounded-lg m-1"
    >
      {children}
    </button>
  );
};

export default Button;
