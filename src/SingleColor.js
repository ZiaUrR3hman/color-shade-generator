import React from 'react';

const SingleColor = ({ hex, changeSelectColor }) => {
	return (
		<li className="flex-1  inline-block h-28" style={{ minWidth: '4%' }}>
			<div
				onClick={() => {
					changeSelectColor(hex, true);
				}}
				className="hover:scale-110 md:hover:scale-125 hover:transform w-full h-full cursor-pointer transition duration-200 ease-in"
				style={{ backgroundColor: hex }}
			></div>
		</li>
	);
};

export default SingleColor;
