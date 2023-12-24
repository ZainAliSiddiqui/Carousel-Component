import { StaticImageData } from "next/image";

export type TcarouselProps = {
    slides: { id: number; src: StaticImageData; }[];
};