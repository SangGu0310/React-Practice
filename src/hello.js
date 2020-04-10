

// 리액트 컴포넌트를 만들땐 
import React from 'react';
//를 통하여 리액트를 불러와야한다.

// 컴포넌트는 함수로 작성가능 클래스로도 작성가능

function Hello({color,name,isSpecial}){
    // JSX는 리액트에서 생김새를 정의할 때 사용하는 문법
    // 얼핏보면 HTML같이 생겼지만 실제로는 JS
    return (
        <div style={{color}}>
            {isSpecial ? <b>*</b> : null}
            안녕하세요 {name}
        </div>
    );
}

Hello.defaultProps = {
    name : '이름없음'
}


/* HEllo라는 컴포넌트를 내보내겠다
   이렇게하면 다른 컴포넌트에서도 쓸수있따  
*/
export default Hello;
