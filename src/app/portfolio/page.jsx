import CloseButton from "../components/Closebutton";
import ImageGallery from "../components/ImageGallery/ImageGallery";

export default function Portfolio() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <div className="flex justify-end fixed top-4 right-4">
        <CloseButton />
      </div>
      <div className="flex flex-col justify-center items-center mt-10 lg:mt-20 gap-y-5">
        <h4 className="text-xl text-primary">Showcase of my best works</h4>
        <h2 className="text-5xl font-semibold">My Portfolio</h2>
        <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
      </div>
      <ImageGallery />
    </div>
  );
}
