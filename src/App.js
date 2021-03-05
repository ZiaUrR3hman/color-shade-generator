import React, { useEffect, useState } from 'react';
import SingleColor from './SingleColor';
import styled from 'styled-components';
import { AiFillBell, AiFillCopy } from 'react-icons/ai';
import { GiCheckMark } from 'react-icons/gi';
let tinycolor = require('tinycolor2');

const Range = styled.input(
	({ thumbColor }) => `
		&::-webkit-slider-thumb {
			-webkit-appearance: none;
			appearance: none;
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: ${thumbColor};
			cursor: pointer;
		}

		&::-moz-range-thumb {
			width: 30px;
			height: 30px;
			border-radius: 50%;
			background: gray;
			cursor: pointer;
		}

		&::-moz-range-thumb:hover,
		&::-webkit-slider-thumb:hover {
			background: ${thumbColor};
		}
	`
);

const Button = styled.button(
	({ gradient, dark, light }) => `
		background: ${dark};
		&:hover {
			background: ${light};
		}
		&:active {
			background: ${gradient};
		}

		
	`
);

const Title = styled.h2(
	({ hexColor, brightColor }) => `
	text-shadow:1px 1px 2px ${brightColor};
	@media screen and (min-width: 786px) {
		text-shadow:0 1px ${brightColor},
		-1px 0 ${hexColor},
		-1px 2px ${brightColor},
		-2px 1px ${hexColor},
		-2px 3px ${brightColor},
		-3px 2px ${hexColor},
		-3px 4px ${brightColor},
		-4px 3px ${hexColor},
		-4px 5px ${brightColor},
		-5px 4px ${hexColor},
		-5px 6px ${brightColor},
		-6px 5px ${hexColor},
		-6px 7px ${brightColor},
		-7px 6px ${hexColor},
		-7px 8px ${brightColor},
		-8px 7px ${hexColor};
	}
	`
);

