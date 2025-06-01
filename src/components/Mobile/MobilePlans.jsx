export default function MobilePlans() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Simple & Affordable Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Repeat for multiple plans */}
        <div className="border p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">Midco Lite</h3>
          <p className="text-3xl font-bold my-4">$20/mo</p>
          <ul className="text-sm space-y-2">
            <li>5GB High-Speed Data</li>
            <li>Unlimited Talk & Text</li>
            <li>No Contracts</li>
          </ul>
        </div>
        {/* Add 2 more cards for Midco Plus & Pro */}
      </div>
    </section>
  );
}
