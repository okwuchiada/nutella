import Img from './components/image';
import img1 from './image1.jpg';
import { useState } from 'react'
import Button from './components/button'



function App() {
const [ width, setHandler ] = useState(200)

const expandWidth=()=>{
    setHandler(width + (width * (20/100)))
}
const reduceWidth=()=>{
    setHandler( width - (width * (20/100)))
}

    return ( 
       <div className="container">

        <Img source= {img1} w={width} h="auto" alt="a clean road" className="image"/>
        <div>
        <Button buttonHandler={expandWidth}>Expand</Button>
        <Button buttonHandler={reduceWidth}>Reduce</Button>
        </div>
       </div>
        
    );
}

export default App;