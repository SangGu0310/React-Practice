import React from 'react';
import Hello from './hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';


function App(){
  const name = 'react';
  const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize : 24,
    padding : '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return(
    //두개 이상의 태그는 무조건 하나의 태그로 감싸져야한다
    //그래서 이 Fragment를 사용해서 감싼다
    //props 값을 설정하지 않으면 true로 들어간다.
    <>
    {/* 주석은 화면에 보이지 않습니다 */}
      {/* <Hello/>
      <Hello name="react"/> */}
      <Wrapper>
        <Hello name="react" color="red" isSpecial/>
        <Hello color="pink"/>
        <Counter/>
        <InputSample/>
        <UserList/>
      </Wrapper>
      {/* <div style={style}>{name}</div>
      <div className="gray-box"></div> */}

    </>
  );
}
export default App;






































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
