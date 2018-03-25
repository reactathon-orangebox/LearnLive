import React from 'react';
import Iframe from 'react-iframe';

const Upload = (props) => (
	<div className='upload'>
		<Iframe url={`https://www.youtube.com/embed/${props.upload}`} width="130px" height="100px" 
	    id="myId"
	    className="myClassname"
	    display="initial"
	    position="relative"
	    allowFullScreen/>
  </div>
);

export default Upload