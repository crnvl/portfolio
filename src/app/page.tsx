import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";
import Link from "next/link";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "~/home",
  description:
    "Co-Founder of namespace.media, Rust & TypeScript enthusiast, and a lover of all things tech. I build high-performance server-side applications and successful products with over 8,000,000 users.",
};

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
                  Portfolio
                </Link>
                <Link className="btn btn-secondary" href="/about">
                  About me
                </Link>
              </div>
              <p className="text-xs py-2 invisible md:visible">
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
