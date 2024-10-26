import WipeInRightAnimation from "../components/Animations/WipeInRightAnimation";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import Navbarpage from "../components/Navbar/Navbarpage";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <WipeInRightAnimation duration="2.5s">
        <Navbarpage />
        <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 gap-y-5">
          <h4 className="text-xl text-primary">Showcase of my best works</h4>
          <h2 className="text-5xl font-semibold">My Portfolio</h2>
          <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
        </div>
        <ImageGallery />
        <div className="flex justify-end fixed top-4 right-4"></div>
      </WipeInRightAnimation>
    </div>
  );
}
