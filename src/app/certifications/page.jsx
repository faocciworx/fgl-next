import CertificationsGallery from "../components/Certifications/CertificationsGallery";
import CloseBtn from "../components/CloseBtn";

export default function Certifications() {
  return (
    <div className="relative flex flex-col font-general px-7">
      <div className="flex flex-col justify-center items-center my-10 lg:my-20 gap-y-5">
        <h4 className="text-xl text-primary">These are my credentials</h4>
        <h2 className="text-5xl text-center font-semibold">
          My Certifications
        </h2>
        <hr className="w-28 mx-auto my-4 border-t-2 border-primary" />
      </div>
      <CertificationsGallery />
      <div className="flex justify-end fixed top-4 right-4">
      <CloseBtn/>
      </div>
    </div>
  );
}
