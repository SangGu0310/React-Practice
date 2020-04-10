import React from 'react';

function User({user}){
    return(
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>
    )
}
function UserList() {
    const users = [
        {
            id : 1,
            username : 'velopert',
            email : 'public.velopert@gmail.com'
        },
        {
            id : 2,
            username : 'tester',
            email : 'tester@example.com'
        },
        {
            id : 3,
            username : 'liz',
            email : 'liz@example.com'
        }
    ];

    // 배열이 업데이트될때 효율적으로 렌더링 되려면
    // 각 고유 원소에 key가 있어야만한다.
    return (
        <div>
            {users.map((user, index) => (
                <User user = {user} key={index}/>
            ))}
        </div>
    )
}

export default UserList;