
// function Child2(props){
//     return (
//         <>
//         <h1>child2{props.userinfo.username}</h1>
//         </>
//     )
// }

// export default Child2

function Child2({userinfo}){
    return (
        <>
        <h1>child2{userinfo.username}- {userinfo.userage}</h1>

        <hr/>
        <h1>name {userinfo.username}</h1>


        </>
        
    )
}

export default Child2