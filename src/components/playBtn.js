import './playBtn.css'
// import {useState} from 'react'
function PlayButton({message,children,onPlay,onPause}){
    let Playing  = false;
    function handleClick(){
        if(Playing){
            onPause();
            Playing = 1 - Playing;
        }else{
            onPlay();
            Playing = 1 - Playing;

        }

    }
        
    return(
        <button onClick={handleClick}>{children} : {Playing?'>':'||'}</button>
    )

}

export default PlayButton;