function App() {
	const [shadeCount, setShadeCount] = useState(10);
	const [color, setColor] = useState(tinycolor.random().toHexString());
	const [hexColor, setHexColor] = useState(color);
	const [colors, setColors] = useState([]);
	const [selectedColor, setSelectedColor] = useState(hexColor);
	const [selectedHEX, setSelectedHEX] = useState('');
	const [selectedRGB, setselectedRGB] = useState('');
	const [selectedHSL, setSelectedHSL] = useState('');
	const [showNotification, setShowNotification] = useState(false);
	const [showHEXCopiedIcon, setShowHEXCopiedIcon] = useState(false);
	const [showRGBCopiedIcon, setShowRGBCopiedIcon] = useState(false);
	const [showHSLCopiedIcon, setShowHSLCopiedIcon] = useState(false);

	const randomColors = () => {
		setColor(tinycolor.random().toHexString());
	};

	const genShades = () => {
		let shades = [];
		if (color.length === 0) {
			//setColor('#fafafa');
			return;
		}
		let hsl = tinycolor(color).toHsl();
		for (let i = shadeCount - 1; i >= 0; i -= 1) {
			hsl.l = (i + 0.5) / shadeCount;
			shades.push({ hex: tinycolor(hsl).toHexString() });
		}
		setColors(() => {
			return shades;
		});
	};

	const genGrediant = () => {
		let perc = Math.floor(100 / colors.length);
		let gr = 'linear-gradient(to right,' + colors[0]?.hex ?? color;
		let svgGr = `<linearGradient id="MyGradient">`;
		for (let i = 1; i < colors.length; i++) {
			gr +=
				' ' +
				perc * i +
				'%, ' +
				colors[i].hex +
				' ' /* + perc * i + '% ' */;

			svgGr += `<stop offset="${perc * i}%" stop-color="${
				colors[i].hex
			}"></stop>`;
		}
		gr += ')';
		svgGr += `</linearGradient>`;
		return { bgGradient: gr, svgGradient: svgGr };
	};

	const changeSelectColor = (color, noScroll) => {
		setSelectedColor(color);
		setSelectedHEX(tinycolor(color).toHexString());
		setselectedRGB(tinycolor(color).toRgbString());
		setSelectedHSL(tinycolor(color).toHslString());
		if (noScroll) {
			const y =
				document.getElementById('colorValues').getBoundingClientRect()
					.top + window.scrollY;
			window.scroll({
				top: y,
				behavior: 'smooth',
			});
		}
	};

	const copyColor = (ctype) => {
		setShowNotification(true);
		if (ctype === 'RGB') {
			navigator.clipboard?.writeText(selectedRGB);
			setShowRGBCopiedIcon(true);
		}
		if (ctype === 'HEX') {
			navigator.clipboard?.writeText(selectedHEX);
			setShowHEXCopiedIcon(true);
		}
		if (ctype === 'HSL') {
			navigator.clipboard?.writeText(selectedHSL);
			setShowHSLCopiedIcon(true);
		}

		setShowNotification(true);
	};

	useEffect(() => {
		let notiTimer = setTimeout(() => {
			setShowNotification(false);
		}, 2000);
		return () => {
			clearTimeout(notiTimer);
		};
	}, [showNotification]);
	useEffect(() => {
		let notiTimer = setTimeout(() => {
			setShowRGBCopiedIcon(false);
		}, 2000);
		return () => {
			clearTimeout(notiTimer);
		};
	}, [showRGBCopiedIcon]);
	useEffect(() => {
		let notiTimer = setTimeout(() => {
			setShowHEXCopiedIcon(false);
		}, 2000);
		return () => {
			clearTimeout(notiTimer);
		};
	}, [showHEXCopiedIcon]);
	useEffect(() => {
		let notiTimer = setTimeout(() => {
			setShowHSLCopiedIcon(false);
		}, 2000);
		return () => {
			clearTimeout(notiTimer);
		};
	}, [showHSLCopiedIcon]);

	const [gradient, setGradient] = useState(genGrediant());
	//console.log(gradient);
	document.getElementsByTagName('body')[0].style.background =
		gradient.bgGradient;

	useEffect(() => {
		setHexColor(tinycolor(color).toHexString());

		genShades();
		// eslint-disable-next-line
	}, [shadeCount, color]);

	useEffect(() => {
		setGradient(() => {
			return genGrediant();
		});

		// eslint-disable-next-line
	}, [colors]);

	useEffect(() => {
		changeSelectColor(color, false);
		// eslint-disable-next-line
	}, [color]);

	return (
		<div
			className="relative overflow-hidden"
			style={{ minHeight: '220px' }}
		>
			<div className="absolute w-full h-80" style={{ zIndex: -1 }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
					preserveAspectRatio="none"
					className="h-96 w-full"
				>
					<defs
						dangerouslySetInnerHTML={{
							__html: gradient.svgGradient,
						}}
					></defs>
					<path
						fill="url(#MyGradient)"
						fillOpacity="10"
						d="M0,256L21.8,250.7C43.6,245,87,235,131,192C174.5,149,218,75,262,80C305.5,85,349,171,393,186.7C436.4,203,480,149,524,149.3C567.3,149,611,203,655,197.3C698.2,192,742,128,785,90.7C829.1,53,873,43,916,69.3C960,96,1004,160,1047,176C1090.9,192,1135,160,1178,138.7C1221.8,117,1265,107,1309,112C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
					></path>
				</svg>
			</div>
			<div className="container mx-auto">
				<div className="flex justify-center ">
					<Title
						className="font-bold text-2xl md:text-6xl lg:text-7xl text-gray-800  my-10 tracking-wider"
						style={{
							color: tinycolor(hexColor).darken(70).toString(),
						}}
						hexColor={tinycolor(hexColor).desaturate().toString()}
						brightColor={tinycolor(hexColor).brighten().toString()}
					>
						Color Shades Generator
					</Title>
				</div>
				<div className="bg-white border border-gray-200 m-2 px-6 relative">
					<div className="mt-5">
						<form
							className="flex flex-col"
							onSubmit={(e) => e.preventDefault()}
						>
							<div className="grid grid-cols-12">
								<div className="col-span-10 flex flex-col mr-5">
									<label
										htmlFor="color"
										className="font-bold text-lg py-2 text-gray-700 "
									>
										Enter Color
									</label>
									<div className="flex">
										<input
											type="color"
											value={hexColor}
											className="w-10 h-10 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"
											onChange={(e) =>
												setColor(e.target.value)
											}
										></input>
										<input
											type="text"
											className="px-2 ml-1 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"
											name="color"
											id="color"
											value={color}
											onChange={(e) =>
												setColor(e.target.value)
											}
										/>
									</div>
									<p className="mt-2 leading-10">
										Example:&nbsp;#808080 or gray or
										rgb(128, 128, 128)
									</p>
									<Button
										onClick={randomColors}
										type="button"
										className="py-2 text-white uppercase font-semibold tracking-wider mt-5 max-w-min px-5 border-gray-200 border rounded-sm focus:outline-none"
										style={{
											//backgroundColor: hexColor,
											color: tinycolor(hexColor).isDark()
												? 'white'
												: 'black',
										}}
										gradient={tinycolor(color)
											.darken()
											.toString()}
										dark={hexColor}
										light={tinycolor(color)
											.lighten()
											.toString()}
									>
										generate&nbsp;random
									</Button>
								</div>
								<div
									className="col-span-2  w-full   h-28 justify-self-end mt-4 border-gray-200 border"
									style={{ backgroundColor: hexColor }}
								></div>
							</div>
						</form>
						<div className="mt-5">
							<label
								htmlFor="colorShades"
								className="font-bold text-lg py-2 text-gray-700 "
							>
								Color Shades
							</label>
							<div className="flex">
								<Range
									type="range"
									id="colorShades"
									name="colorShades"
									min="2"
									max="25"
									className="hover:opacity-100  block self-center w-full h-4 rounded-md outline-none opacity-70 transition-opacity duration-300"
									style={{
										appearance: 'none',
										background: gradient.bgGradient,
									}}
									thumbColor={tinycolor(color)
										.darken()
										.toString()}
									onChange={(e) =>
										setShadeCount(e.target.value)
									}
									value={shadeCount}
								/>
								<span className="self-center text-xl font-bold px-3 py-2 bg-gray-100 border text-center rounded ml-3 w-14">
									{shadeCount}
								</span>
							</div>
						</div>
					</div>
					<div className="my-5 ">
						<ul className="flex flex-col md:flex-row  items-stretch">
							{colors.map((color, index) => {
								return (
									<SingleColor
										{...color}
										key={index}
										changeSelectColor={changeSelectColor}
									/>
								);
							})}
						</ul>
					</div>
					<div className="md:grid grid-cols-12 ">
						<div className="col-span-8 mt-5 md:mt-12 mr-5">
							<div
								className="flex rgb(63, 137, 133) relative"
								id="colorValues"
							>
								<h3 className="text-gray-700 font-bold text-lg">
									HEX
								</h3>
								<input
									value={selectedHEX}
									disabled
									type="text"
									className="text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"
								/>
								<div
									title="Copy"
									onClick={() => {
										copyColor('HEX');
									}}
									className="absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600"
								>
									{showHEXCopiedIcon ? (
										<GiCheckMark
											className="h-8 w-8"
											style={{ color: hexColor }}
										/>
									) : (
										<AiFillCopy className="h-8 w-8" />
									)}
								</div>
							</div>
							<div className="flex mt-5 relative">
								<h3 className="text-gray-700 font-bold text-lg">
									RGB
								</h3>
								<input
									value={selectedRGB}
									disabled
									type="text"
									className="text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"
								/>
								<div
									title="Copy"
									onClick={() => {
										copyColor('RGB');
									}}
									className="absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600"
								>
									{showRGBCopiedIcon ? (
										<GiCheckMark
											className="h-8 w-8"
											style={{ color: hexColor }}
										/>
									) : (
										<AiFillCopy className="h-8 w-8" />
									)}
								</div>
							</div>
							<div className="flex mt-5 relative">
								<h3 className="text-gray-700 font-bold text-lg">
									HSL
								</h3>
								<input
									value={selectedHSL}
									disabled
									type="text"
									className="text-gray-500 px-3 ml-2 w-full max-w-5xl rounded-sm h-10 text-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-800"
								/>
								<div
									title="Copy"
									onClick={() => {
										copyColor('HSL');
									}}
									className="absolute right-1 text-gray-500 top-1 cursor-pointer hover:text-gray-600"
								>
									{showHSLCopiedIcon ? (
										<GiCheckMark
											className="h-8 w-8"
											style={{ color: hexColor }}
										/>
									) : (
										<AiFillCopy className="h-8 w-8" />
									)}
								</div>
							</div>
						</div>
						<div
							className="col-span-4 w-full h-64 md:mt-0    mt-4 border-gray-200 border mb-16 overflow-hidden"
							style={{ backgroundColor: selectedColor }}
						></div>
					</div>
					<div className="flex inv justify-center   absolute z-20  h-20 inset-x-0 -bottom-2">
						<div
							className={`${
								showNotification
									? 'visible opacity-1'
									: 'opacity-0 invisible'
							} transition ease-in-out duration-500  px-6 py-2 border-gray-200 border rounded my-4   relative`}
							style={{
								backgroundColor: hexColor,
								color: tinycolor(hexColor).isDark()
									? 'white'
									: 'black',
							}}
						>
							<span className="text-xl inline-block mr-5 align-middle">
								<AiFillBell />
							</span>
							<span className="inline-block align-middle mr-8">
								<b className="capitalize ">color</b> copied!
							</span>
							<button
								onClick={() => {
									setShowNotification(false);
								}}
								className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-2 mr-6 outline-none focus:outline-none"
							>
								<span>×</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
