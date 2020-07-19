import React from 'react';
import './card.css';

const CardBackground = ({ images: { img, logo, desc, year, type } }) => {
	return (
		<div
			className="frame"
			style={{
				background: `linear-gradient(to bottom, rgba(0,0, 0, 0), black), url('${img}'), #1c1c1c`
			}}
		>
			<div className="frame-content">
				<div className="frame-text">
					<h1 style={{ color: "yellow" }}>Connect On DumbSound </h1>
					<p>Discovery, Stream, and share a constantly expanding mix of music from emerging and major artists around the world </p>
				</div>
			</div>
		</div>
	);
};

export default CardBackground;
