/* eslint-disable no-unused-vars */
import Video from "./components/Video";
import './App.css'
import data   from "./data/data"
import playBtn from './components/playBtn'



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
      {<playBtn/>}
    </div>

    );



}

export default App;