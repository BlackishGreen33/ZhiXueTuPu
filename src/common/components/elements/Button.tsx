const Button: React.FC = () => {
  return <div>Button</div>;
};

export default Button;

// import { useStateContext } from '../contexts/ContextProvider';

// interface ButtonProps {
//   icon: string;
//   bgColor: string;
//   color: string;
//   bgHoverColor: string;
//   size: string;
//   text: string;
//   borderRadius: string;
//   width: string;
// }

// const Button: React.FC<ButtonProps> = ({
//   icon,
//   bgColor,
//   color,
//   bgHoverColor,
//   size,
//   text,
//   borderRadius,
//   width,
// }) => {
//   const { setIsClicked, initialState } = useStateContext();

//   return (
//     <button
//       type="button"
//       onClick={() => setIsClicked(initialState)}
//       style={{ backgroundColor: bgColor, color, borderRadius }}
//       className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
//     >
//       {icon} {text}
//     </button>
//   );
// };

// export default Button;
