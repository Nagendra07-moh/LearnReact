import './playBtn.css'
import {useState} from 'react'
function PlayButton({message,children,onClick}){
    // let count = 0;
    const [count, setcount] = useState(0);
    function callFunc(){
        onClick();
    }
    return(
        <button  onClick={()=> {
            console.log(message)
            // eslint-disable-next-line no-const-assign
            setcount(count+1);
            console.log(count);
            callFunc();
        }}>{children} {count} {callFunc}</button>
    )

}

export default PlayButton;