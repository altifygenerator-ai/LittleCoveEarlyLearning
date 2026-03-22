"use client";

import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function ModernDaycare() {
  return (
    <div className={`${poppins.className} bg-[#F5EFE7] text-[#5C4033]`}>

      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Little Cove Early Learning"
            className="h-12 w-auto"
          />
        </div>

        <a
          href="https://www.facebook.com/messages/t/LittleCoveEarlyLearning"
          target="_blank"
          className="bg-[#C98C6B] text-white px-4 py-2 rounded-full text-sm shadow hover:opacity-90"
        >
          Enroll
        </a>
      </header>

      <section className="text-center py-20 px-4">
        <h1 className={`${pacifico.className} text-5xl md:text-6xl text-[#5C4033]`}>
          Little Cove
        </h1>

        <p className="tracking-[0.2em] text-sm mt-2 text-[#8C6F5A]">
          EARLY LEARNING
        </p>

        <p className="mt-6 max-w-xl mx-auto text-[#6B4F3A]">
          A cozy, faith-based childcare experience designed to feel safe, calm,
          and intentional for your little ones.
        </p>

        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <a
            href="https://www.facebook.com/messages/t/LittleCoveEarlyLearning"
            target="_blank"
            className="bg-[#C98C6B] text-white px-6 py-3 rounded-full shadow hover:opacity-90"
          >
            Enroll My Child
          </a>

          <a
            href="#programs"
            className="border border-[#C98C6B] px-6 py-3 rounded-full text-[#5C4033]"
          >
            View Programs
          </a>
        </div>

        <p className="mt-4 text-sm text-[#A38B7A]">
          Now accepting early interest + waitlist
        </p>
      </section>

      <section className="max-w-4xl mx-auto p-8 text-center">
        <h2 className="text-2xl mb-4">
          A Place Families Can Feel At Peace
        </h2>

        <p className="text-[#6B4F3A] leading-relaxed">
          Our goal is simple. To create a space where children can learn, play,
          and grow in a nurturing, home-like environment… while parents feel
          confident and at peace leaving them each day.
        </p>
      </section>

      <section id="programs" className="p-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6">
          {["Infants 🍼", "Toddlers 🧸", "Pre-K 🎨"].map((program, i) => (
            <div
              key={i}
              className="bg-white border border-[#E5D3C5] rounded-2xl p-6 shadow-sm text-center"
            >
              <h3 className="text-lg font-semibold">
                {program}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-6 md:p-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          <div>
            <img
              src="/images/daycare-interior.jpg"
              alt="Inside Little Cove Early Learning"
              className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-md"
            />
          </div>}
          <div className="grid gap-4">
            {[
              "Boutique-style care",
              "Coffee bar for parents at drop-off",
              "Calm, structured environment",
              "Faith-centered foundation",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F5EFE7] p-5 rounded-xl shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="text-center p-12 bg-[#F5EFE7]">
        <h2 className="text-2xl mb-4">
          Join Our Waitlist
        </h2>

        <p className="max-w-md mx-auto text-[#6B4F3A]">
          Spots will be limited to ensure quality care. Reach out today to reserve your place.
        </p>

        <a
          href="https://www.facebook.com/messages/t/LittleCoveEarlyLearning"
          target="_blank"
          className="inline-block mt-6 bg-[#C98C6B] text-white px-6 py-3 rounded-full shadow"
        >
          Enroll My Child
        </a>
      </section>

    </div>
  );
}
      </section>

    </div>
  );
}
