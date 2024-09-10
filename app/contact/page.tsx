import Link from "next/link";
import ContactBanner from "../components/contactPage/ContactBanner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactBanner />
      <div className="pt-[42px] max-w-[300px] mx-auto md:max-w-[600px]">
        <h1 className="text-xl md:text-2xl font-semibold">
          ADDRESS AND GENERAL ENQUIRIES
        </h1>
        <p className="text-base mt-4 text-[#4b4b4b]">
          Palakkad - Kozhikode Hwy, Kalladikode, Karmiba South, Kerala 678596
        </p>
        <p className="text-base text-[#4b4b4b]">+91 9447623638</p>
        <div className="mt-4">
          <Link
            href={
              "https://www.google.com/maps/place/10°53'50.7%22N+76°32'11.0%22E/@10.8974187,76.5338079,17z/data=!3m1!4b1!4m4!3m3!8m2!3d10.8974187!4d76.5363828?hl=en&entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D"
            }
          >
            <button className="btn btn-outline rounded-full text-white bg-[#636aa7] hover:bg-[#45496A]">
              Google map
              <span>
                <Image
                  src={"icons/right-arrow.svg"}
                  width={15}
                  height={15}
                  alt="right arrow"
                ></Image>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
