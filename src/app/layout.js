import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "./components/ThemeToggle"; // Adjust the path if necessary

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FGOL",
  description:
    "Hello, I'm Faocci Ghaize O. Layug, a tech and design enthusiast ready to bring my expertise to your projects. With a knack for creative problem-solving in web and graphic design, and a solid foundation in computer technology, I'm excited to contribute to a team that values innovation and excellence. Let's make a positive impact in the digital sphere together!",
  keywords: "Faocci Layug, FGOL, Faocci, Ghaize, BSIT",
  author: "Faocci Ghaize O. Layug",
  robots: "Faocci, Layug",
  openGraph: {
    title: "FGOL - Tech and Design Enthusiast",
    description:
      "Hello, I'm Faocci Ghaize O. Layug, ready to bring my expertise in tech and design to your projects. Let's make a positive impact together!",
    images: [
      {
        url: "https://fgol.vercel.app/portfolio/Cover/Cover(10).jpg", // Replace with the actual file name if different
        width: 1200,
        height: 630,
        alt: "Faocci Ghaize O. Layug - Tech and Design Enthusiast",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} scroll-smooth dark:bg-[#f2ede6] bg-[#202020] m-0 w-full font-general`}
      >
        <div className="container mx-auto">
          <h1 className="dark:text-gray-800 text-white">{children}</h1>
        </div>
      </body>
    </html>
  );
}
