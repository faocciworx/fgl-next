import WipeInRightAnimation from "../components/Animations/WipeInRightAnimation";
import CloseBtn from "../components/CloseBtn";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <WipeInRightAnimation duration="2.5s">
        <div className="flex justify-end fixed top-4 right-4">
          <CloseBtn />
        </div>
        <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
          <h4 className="text-xl text-primary">I&apos;m available for hire</h4>
          <h2 className="text-5xl font-semibold">Contact Me</h2>
          <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
        </div>
        <ContactForm />
      </WipeInRightAnimation>
    </div>
  );
}
