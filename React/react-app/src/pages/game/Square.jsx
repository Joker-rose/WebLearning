// import { useState } from "react";

// // {value} = props
// export default function Square({ value }) {
//   const [text, setText] = useState("");
//   setText(value);

//   function click() {
//     console.log(value, "click");
//     setText("X");
//   }

//   return (
//     <button className="square" onClick={click}>
//       {text}
//     </button>
//   );
// }

export default function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}
