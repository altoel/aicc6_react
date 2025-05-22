import { createStore } from 'redux';

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return { number: 1 }; // 초기값
  }

  const newState = { ...currentState }; // 새로운 상태를 생성할 때 기존 상태를 유지하여 누적

  if (action.type === 'PLUS') {
    newState.number += 1;
  }

  return newState;
}; // 첫번째 인자는 초기값, 두번째 인자는 변경할 데이터 엑션

export const store = createStore(reducer);
