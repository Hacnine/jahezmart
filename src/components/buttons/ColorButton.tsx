import React from "react";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface ColorButtonProps {
  currentColor: string;
  index: number;
  colors: string[];
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>; 
  setIndex:  React.Dispatch<React.SetStateAction<number>>;
}

const ColorButton: React.FC<ColorButtonProps> = ({
  currentColor,
  index,
  colors,
  selected: check,
  setSelected: setCheck,
  setIndex,
}) => {
  return (
      <button
        key={index}
        className={`${currentColor === 'white' ? 'border border-slate-200': ''}  sm:w-8 sm:h-8 w-5 h-5 rounded-md  overflow-clip center shadow-md `}
        style={{ backgroundColor: currentColor}}
        onClick={() => {setCheck(colors[index]); setIndex(index)}}
        >
        {check === currentColor ? (
          <IoCheckmarkDoneOutline className={`${currentColor === 'white' ? 'text-slate-500': 'text-slate-300'}  md:text-xl text-sm`}/>
        ) : null}
      </button>
  );
};

export default ColorButton;

// import React from "react";
// import { FaCheck } from "react-icons/fa";

// const ColorButton = ({ currentColor, index, colors, check, setCheck }) => {

//   return (
//     <div>
//       <button
//         key={index}
//         className={` bg-[${currentColor}] border border-[${currentColor}]  w-5 h-5 rounded-full overflow-clip`}
//         style={{backgroundColor: currentColor}}
//         onClick={() => setCheck(colors[index])}
//       >
//         {check === currentColor ? (
//           <FaCheck className=" text-white p-0.5" />
//         ) : null}
//       </button>

//       {colors.map((color)=>(
//         <button className={`w-7 h-7 mx-2 rounded-md
//         ${selected? "ring-2 ring-chocolate": "border border-slate-200"}`} style={{backgroundColor:`${color}`}}/>
// ))}
//     </div>
//   );
// };
