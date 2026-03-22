import type { BusinessData } from "@/types/data";
import { Pacifico, Poppins } from "next/font/google";

const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["300", "400", "600"] });

export default function Modern({ data }: { data: BusinessData }) {
  return (
    <div className={`${poppins.className} bg-[#F5EFE7] text-[#5C4033]`}>

      {/* HERO */}
      <section className="text-center py-20 px-4">

        <img src="/images/logo.png" className="h-20 mx-auto mb-6" />

        <h1 className={`${pacifico.className} text-5xl md:text-6xl`}>
          {data.businessName}
        </h1>

        <p className="tracking-[0.2em] text-sm mt-2 text-[#8C6F5A]">
          EARLY LEARNING
        </p>

        <p className="mt-6 text-[#6B4F3A] max-w-xl mx-auto">
          {data.tagline}
        </p>

        <a
          href={`https://www.facebook.com/messages/t/${data.facebookUsername}`}
          target="_blank"
          className="mt-6 inline-block bg-[#C98C6B] text-white px-6 py-3 rounded-full shadow"
        >
          Enroll My Child
        </a>

        <p className="mt-4 text-sm text-[#A38B7A]">
          Now accepting early interest + waitlist
        </p>
      </section>

      {/* PROGRAMS (was services) */}
      <section className="max-w-4xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {data.services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#E5D3C5]"
          >
            {service}
          </div>
        ))}
      </section>

      {/* FEATURES + IMAGE */}
      <section className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-8 items-center">

        <img
          src="/images/daycare-interior.jpg"
          className="w-full h-[250px] md:h-[400px] object-cover rounded-2xl shadow-md"
        />

        <div className="grid gap-4">
          {data.features?.map((item, i) => (
            <div
              key={i}
              className="bg-[#F5EFE7] p-5 rounded-xl shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>

      </section>

      {/* REVIEWS */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl mb-4 text-center">What Parents Are Saying</h2>
        {data.reviews.map((review, i) => (
          <div key={i} className="bg-white p-4 mb-4 rounded-xl shadow-sm">
            <div>{"⭐".repeat(review.rating)}</div>
            <p>"{review.text}"</p>
            <small>- {review.name}</small>
          </div>
        ))}
      </section>

      {/* MAP */}
      <section className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="mb-4">Location</h2>
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`}
          className="w-full h-64 rounded"
        />
      </section>

      {/* HOURS */}
      <section className="text-center p-6">
        <h2 className="mb-2">Hours</h2>
        {data.hours.map((hour, i) => (
          <p key={i}>{hour}</p>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center py-12">
        <a
          href={`https://www.facebook.com/messages/t/${data.facebookUsername}`}
          target="_blank"
          className="bg-[#C98C6B] text-white px-8 py-4 rounded-full shadow"
        >
          Enroll My Child
        </a>
      </section>

    </div>
  );
}

    </div>
  );
}
