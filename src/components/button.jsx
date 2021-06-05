const buttonStyles ={
    backgroundColor: '#dedede',
    color: '#222',
    width: '100px',
    padding: '10px',
    margin: '10px',
    border: "none",
    borderRadius: '5px'
}



const Button =(props) =>{
    return (
        <button onClick={props.buttonHandler} style={buttonStyles} >{props.children}</button>
    )
}

export default Button;