import Video from "./components/Video";
import './App.css'

function App(){
  return  (
    <>
     <Video title = "This is First" channel="PG-1" views="10k"  time="13:34 AM" verified ={true}></Video>
     <Video title= "This is second" channel="PG-1" views="100k"  time="13:34 PM" verified = {false}></Video>
     <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {true}></Video>
     <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {false}></Video>
     <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {true}></Video>
     <Video title = "This is third" channel="PG-1" views="1200k"  time="13:34 PM" verified = {false}></Video>
     </>



  );

}

export default App;