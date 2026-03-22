type Data = {
  businessName: string;
  tagline: string;
  phone: string;
  services: string[];
  reviews: { name: string; text: string; rating: number }[];
};
import type { BusinessData } from "@/types/data";

export default function Modern({ data }: { data: BusinessData }) {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-light">{data.businessName}</h1>
        <p className="text-gray-500">{data.tagline}</p>

        <a
          href={`tel:${data.phone}`}
          className="mt-6 inline-block bg-black text-white px-6 py-3 rounded-full"
        >
          Call Now
        </a>
      </section>

      {/* SERVICES */}
      <section className="max-w-4xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        {data.services.map((service, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            {service}
          </div>
        ))}
      </section>

      {/* REVIEWS */}
      <section className="max-w-3xl mx-auto p-6">
        <h2 className="text-xl mb-4 text-center">Reviews</h2>
        {data.reviews.map((review, i) => (
          <div key={i} className="bg-white p-4 mb-4 rounded-xl shadow">
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
          href={`tel:${data.phone}`}
          className="bg-black text-white px-8 py-4 rounded-full"
        >
          Call Now
        </a>
      </section>

    </div>
  );
}