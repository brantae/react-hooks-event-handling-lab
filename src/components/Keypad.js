// Code Keypad Component Here



function Keypad(){
    
    function handleChange(event) {
        event.preventDefault()
        console.log("Entering password...")
    }
    
    return (
        <div>
            <input 
            type="password" 
            name="password" 
            placeholder="Enter password..."
            onChange = {handleChange}/>
        </div>
    )
    
}

export default Keypad;