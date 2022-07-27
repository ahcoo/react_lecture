import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  //counter가 선언 없이 뜨는 이유 - useState를 0으로 설정하면 최초 상태가 counter = 0인것과 동일.

  const onClickfunc = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}번 클릭했습니다.</div>
      <button onClick={onClickfunc}>Click me</button>
    </div>
  );
  /*<> <div></div </>처럼 빈 <>도 사용 가능*/
}

export default App;