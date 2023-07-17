import ColorContext from "../context/ContextAPI";

function ColorComponent() {
  /* 
  const colorHandler = (value) => {
    return <div>컬러 컴포넌트 value : {value.color}</div>;
  };
 */

  return (
    <ColorContext.Consumer>
      {/* {colorHandler} */}

      {/* 화살표 함수의 객체는 () */}

      {/* consumer에서는 컨텍스트API의 사용, 값을 전닯다은 함수를 하나 선언하고, 첫번째 매개변수로 받는다 */}
      {(value) => <div>컬러 컴포넌트 value : {value.color}</div>}
    </ColorContext.Consumer>
  );
}

export default ColorComponent;
