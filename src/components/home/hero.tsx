"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/hooks/useUser";

import heroBg2 from "@/assets/herobgII.png";

const Hero = () => {
  const { userData } = useUser();

  const role = userData?.role;

  const isOwner = role === "owner";
  const isTenant = role === "tenant";

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden

        sm:min-h-screen
      "
    >
      {/* Background Image */}

      <Image
        src={heroBg2}
        alt="Luxury modern property"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950/95
          via-slate-950/75
          to-slate-900/40
        "
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[100svh]
          max-w-7xl
          items-center
          px-4
          py-24

          sm:px-6
          sm:py-28

          lg:min-h-screen
          lg:px-8
          lg:py-20
        "
      >
        <div
          className="
            w-full
            max-w-3xl
          "
        >
          {/* Badge */}

          <div
            className="
              inline-flex
              max-w-full
              items-center
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/15
              px-3.5
              py-1.5
              backdrop-blur-md

              sm:px-5
              sm:py-2
            "
          >
            <span
              className="
                text-[11px]
                font-medium
                leading-5
                text-blue-200

                sm:text-sm
              "
            >
              Trusted by Property Owners Across India
            </span>
          </div>

          {/* Heading */}

          <h1
            className="
              mt-5
              max-w-3xl
              text-4xl
              font-extrabold
              leading-[1.08]
              tracking-tight
              text-white

              sm:mt-7
              sm:text-5xl
              sm:leading-tight

              md:text-6xl

              lg:mt-8
              lg:text-7xl
            "
          >
            Find Your
            <br />
            <span className="text-blue-500">
              Perfect
            </span>{" "}
            Property
            <br />
            Without
            <span className="text-blue-500">
              {" "}
              The Hassle.
            </span>
          </h1>

          {/* Description */}

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-slate-300

              sm:mt-6
              sm:text-base
              sm:leading-7

              lg:mt-8
              lg:text-lg
              lg:leading-8
            "
          >
            Rent, buy or sell verified properties with complete
            confidence. Rentz connects property owners, buyers
            and tenants through one premium platform built for
            speed, trust and simplicity.
          </p>

          {/* CTA */}

          <div
            className="
              mt-7
              flex
              w-full
              flex-col
              gap-3

              sm:mt-9
              sm:flex-row
              sm:flex-wrap
              sm:gap-4

              lg:mt-12
              lg:gap-5
            "
          >
            <Link
              href={
                isOwner
                  ? "/owner/dashBoard"
                  : isTenant
                  ? "/tenant/dashboard"
                  : "/owner/ownerRegister"
              }
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-xl
                bg-blue-600
                px-6
                py-3
                text-center
                text-sm
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300

                active:scale-[0.98]

                sm:w-auto
                sm:rounded-2xl
                sm:px-7
                sm:py-4
                sm:text-base

                sm:hover:-translate-y-1
                sm:hover:bg-blue-700
              "
            >
              {isOwner
                ? "Owner Dashboard"
                : isTenant
                ? "My Tenant Profile"
                : "Register as an Owner"}
            </Link>

            <Link
              href="/marketplace"
              className="
                inline-flex
                min-h-12
                w-full
                items-center
                justify-center
                rounded-xl
                border
                border-white/20
                bg-white/10
                px-6
                py-3
                text-center
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300

                active:scale-[0.98]

                sm:w-auto
                sm:rounded-2xl
                sm:px-7
                sm:py-4
                sm:text-base

                sm:hover:bg-white/20
              "
            >
              Looking for rooms?
            </Link>
          </div>

          {/* Trust Indicators */}

          <div
            className="
              mt-10
              grid
              grid-cols-3
              gap-3

              sm:mt-14
              sm:flex
              sm:flex-wrap
              sm:gap-8

              lg:mt-16
              lg:gap-10
            "
          >
            <div className="min-w-0">
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-white

                  sm:text-3xl
                "
              >
                12K+
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  leading-4
                  text-slate-300

                  sm:text-sm
                  sm:leading-5
                "
              >
                Verified Listings
              </p>
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-white

                  sm:text-3xl
                "
              >
                6K+
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  leading-4
                  text-slate-300

                  sm:text-sm
                  sm:leading-5
                "
              >
                Happy Tenants
              </p>
            </div>

            <div className="min-w-0">
              <h3
                className="
                  text-2xl
                  font-bold
                  leading-tight
                  text-white

                  sm:text-3xl
                "
              >
                98%
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  leading-4
                  text-slate-300

                  sm:text-sm
                  sm:leading-5
                "
              >
                Customer Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-gradient-to-t
          from-slate-50
          to-transparent

          sm:h-32

          lg:h-40
        "
      />
    </section>
  );
};

export default Hero;