export default function CharactersLoading() {
  return (
    <div className="p5r-page">
      <div className="p5r-skeleton" style={{ height: 56, width: '42%', marginBottom: 26 }} />
      <div className="p5r-skeleton" style={{ height: 48, marginBottom: 18 }} />
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="p5r-skeleton" style={{ aspectRatio: '4 / 5' }} />
        ))}
      </div>
    </div>
  );
}
