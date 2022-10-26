// Code EyesOnMe Component Here
function EyesOnMe (){
    function focusHandle() {
        console.log('Good!')
    }
    function blurHandle() {
        console.log("Hey! Eyes on me!")
    }
    return (
        <div>
            <button 
            name="eyes" 
            onFocus={focusHandle}
            onBlur={blurHandle}>Eyes on me</button>
        </div>
    )
}

export default EyesOnMe;