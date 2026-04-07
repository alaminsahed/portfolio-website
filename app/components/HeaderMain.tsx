"use client";
import { IconProp, library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Parallax, Background } from "react-parallax";
import Fade from "react-reveal/Fade";
import Typewriter from "typewriter-effect";
import { contactLists } from "../../utils/data/headerContactList";
import Image from "next/image";

library.add(fas, fab);

const HeaderMain = () => {
  return (
    <div className="md:h-screen bg-black" id="header">
      <Parallax className="md:h-screen" blur={5} strength={500}>
        <Background className="custom-bg w-screen">
          <Image
            src="/images/background.webp"
            alt="fill murray"
            width={100}
            height={600}
            className="object-cover h-screen w-screen"
          />
        </Background>
        <div className="flex flex-col justify-center items-center mt-96">
          <Fade top>
            <div className="fadeInUp flex flex-col items-center text-white">
              <h5 className="text-3xl tracking-wide p-3">HELLO</h5>
              <h2 className="md:text-5xl tracking-wide p-3 font-bold">
                I am Md.Al-Amin Sahed
              </h2>
              <h3 className="md:text-2xl tracking-wide p-3">
                <Typewriter
                  options={{
                    strings: [
                      "Senior Software Engineer",
                      "React.js & Next.js Developer",
                      "TypeScript Developer",
                      "Javascript Developer",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
            </div>
          </Fade>
          <Fade left cascade>
            <div className="flex flex-row justify-center items-center">
              {contactLists.map((item, index) => (
                <Link
                  href={item.link}
                  className="text-xl bg-gray-500 text-white border rounded-full transition duration-150 ease-linear m-1 p-1 hover:bg-white hover:text-black flex items-center"
                  aria-label={item.name}
                  key={index}
                >
                  <FontAwesomeIcon
                    icon={item.icon as IconProp}
                    className="text-xl text-center bg-black text-white hover:text-black hover:bg-white p-1 rounded-full"
                  />
                </Link>
              ))}
            </div>
          </Fade>
        </div>
      </Parallax>
    </div>
  );
};

export default HeaderMain;
