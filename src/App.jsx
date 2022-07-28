import React, { useState } from "react";
import Counter from "./components/Counter";
import Converter from "./components/Converter";
import MyBtn from "./components/MyBtn";

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <Counter counter={counter} setCounter={setCounter} />
      <Converter counter={counter} />
      <hr />
      <MyBtn
        text={"1번 버튼"}
        fontSize={"10px"}
        isChecked={true}
        alertMsg={"1번버튼 클릭됨"}
      />
      <MyBtn
        text={"2번 버튼"}
        fontSize={"15px"}
        isChecked={false}
        alertMsg={"2번버튼 클릭됨"}
      />
      <MyBtn
        text={"3번 버튼"}
        fontSize={"20px"}
        isChecked={false}
        alertMsg={"3번버튼 클릭됨"}
      />
    </>
  );
};

export default App;
