import { useState } from 'react';
import Left1 from './components/Left1';
import Right1 from './components/Right1';

// 리덕스 용어: useSelector, useDispatch, Provider, Action, Reducer, Store
// useSelector: 스토어에 저장돼 있는 데이터를 조회
// useDispatch: 스토어에 데이터를 저장하는 함수를 리턴
// Provider: 스토어를 제공하는 컴포넌트
// Action: 스토어에 저장할 데이터를 정의한 객체
// Reducer: 스토어에 저장된 데이터를 변경하는 함수
// Store: 스토어에 저장된 데이터를 관리하는 객체
// 필요한 모듈: redux, react-redux

function App() {
  const [number, setNumber] = useState(1);
  return (
    <div className="App">
      <h1>Root: {number}</h1>
      <div className="wrapper">
        <Left1 number={number} />
        <Right1 onIncrease={() => setNumber(number + 1)} />
      </div>
    </div>
  );
}

export default App;
