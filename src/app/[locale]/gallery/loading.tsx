export default function GalleryLoading() {
  return (
    <div className="p5r-page">
      <div className="p5r-skeleton" style={{ height: 56, width: '36%', marginBottom: 26 }} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="p5r-skeleton"
            style={{ aspectRatio: index < 4 ? '1060 / 707' : '1256 / 707' }}
          />
        ))}
      </div>
    </div>
  );
}
