import React, {useState, useRef} from 'react'

//useRef는 DOM Selector와 같다

function ImputSample(){

    const [inputs, setInputs] = useState({
        name : '',
        nickName : ''
    });

    const nameInput = useRef();

    const {name, nickName} = inputs;
    
    const onChange = (e) => {
        const {value, name} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setInputs({
            name : '',
            nickName : ''
        })
        nameInput.current.focus();
    };

    return(
        <div>
            <input 
            name="name" 
            placeholder="이름" 
            onChange={onChange} 
            value={name}
            ref = {nameInput}
            />&emsp;
            <input 
            name="nickName" 
            placeholder="닉네임" 
            onChange={onChange} 
            value={nickName}
            />
            <button onClick = {onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickName})
            </div>
        </div>
    );
}

export default ImputSample;



    // const [text, setText] = useState('');

    // const onChange = (e) => {
    //     setText(e.target.value);
    // };

    // const onReset = () => {
    //     setText('')
    // };
    // return(
    //     <div>
    //         <input onChange={onChange} value={text}/>
    //         <button onClick = {onReset}>초기화</button>
    //         <div>
    //             <b>값: {text}</b>
    //         </div>
    //     </div>
    // );