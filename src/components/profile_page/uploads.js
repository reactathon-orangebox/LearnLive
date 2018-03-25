import React from 'react';
import UploadSingle from './upload.js'


const Uploads = (props) => (
	<div className='upload'>
		{
			props.uploads.map((upload, index) => <UploadSingle upload={upload} key={index} /> )
		}
	</div>
);

export default Uploads;