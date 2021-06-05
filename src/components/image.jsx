

const imageStyle={
    objectFit: 'cover',
  border: '4px solid #eee'
 

    
}



const Img = (props) =>{
   
    

  
    return(
        <>
        <img src={props.source} width={props.w} height={props.h} alt={props.alt} style={imageStyle}/>
       

        </>
    )
}


export default Img