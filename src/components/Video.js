import './video.css'
// props are always being in form of objects...
function Video(porps){
    return( 
        <div>
            <img className="Img" src="https://picsum.photos/seed/picsum/400/300" alt="Error"></img>
            <h2>`Hey There!! This is {porps.title} video component!`</h2>
        </div>
    )
}

export default Video;