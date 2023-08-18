import Video from "./components/Video";
import './App.css'
import data from "./data/data"

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
    </div>
    // <>
    //  <Video title = "This is First" channel="PG-1" views="10k"  time="13:34 AM" verified ={true}></Video>
    //  <Video title= "This is second" channel="PG-1" views="100k"  time="13:34 PM" verified = {false}></Video>
    //  <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {true}></Video>
    //  <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {false}></Video>
    //  <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {true}></Video>
    //  <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {false}></Video>
    //  </>

    );



}

export default App;