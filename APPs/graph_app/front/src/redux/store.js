// combineReducers: 여러 리듀서를 하나로 합쳐주는 함수
// configureStore: 스토어를 생성하는 함수
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './slices/sidebarSlice';
import Sidebar from '../components/baseLayout/Sidebar';

const store = configureStore({
   reducer: combineReducers({
      sidebar: sidebarReducer,
   }),
});

export default store;
