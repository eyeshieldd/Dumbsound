import React from "react";

import ReactPlayer from "react-player/lazy";

import "./Thumbnail.css";

const VideoThumbnail = ({ thumbnail, defaultUrl }) => {

	return (
		<div className="video">
			<div className="player-wrapper ">
				<ReactPlayer
					className="react-player"
					url={defaultUrl}
					width="100%"
					height="100%"
					controls={true}
				// light={thumbnail}
				/>
			</div>
		</div>
	);
};

export default VideoThumbnail;
