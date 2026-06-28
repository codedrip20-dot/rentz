import Image from "next/image";
import Link from "next/link";

import heroBg2 from "@/assets/herobgII.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen  overflow-hidden">

      {/* Background Image */}

      <Image
        src={heroBg2}
        alt="Luxury modern property"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30" />

      {/* Content */}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 lg:px-8">

        <div className="max-w-3xl">

          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/15 px-5 py-2 backdrop-blur-md">

            <span className="text-sm font-medium text-blue-200">
              Trusted by Property Owners Across India
            </span>

          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">

            Find Your

            <br />

            <span className="text-blue-500">
              Perfect
            </span>{" "}

            Property

            <br />

            Without

            <span className="text-blue-500">
              {" "}The Hassle.
            </span>

          </h1>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

            Rent, buy or sell verified properties with complete confidence.

            Rentz connects property owners, buyers and tenants through one
            premium platform built for speed, trust and simplicity.

          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/register"
              className="
              rounded-2xl
              bg-blue-600
              px-8
              py-4
              font-semibold
              text-white
              shadow-xl
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-700
            "
            >
              Get Started
            </Link>

            <Link
              href="/buy"
              className="
              rounded-2xl
              border
              border-white/20
              bg-white/10
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              duration-300
              hover:bg-white/20
            "
            >
              Browse Properties
            </Link>

          </div>

          {/* Trust Indicators */}

          <div className="mt-16 flex flex-wrap gap-10">

            <div>

              <h3 className="text-3xl font-bold text-white">
                12K+
              </h3>

              <p className="mt-1 text-slate-300">
                Verified Listings
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                6K+
              </h3>

              <p className="mt-1 text-slate-300">
                Happy Tenants
              </p>

            </div>

            <div>

              <h3 className="text-3xl font-bold text-white">
                98%
              </h3>

              <p className="mt-1 text-slate-300">
                Customer Satisfaction
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-slate-50 to-transparent" />

    </section>
  );
};

export default Hero;