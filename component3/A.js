import { useContext, useRef } from "react";
import UserContext from "../context/ContextAPI2";
import C from "./C";

function A() {
  // useContext 훅 - 값을 조회 또는 제어하기 위해 사용
  // UserContext에서 state와 action을 가져옴
  const { state, action } = useContext(UserContext);

  // ref 훅
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  const handleClick = () => {
    // provider값을 외부에서 변경
    // consol.log(action)

    action.setUser({
      id: inputRef1.current.value,
      name: inputRef2.current.value,
    });

    inputRef1.current.value = "";
    inputRef2.current.value = "";
  };

  return (
    <div>
      id : <input type="text" ref={inputRef1} />
      <br />
      name : <input type="text" ref={inputRef2} />
      <br />
      <button onClick={handleClick}>provider값 변경하기</button>
      <div>
        {state.id}
        <br />
        {state.name}
        <br />
      </div>
      <C />
    </div>
  );
}

export default A;
