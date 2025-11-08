import Ch2 from "./Ch2"
function Ch1({name}){
    return(
        <>
        <h1>Ch1 -{name}</h1>
        <hr />
        <Ch2 newdata="flow from ch1" />
        </>
    )
}
export default Ch1