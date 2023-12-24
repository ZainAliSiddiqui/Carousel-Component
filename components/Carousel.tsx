"use client";
import Image from "next/image";
import { useState } from "react";
import { TcarouselProps } from "@types";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

export default function Carousel({ slides }: TcarouselProps) {
	const [curr, setCurr] = useState(0);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

	return (
		<div className="relative w-[50%] overflow-hidden">
			<div
				className="flex transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}%)` }}>
				{slides.map((slide) => (
					<Image
						key={slide.id}
						src={slide.src}
						alt="img"
						className="w-full h-full object-cover"
					/>
				))}
			</div>
			<div className="absolute inset-0 flex items-center justify-between p-[10rem]">
				<button
					onClick={prev}
					className="p-[10rem] rounded-[50%] shadow-lg bg-white/80 text-gray-800 hover:bg-white group">
					<FaChevronLeft
						size={20}
						className="group-hover:translate-x-[-2rem] ease-linear duration-200 group-hover:scale-110"
					/>
				</button>
				<button
					onClick={next}
					className="p-[10rem] rounded-[50%] shadow-lg bg-white/80 text-gray-800 hover:bg-white group">
					<FaChevronRight
						size={20}
						className="group-hover:translate-x-[2rem] ease-linear duration-200 group-hover:scale-110"
					/>
				</button>
			</div>

			<div className="absolute bottom-[16rem] right-0 left-0">
				<div className="flex items-center justify-center gap-[8rem]">
					{slides.map((_, i) => (
						<div
							key={i}
							className={`
            transition-all w-[5rem] h-[5rem] bg-white rounded-full
            ${curr === i ? "p-[5rem]" : "bg-opacity-50"}
            `}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
