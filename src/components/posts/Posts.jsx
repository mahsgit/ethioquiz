import "./post.css";
import HeartIcon from './HeartIcon'

const Posts = () => {
  return (
  <>
  <div className="intro">
        Ethiopia is home to a rich and diverse array of wildlife, 
        due to its varied climates, geography, and ecosystems.
        </div>
    <div className='post'>
        
     <div className="post1">
        <div className="postImg">
        <img
        className='postImgg1' 
        src="https://wildnet.org/wp-content/uploads/2018/04/abyssinian_fox.jpg"
        alt=""/>
        </div>
        <div className="postInfo1">
            
            <span className="postTitle">Ethiopian Wolf</span>
            <span className="postDescription">The Ethiopian wolf, also known as the Simien fox,
             is a critically endangered species that is found only in the Ethiopian highlands. 
            It is the rarest canid in the world and is known for its distinctive red coat.</span>
           <div className="hearticon">
              <HeartIcon/>

            </div>
             <div className="postimagediv"  >
            <img className='postImgg2'
         
        src="https://www.houstonpettalk.com/wp-content/uploads/2014/06/July-2013.jpg"
        alt=""/></div>
           
        </div>
     </div>
     <div className="post2">
        <div className="postImg2">
        <img
        className='postImgg3' 
        src="https://d2g6byanrj0o4m.cloudfront.net/images/49031/ethiopian_children.jpg"
        alt=""/></div>
        <div className="postInfo2">
            
            <span className="postTitle">Omo Valley</span>
            <span className="postDescription">The Omo Valley is a region in southwestern Ethiopia that is home to a variety of indigenous tribes,
             as well as a diverse range of wildlife, including elephants, lions, and hippos.</span>
            <div className="hearticon">
              <HeartIcon/>

            </div>
           
        </div>
     </div> 
     <div className="post3">
        <div className="postImgdiv4">
        <img
        className='postImgg4' 
        src="https://www.shadowsofafrica.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/s/h/shutterstock_1427243174.jpg"
        alt=""/>
        </div>
        <div className="postInfo3">
            
            <span className="postTitle">Awash National Park</span> 
            <span className="postDescription">Awash National Park is a protected area in central Ethiopia
             that is home to a variety of wildlife, including oryx, kudu, gazelles, and baboons.
             It is also known for its hot springs and waterfalls</span>
           <div className="hearticon">
              <HeartIcon/>

            </div>
        </div>
     </div>
     <div className="post4">
        <div className="postImgdiv4">
        <img
        className='postImgg5' 
        src="https://c4.wallpaperflare.com/wallpaper/697/216/952/mountains-ethiopia-simien-mountains-national-park-amhara-wallpaper-preview.jpg"
        alt=""/>
        </div>
        <div className="postInfo4">
        
            <span className="postTitle">Ethiopian Highlands</span>
            <span className="postDescription"> The highlands of Ethiopia are home to a variety of endemic bird species, 
            including the wattled ibis, the blue-winged goose,
             and the Rouget's rail.</span>    <div className="hearticon">
              <HeartIcon/>

            </div>
            
        </div>
     </div>
    </div>
    </>
  )
}

export default Posts
