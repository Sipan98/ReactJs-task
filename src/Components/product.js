import React from 'react';
import ReactPlayer from "react-player";

class Product extends React.Component{
	render(){
		return(
		<div className="body">
          	<p><img src={this.props.w.img} />{this.props.w.name}</p>
          	<div className="video">
            	<ReactPlayer url={this.props.w.video} width= '250' height='180' controls={true} />
           	</div>
          	<div className='text'>
	          <h4>{this.props.w.videoname}</h4>
	          <p>{this.props.w.text}</p>
	        </div>
        </div>
		)
	}
}


export default Product