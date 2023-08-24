
import Video from "./components/Video";
import './App.css'
import data   from "./data/data"
import PlayButton from "./components/playBtn";




function App(){

  return  (

    <div className="App">
    {
      data.map((i) =><Video
        key = {i.id}
        title = {i.title}  
        channel= {i.channel}
        views= {i.views} 
        time = {i.time}
        verified= {i.verified}
        >
      <PlayButton message="Hey There!! play button has been triggered" onPlay={()=>console.log("This is play!!")} onPause = {()=>console.log("this is pause!!")}>PlayButton</PlayButton>

        </Video>)
      }
      <div>
      {/* <PlayButton message="Hey There!! play button has been triggered" onPlay={()=>console.log("This is play!!")} onPause = {()=>console.log("this is pause!!")}>PlayButton</PlayButton> */}
      {/* <PlayButton message="Hey There!! Pause button has been triggered" onClick={()=>alert("This is customEvents for pause")}>PauseButton</PlayButton> */}
      

      </div>

    </div>


    );



}

export default App;