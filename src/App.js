
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
        ></Video>)
      }
      <div>
      <PlayButton message = "Play the music!!" onSmash={()=> console.log("play cons")}>Play</PlayButton>
      {/* <PlayButton message = "pause the music!!" onSmash={()=>alert.log('pause aler')}>Pause</PlayButton> */}

      </div>

    </div>


    );



}

export default App;