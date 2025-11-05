const galleryImages = [
  { id: 1, src: '/gallery1.png', alt: 'Gallery image 1' },
  { id: 2, src: '/gallery2.png', alt: 'Gallery image 2' },
  { id: 3, src: '/gallery3.png', alt: 'Gallery image 3' },
  { id: 4, src: '/gallery4.png', alt: 'Gallery image 4' },
  { id: 5, src: '/gallery5.png', alt: 'Gallery image 5' },
  { id: 6, src: '/gallery6.png', alt: 'Gallery image 6' },
];

function Gallery() {
  return (
    <section className="bg-primaryBg mt-20 flex justify-center px-6 py-10">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-4xl">
            Gallery
          </h1>
          <p className="text-bodyTextColor mx-auto max-w-md">
            A collection of visuals and moments from my work, designs, and
            creative projects.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-medium text-white">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
