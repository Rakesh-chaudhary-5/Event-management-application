import blueTick from "../assets/images/blue-tick.png";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";

import heroImg1 from "../assets/images/hero-img-1.avif";
import heroImg2 from "../assets/images/hero-img-2.webp";
import heroImg3 from "../assets/images/hero-img-3.avif";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full flex justify-center">
      {/* hero section */}
      <section className="mx-w-[1200px] mt-6 px-6">
        {/* welcome message */}
        <div className="flex items-center flex-col gap-2">
          <h1 className="text-4xl text-center md:text-6xl font-semibold">
            Connect Communities
          </h1>
          <p className="text-lg text-center text-[#757575]">
            Bridging gaps between faiths with tech and a dash of fun!
          </p>
        </div>

        {/* main div */}
        <div className="mt-20 flex flex-col md:flex-row gap-8">
          {/* left content */}
          <div className=" flex flex-col items-center">
            <div className="w-auto md:w-full pb-2">
              <img src={blueTick} alt="blue-tick-img" />
            </div>
            <div className="flex items-center gap-2">
              <p className="text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold">
                Unite, Innovate,
              </p>
              <img src={img1} alt="img1" />
            </div>

            <div className="flex items-center gap-2 py-3">
              <img src={img2} alt="img2" />
              <p className="text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold">
                Connect, Inspires
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="text-2xl sm:text-5xl md:text-3xl lg:text-5xl font-semibold">
                Together
              </p>
              <img src={img3} className="w-40 sm:w-auto" alt="img2" />
            </div>

            <p className="text-center py-6 w-auto md:w-80 lg:w-96">
              Join us to be part of a community where spirituality meets
              innovation. Together, we'll build a world that's more inclusive,
              engaging, and connected than ever before!
            </p>

            {/* redirect event page */}
            <div className="w-auto md:w-full">
              <Link to={"/upcoming-events"}>
                <button className="bg-[#1C64F2] font-semibold text-white w-40 py-2 text-lg hover:scale-110 transition rounded-xl">
                  View Events
                </button>
              </Link>
            </div>
          </div>

          {/* Right content */}
          <div className="flex gap-4 lg:gap-10 items-end h-[520px]">
            <div className="rounded-full hero-card mb-10 hover:mb-[50px]">
              <img src={heroImg1} alt="heroImg1" />
            </div>

            <div className="rounded-full hero-card mb-20 hover:mb-[90px]">
              <img src={heroImg2} alt="heroImg1" />
            </div>

            <div className="rounded-full hero-card mb-[120px] hover:mb-[130px] ">
              <img src={heroImg3} alt="heroImg1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
