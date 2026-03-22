type Data = {
  businessName: string;
  tagline: string;
  phone: string;
  services: string[];
};
import type { BusinessData } from "@/types/data";

export default function Bold({ data }: { data: BusinessData }) {
  return (
    <div className="bg-black text-white">

      {/* HERO */}
      <section className="text-center py-20 bg-gradient-to-r from-red-600 to-yellow-500">
        <h1 className="text-5xl font-bold">{data.businessName}</h1>
        <p className="mt-2">{data.tagline}</p>

        <div className="mt-6">
          <a
            href={`tel:${data.phone}`}
            className="bg-white text-black px-8 py-4 font-bold mr-4"
          >
            CALL NOW
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="grid md:grid-cols-3 gap-6 p-8">
        {data.services.map((service, i) => (
          <div key={i} className="bg-gray-800 p-6 text-center rounded">
            {service}
          </div>
        ))}
      </section>

      {/* REVIEWS */}
      <section className="p-8 bg-gray-900">
        <h2 className="text-center mb-6">Reviews</h2>
        {data.reviews.map((review, i) => (
          <div key={i} className="bg-black border border-gray-700 p-4 mb-4 rounded">
            <div>{"⭐".repeat(review.rating)}</div>
            <p>"{review.text}"</p>
            <small>- {review.name}</small>
          </div>
        ))}
      </section>

      {/* MAP */}
      <section className="p-8 text-center">
        <h2 className="mb-4">Find Us</h2>
        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`}
          className="w-full h-64"
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
      <section className="text-center py-12 bg-red-600">
        <a
          href={`tel:${data.phone}`}
          className="bg-white text-black px-8 py-4 font-bold"
        >
          CALL NOW
        </a>
      </section>

    </div>
  );
}