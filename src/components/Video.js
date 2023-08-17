import './video.css'

//ABOUT PROPS=>
// props are always being in form of objects...
// These days we use props in  a destructured way
function Video({title,channel,views,time}){
    return( 
        <div className='cointaner'>
            <div className='pic'>
            <img className="Img" src="https://picsum.photos/seed/picsum/400/300" alt="Error"></img>
            </div>
            <div className='title'>{title}</div>
            <div className='channel'>{channel}</div>
            <div className='views'>{views} views <span>.</span> {time}</div>

            
        </div>
    )
}

export default Video;