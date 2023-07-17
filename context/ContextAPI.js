import { createContext } from "react";

// 전역으로 사용 할 컨텍스트 API
const ColorContext = createContext({ color: "red" });

console.log(ColorContext);

export default ColorContext;
