import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "~/portfolio",
  description:
    "Co-Founder of namespace.media, Rust & TypeScript enthusiast, and a lover of all things tech. I build high-performance server-side applications and successful products with over 8,000,000 users.",
};

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main>
        <div
          id="roles"
          className="flex p-4 gap-2 flex-col items-center md:justify-center md:flex-row"
        >
          <div className="badge badge-primary">Co-Founder</div>
          <div className="badge badge-secondary">Project Manager</div>
          <div className="badge badge-accent">Back End Developer</div>
          <div className="badge badge-ghost">ML Engineer</div>
        </div>
        <hr className="w-1/2 mx-auto py-4" />
        <div id="intro" className="flex flex-col items-center px-8">
          <h1 className="text-4xl font-bold">Portfolio</h1>
          <p className="text-center py-4 max-w-md">
            I am a 20 year old developer from Germany. I have been programming
            for nearly 10 years now and have been working on a lot of projects.
            I am currently working on a few projects. Feel free to check them
            out below! 🌿
          </p>
        </div>
        <div className="py-8" />
        <div
          id="projects"
          className="flex flex-col md:flex-row md:justify-center items-center px-8 gap-8"
        >
          <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://cdn.discordapp.com/attachments/689506185359130648/835977221369364520/logo.png?ex=6513e935&is=651297b5&hm=e1f52da20042f0e284f607bbc0f89970bd16f2c82cc7c6aa7e594f53dd8baf60&"
                alt="Shoes"
                width={1920}
                height={1920}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                namespace.media
                <div className="badge badge-secondary invisible md:visible">Co-Founder</div>
              </h2>
              <p>Independent development studio founded in 2019.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Development Studio</div>
                <div className="badge badge-outline">Publisher</div>
              </div>

              <div className="card-actions justify-end">
                <div className="badge badge-primary">TypeScript</div>
                <div className="badge badge-accent">C#</div>
              </div>
            </div>
          </div>
          <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://cdn.namespace.media/s/3Jf6D8Di5TwaMS3/download/LOGO_2.png"
                alt="Shoes"
                width={1920}
                height={1920}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                XP
                <div className="badge badge-primary invisible md:visible">+8 million users</div>
              </h2>
              <p>
                Fully configurable level-system for Discord.
                <br />
                XP currently serves over 23,000 communities.
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Co-Founded</div>
                <div className="badge badge-outline">Back End</div>
                <div className="badge badge-outline">Discord API</div>
              </div>

              <div className="card-actions justify-end">
                <div className="badge badge-primary">TypeScript</div>
                <div className="badge badge-secondary">Rust</div>
              </div>
            </div>
          </div>
          <div className="card w-72 md:w-96 bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://qwq.sh/vqs2to"
                alt="Shoes"
                width={1920}
                height={1920}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                sound.wave
                <div className="badge badge-accent invisible md:visible">Coming Soon</div>
              </h2>
              <p>Modern music streaming platform coming in 2024.</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Co-Founded</div>
                <div className="badge badge-outline">Back End</div>
              </div>

              <div className="card-actions justify-end">
                <div className="badge badge-secondary">Rust</div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="skills"
          className="flex flex-col items-center px-8 py-32 space-y-4"
        >
          <h1 className="text-4xl font-bold">Skills</h1>
          <div className="max-w-md flex items-end flex-col">
            <h2 className="text-2xl font-bold">Languages</h2>
            <div>
              Java{" "}
              <progress
                className="progress progress-info w-56"
                value="97"
                max="100"
              ></progress>
            </div>
            <div>
              TypeScript{" "}
              <progress
                className="progress progress-primary w-56"
                value="95"
                max="100"
              ></progress>
            </div>
            <div>
              Rust{" "}
              <progress
                className="progress progress-secondary w-56"
                value="76"
                max="100"
              ></progress>
            </div>
            <div>
              Python{" "}
              <progress
                className="progress progress-success w-56"
                value="50"
                max="100"
              ></progress>
            </div>
            <div>
              C#{" "}
              <progress
                className="progress progress-accent w-56"
                value="35"
                max="100"
              ></progress>
            </div>
            <div>
              PHP{" "}
              <progress
                className="progress progress-error w-56"
                value="15"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="max-w-md flex items-end flex-col">
            <h2 className="text-2xl font-bold">Frameworks</h2>
            <div>
              express.js{" "}
              <progress
                className="progress progress-warning w-56"
                value="92"
                max="100"
              ></progress>
            </div>
            <div>
              Next.js{" "}
              <progress
                className="progress progress-info w-56"
                value="85"
                max="100"
              ></progress>
            </div>
            <div>
              Actix{" "}
              <progress
                className="progress w-56"
                value="81"
                max="100"
              ></progress>
            </div>
            <div>
              Vue.js{" "}
              <progress
                className="progress progress-secondary w-56"
                value="65"
                max="100"
              ></progress>
            </div>
            <div>
              Solid.js{" "}
              <progress
                className="progress progress-success w-56"
                value="45"
                max="100"
              ></progress>
            </div>
          </div>
          <div className="max-w-md flex items-end flex-col">
            <h2 className="text-2xl font-bold">Databases</h2>
            <div>
              MongoDB{" "}
              <progress
                className="progress progress-info w-56"
                value="92"
                max="100"
              ></progress>
            </div>
            <div>
              SQLite{" "}
              <progress
                className="progress progress-primary w-56"
                value="90"
                max="100"
              ></progress>
            </div>
            <div>
              Redis{" "}
              <progress
                className="progress progress-accent w-56"
                value="56"
                max="100"
              ></progress>
            </div>
            <div>
              PostgresQL{" "}
              <progress
                className="progress progress-secondary w-56"
                value="49"
                max="100"
              ></progress>
            </div>
            <div>
              rethinkDB{" "}
              <progress
                className="progress w-56"
                value="35"
                max="100"
              ></progress>
            </div>
          </div>
        </div>
        <div
          id="contact"
          className="flex flex-col items-center px-8 py-8 space-y-4"
        >
          <hr className="w-1/2 mx-auto py-4" />
          <h1 className="text-4xl font-bold">Sounds good?</h1>
          <p className="text-center max-w-md">
            I am currently looking for new opportunities to work with other
            developers and companies. If you are interested in working with me,
            feel free to contact me.
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
        <div className="w-1/2 mx-auto py-4" />
      </main>
      <Footer />
    </>
  );
}
