import { Carousel } from "@components";
import { imgItem } from "@constants";

export default function App() {
	return (
		<div className="w-full items-center justify-center flex h-screen bg-gray-400">
			<Carousel slides={imgItem} />
		</div>
	);
}
