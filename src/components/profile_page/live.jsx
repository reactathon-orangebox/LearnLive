import React from 'react';
import Iframe from 'react-iframe';

const Live = (props) => (
	<div>
		<Iframe url="http://www.youtube.com/embed/L7Uq5nc2pik"
        width="600px"
        height="400px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"
        allowFullScreen/>
	</div>
);

export default Live;
