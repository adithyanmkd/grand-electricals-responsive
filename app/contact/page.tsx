import ContactBanner from "../components/contactPage/ContactBanner";

import GoogleMap from "../components/contactPage/GoogleMap";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen py-8">
      <ContactBanner />
      <div className="flex flex-col-reverse pt-[42px] max-w-[300px] mx-auto space-y-4 md:max-w-[950px] lg:flex-row lg:pt-0 lg:space-y-0  lg:space-x-6 lg:my-8">
        <div>
          <GoogleMap />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">
            ADDRESS AND GENERAL ENQUIRIES
          </h1>
          <p className="text-base mt-4 text-[#4b4b4b]">
            Palakkad - Kozhikode Hwy, Kalladikode, Karmiba South, Kerala 678596
          </p>
          <p className="text-base text-[#4b4b4b]">+91 9447623638</p>
        </div>
      </div>
    </div>
  );
}
