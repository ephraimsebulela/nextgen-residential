export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">NextGen Residential Properties</h1>
      <p className="mt-4 text-gray-700 text-center max-w-xl">
        Welcome to Mbombela's rising star in student accommodation and short-term rentals. 
        We provide secure, modern, and affordable living solutions for students and visitors.
      </p>
      <div className="mt-6 flex gap-4">
        <a href="#" className="px-6 py-2 bg-red-600 text-white rounded-full shadow hover:bg-red-700 transition">Explore Listings</a>
        <a href="#" className="px-6 py-2 border border-red-600 text-red-600 rounded-full hover:bg-red-100 transition">Contact Us</a>
      </div>
    </div>
  );
}
