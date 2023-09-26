import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "~/about",
  description: "Co-Founder of namespace.media, Rust & TypeScript enthusiast, and a lover of all things tech. I build high-performance server-side applications and successful products with over 8,000,000 users.",
};

export default function About() {
  return (
    <>
      <Navbar />
      <main className="w-screen flex justify-center">
        <div className="max-w-2xl">
          <div id="intro" className="flex flex-col items-start px-8">
            <h1 className="text-4xl font-bold">About me</h1>
            <p className="text-start py-4">
              Hello there! My name is <a className="text-secondary">Luna</a>. I
              embarked on my journey in the world of software development when I
              was just <a className="text-secondary">11 years old</a>.
              Self-taught and fueled by curiosity, I've been continuously honing
              my coding skills ever since. Currently, I'm on the path to earning
              my{" "}
              <a className="text-accent">
                high school diploma in mathematics and computer science
              </a>
              , a step that will serve as a strong foundation for my future
              endeavors.
              <br />
              <br />
              Soon, I'll be taking my passion for coding to the next level by
              studying{" "}
              <a className="text-info">computer science at university</a>. The
              prospect of diving deeper into this ever-evolving field truly
              excites me.
              <br />
              <br />
              In addition to my academic pursuits, I am also a{" "}
              <a className="text-warning">co-founder</a> of a software company
              called namespace.media. Through our efforts, we've built products
              that have touched the lives of{" "}
              <a className="text-accent">over 8 million users</a>. It's been a
              challenging but immensely rewarding experience that has broadened
              my perspective on the impact of technology.
              <br />
              <br />
              Beyond the realm of code and algorithms, I have a creative side
              that I love to explore in my free time. You can find me under the
              alias "sofv," publishing music that's close to my heart. I also
              dabble in digital art, using technology as a canvas to express my
              thoughts and emotions.
              <br />
              <br />
              I'm humbled by the opportunities that have come my way, and I'm
              excited to continue my journey, pushing boundaries, and making a
              meaningful impact in the world of technology.
            </p>
          </div>
          <div
            id="art-gallery"
            className="flex flex-col items-start px-8 space-y-8"
          >
            <h1 className="text-4xl font-bold">Art gallery</h1>
            <Image
              src="https://cdna.artstation.com/p/assets/images/images/064/241/410/large/sofv-echo-chamber.jpg?1687442824"
              alt="Echo Chamber"
              className="rounded-xl"
              width={1920}
              height={1920}
            />
            <Image
              src="https://cdnb.artstation.com/p/assets/images/images/064/332/991/large/sofv-virtual.jpg?1687697576"
              alt="Echo Chamber"
              className="rounded-xl"
              width={1920}
              height={1920}
            />
            <Image
              src="https://cdnb.artstation.com/p/assets/images/images/064/455/867/large/sofv-voidprism.jpg?1687963534"
              alt="Echo Chamber"
              className="rounded-xl"
              width={1920}
              height={1920}
            />
            <Image
              src="https://cdnb.artstation.com/p/assets/images/images/065/599/077/large/sofv-nlightment.jpg?1690790585"
              alt="Echo Chamber"
              className="rounded-xl"
              width={1920}
              height={1920}
            />
          </div>
          <hr className="my-8" />
          <div
            id="contact"
            className="flex flex-col items-center px-8 py-8 space-y-4"
          >
            <h1 className="text-4xl font-bold">Sounds good?</h1>
            <p className="text-center max-w-md">
              I am currently looking for new opportunities to work with other
              developers and companies. If you are interested in working with
              me, feel free to contact me.
            </p>
            <div className="grid grid-flow-col gap-4">
              <Link href="https://twitter.com/angelsflyinhell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                  className="fill-current"
                >
                  <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
                </svg>
              </Link>
              <Link href="https://github.com/angelsflyinhell">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                  className="fill-current"
                >
                  <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                </svg>
              </Link>
              <Link href="https://www.linkedin.com/in/luna-saak/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="35"
                  height="35"
                  viewBox="0 0 50 50"
                  className="fill-current"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
