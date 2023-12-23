import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
	title: "Carousel Component",
	description: "Carousel Component",
};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
