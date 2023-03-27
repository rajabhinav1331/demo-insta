import React from "react";
import "./postview.css";
import { Link } from "react-router-dom";

function PostView() {
  return (
    <div>
      <img id='clone-span-img'  src='https://camo.githubusercontent.com/9cf795df7da35d57df8c6f17883d3c3a4cbe9611716ad62f149d08ec3de2fa59/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f647277623139637a6f2f696d6167652f75706c6f61642f76313539313437363937352f4e65775f50726f6a6563745f315f796b3234626a2e706e67' alt="insta-clone"/>
      <nav id="nav-img">
       <Link to='/form'><img id='icon-camera' src='https://img.icons8.com/ios/256/compact-camera.png' alt="camera-icon"/></Link> 
      </nav>
      <hr></hr>

      <div><img src="https://images.ctfassets.net/az3stxsro5h5/5dxzZfxjGUNjEC8dzaBDR8/39989c838de27ae94db70df20bfc7c57/https___later.com_blog_wp-content_uploads_2020_04_Instagram-Addphoto.png?w=281&h=500&q=50&fm=png" alt="post-img"/></div>
    </div>
  );
}

export default PostView;
