import Video from "./components/Video";
import './App.css'

function App(){
  return  (
    <>
    <h1>Hello react!!</h1>
     <Video title = "This is First" color ="red" ></Video>
     <Video title= "This is second" color ="green" ></Video>
     <Video title = "This is third" color ="blue" ></Video>
     </>
  );

}

export default App;