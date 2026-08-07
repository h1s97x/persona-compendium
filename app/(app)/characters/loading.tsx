export default function CharactersLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-p5r-dark to-black py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 w-64 bg-gray-800 animate-pulse rounded mx-auto mb-4" />
          <div className="h-6 w-48 bg-gray-800 animate-pulse rounded mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-96 bg-gradient-to-br from-p5r-dark to-black border-2 border-p5r-red/30 rounded-lg animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
