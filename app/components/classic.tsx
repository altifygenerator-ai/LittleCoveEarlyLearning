type Data = {
  businessName: string;
  tagline: string;
  phone: string;
  mapQuery: string;
  services: string[];
  hours: string[];
  reviews: { name: string; text: string; rating: number }[];
};
import type { BusinessData } from "@/types/data";

export default function Classic({ data }: { data: BusinessData }) {
  return (
    <div className="font-sans text-gray-800">

      {/* HERO */}
      <section className="bg-red-600 text-white text-center py-16">
        <h1 className="text-4xl font-bold">{data.businessName}</h1>
        <p>{data.tagline}</p>

        <a
          href={`tel:${data.phone}`}
          className="mt-4 inline-block bg-white text-red-600 px-6 py-3 rounded"
        >
          Call Now
        </a>
      </section>

      {/* SERVICES */}
      <section className="p-8 text-center">
        <h2 className="text-2xl mb-4">Services</h2>

        <div className="grid grid-cols-2 gap-4">
          {data.services.map((service, i) => (
            <div key={i} className="border p-4 rounded">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="bg-gray-100 p-8">
        <h2 className="text-xl text-center mb-4">Reviews</h2>

        {data.reviews.map((review, i) => (
          <div key={i} className="bg-white p-4 mb-3 rounded shadow">
            <div>{"⭐".repeat(review.rating)}</div>
            <p>"{review.text}"</p>
            <small>- {review.name}</small>
          </div>
        ))}
      </section>

      {/* MAP */}
      <section className="p-8 text-center">
        <h2>Location</h2>

        <iframe
          src={`https://www.google.com/maps?q=${encodeURIComponent(data.mapQuery)}&output=embed`}
          className="w-full h-64 mt-4"
        />
      </section>

      {/* HOURS */}
      <section className="text-center p-6">
        <h2>Hours</h2>

        {data.hours.map((hour, i) => (
          <p key={i}>{hour}</p>
        ))}
      </section>

    </div>
  );
}