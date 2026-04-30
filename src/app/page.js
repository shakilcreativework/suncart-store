import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <div>
      <div className="bg-linear-to-br from-amber-300 via-orange-400 to-sky-400 relative text-white py-20 text-center">
        {/* Overlay */}
        <span className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none z-0"></span>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Summer Sale 50% OFF ☀️</h1>
          <p className="mb-6">Hot Deals 🔥 on all essentials</p>
          <button className="bg-white text-orange-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
            Shop Now
          </button>

        </div>
      </div>
    </div>
  );
}
