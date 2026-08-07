export default function BuyLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#1a0000] to-black py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="h-12 w-56 bg-gray-800 animate-pulse rounded mx-auto mb-4" />
          <div className="h-6 w-40 bg-gray-800 animate-pulse rounded mx-auto" />
        </div>
        <div className="h-96 bg-gradient-to-br from-[#1a0000] to-black border-2 border-[#E60012]/30 rounded-lg animate-pulse" />
      </div>
    </div>
  );
}
