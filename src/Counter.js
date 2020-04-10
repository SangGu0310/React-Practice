// Reacte에 있는 useState함수를 사용하겠다
import React,{useState} from 'react'

function Counter(){

    // useState는 상태의 기본값을 파라미터를 갖는다
    // 이 함수를 호출하면 배열이 반환
    // 첫번째 원소는 현재상태, 두번째 원소는 Setter함수
    const [number, setNumber] = useState(0);

    const onIncrease = () =>{
        setNumber(number => number+1);
    }

    const onDecrease = () =>{
        setNumber(number => number-1);
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick = {onIncrease}>+1</button>
            <button onClick = {onDecrease}>-1</button>
        </div>
    );
}

export default Counter;