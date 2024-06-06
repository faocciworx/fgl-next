import CloseButton from "../components/Closebutton";
export default function Contact() {
    return (
      <div className="relative flex flex-col font-general px-7">
      <div className="flex justify-end fixed top-4 right-4">
        <CloseButton />
      </div>
      <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
        <h4 className="text-xl text-primary">I'm available for hire</h4>
        <h2 className="text-5xl font-semibold">Contact Me</h2>
        <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
      </div>
    </div>
    );
  }
  