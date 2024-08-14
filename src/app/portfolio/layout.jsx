export const metadata = {
  title: "FGL - Portfolio",
  description:
    "Hello, I'm Faocci Ghaize O. Layug, a tech and design enthusiast ready to bring my expertise to your projects. With a knack for creative problem-solving in web and graphic design, and a solid foundation in computer technology, I'm excited to contribute to a team that values innovation and excellence. Let's make a positive impact in the digital sphere together!",
  keywords: "Faocci Layug, FGL, Faocci, Ghaize, BSIT",
  author: "Faocci Ghaize O. Layug",
  robots: "Faocci, Layug",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative">{children}</body>
    </html>
  );
}
