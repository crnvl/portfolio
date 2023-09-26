import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-5xl font-bold">
                <p className="hover:text-primary duration-300">Founder,</p>
                <p className="hover:text-secondary duration-300">Developer,</p>
                <p className="hover:text-accent duration-300">Creative</p>
              </h1>
              <p className="py-6">
                Co-Founder of{" "}
                <Link
                  href="https://namespace.media"
                  className="text text-secondary"
                >
                  namespace.media
                </Link>
                , Rust & TypeScript enthusiast, and a lover of all things tech.
                I build high-performance server-side applications and successful
                products with over <a className="text text-accent">8,000,000</a>{" "}
                users.
              </p>
              <div className="space-x-4">
                <Link className="btn btn-primary" href="/portfolio">
                  <kbd className="kbd">1</kbd> Portfolio
                </Link>
                <Link className="btn btn-secondary" href="/about">
                  <kbd className="kbd">2</kbd> About me
                </Link>
              </div>
              <p className="text-xs py-2">
                View shortcuts with <kbd className="kbd">Ctrl</kbd> +{" "}
                <kbd className="kbd">Q</kbd>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
