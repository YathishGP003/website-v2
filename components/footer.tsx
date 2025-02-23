import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import Image from "next/image";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <footer className="flex justify-center w-full flex-col items-center ">
      <div className="fixed bottom-0 w-full z-50">
        <svg
          className="hidden md:block absolute bottom-0 right-0 rotate-180 z-50 md:absolute "
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-black fill-blackout"
            d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
          />
        </svg>

        <svg
          className="hidden md:block absolute left-0 bottom-0 -scale-x-100 rotate-180 z-50"
          width="53"
          height="52"
          viewBox="0 0 53 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="dark:fill-black fill-blackout"
            d="M0 -5.35442e-05H52.1C52.1 -5.35442e-05 24.8947 -0.434101 12.4473 12.7519C2.67029e-05 25.938 0 51.8759 0 51.8759V-5.35442e-05Z"
          />
        </svg>
      </div>
      <div className="bg-blackout p-20 pb-10 rounded-2xl mb-4 md:mb-20 text-whiteout flex flex-col gap-20 md:gap-0 items-center md:items-start md:grid md:grid-cols-4">
        <div className="w-[200px] flex flex-col items-center text-center md:items-start md:text-start">
          <h2 className="text-lg font-semibold">Find me on</h2>
          <ul className="font-light gap-1 flex flex-col mt-2">
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com/YathishGP003"
              >
                x.com
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/yathishgp003"
              >
                LinkedIn
              </Link>
            </li>

            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/YathishGP003"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link
                className="transition-opacity opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://discord.com/users/yathishgp003"
              >
                Discord
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-[200px] flex flex-col text-center md:items-start md:text-start">
          <h2 className="text-lg font-semibold">Some of my work</h2>
          <ul className="font-light gap-1 flex flex-col items-center md:items-start mt-2">
            <li>
              <Link
                className="transition-opacity flex items-center gap-2 opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/YathishGP003/Opal"
              >
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <Image
                    alt="adlerlagune"
                    className=""
                    src="/logos/adlerlagune.png"
                    width={19}
                    height={19}
                  ></Image>
                </div>
                Opal
              </Link>
            </li>

            <li>
              <Link
                className="transition-opacity flex items-center gap-2 opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/YathishGP003/The-Daily-Crimes"
              >
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <Image
                    alt="The Daily Crimes"
                    src="/logos/jotlog.png"
                    width={16}
                    height={16}
                  ></Image>
                </div>
                The Daily Crimes
              </Link>
            </li>

            <li>
              <Link
                className="transition-opacity flex items-center gap-2 opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/YathishGP003/PingPong"
              >
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <Image
                    alt="Ping Pong"
                    className=""
                    src="/logos/poca.gif"
                    width={18}
                    height={18}
                  ></Image>
                </div>
                Ping Pong
              </Link>
            </li>

            <li>
              <Link
                className="transition-opacity flex items-center gap-2 opacity-75 hover:opacity-100"
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/YathishGP003/Chess-Engine"
              >
                <Image
                  alt="Chess Engine"
                  src="/logos/ampass.png"
                  width={20}
                  height={20}
                ></Image>
                Chess Engine
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex justify-end text-center md:items-start md:text-start">
          <div className="flex flex-col">
            <h2 className="text-lg font-semibold">Contact</h2>
            <div className=" font-light mt-2">
              <Link
                className="opacity-50 transition-opacity hover:opacity-100"
                href="mailto:yathishgp1@gmail.com"
              >
                yathishgp1@gmail.com
              </Link>
              <p>
                <Link
                  className="opacity-50 transition-opacity hover:opacity-100"
                  href="tel:+919844914810"
                >
                  +919844914810
                </Link>
              </p>
              <Link
                rel="noopener noreferrer"
                className="opacity-50 transition-opacity hover:opacity-100"
                target="_blank"
                href="https://www.google.com/maps/dir//Bengaluru,+Karnataka/@13.0825994,77.5418875,10.33z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!2m2!1d77.5945627!2d12.9715987?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"
              >
                <p className="mt-2">Bengaluru</p>
                <p>Karnataka, India</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="col-span-4 md:mt-20 text-center md:items-start md:text-start md:-order-none order-first">
          <h2 className="font-semibold mb-2">Theme</h2>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="col-span-4 md:mt-10 text-sm text-center md:text-start">
          <div className="text-whiteout/50">
            <p>
              Built with some of tools &mdash;{" "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://nextjs.org"
                target="_blank"
              >
                next.js
              </Link>
              {", "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://tailwindcss.com"
                target="_blank"
              >
                tailwind
              </Link>
              {", "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://framer.com/motion"
                target="_blank"
              >
                framer motion
              </Link>
              {", "}and{" "}
              <Link
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
                href="https://rive.app"
                target="_blank"
              >
                rive
              </Link>
            </p>
          </div>
          <div className="flex justify-between flex-wrap items-baseline text-center md:text-start">
            <p className="text-whiteout/50 md:w-auto w-full">
              If you have questions or inquiries,{" "}
              <Link
                href="mailto:yathishgp1@gmail.com"
                className="underline decoration-2 text-whiteout/75 hover:text-whiteout/100"
              >
                reach out
              </Link>
            </p>
            <p className="text-xs opacity-50 text-center w-full mt-10 md:mt-0 md:w-auto">
              Last Update: Jan 2024
            </p>
          </div>
        </div> 
      </div>
    </footer>
  );
};

export default Footer;
