const galleryImages = [
  { id: 1, src: '/images/gallery/1.jpg', alt: 'Gallery image 1' },
  { id: 2, src: '/images/gallery/2.jpg', alt: 'Gallery image 2' },
  { id: 3, src: '/images/gallery/3.jpg', alt: 'Gallery image 3' },
  { id: 4, src: '/images/gallery/4.jpg', alt: 'Gallery image 4' },
  { id: 5, src: '/images/gallery/5.jpg', alt: 'Gallery image 5' },
  { id: 6, src: '/images/gallery/6.jpg', alt: 'Gallery image 6' },
];

function Gallery() {
  return (
    <section className="bg-primaryBg flex justify-center px-6">
      <div className="flex w-full max-w-[1600px] flex-col items-center justify-center space-y-10">
        {/* Header */}
        <div className="space-y-3 text-center">
          <h1 className="text-headingTextColor text-3xl font-semibold md:text-5xl">
            Gallery
          </h1>
          <p className="text-bodyTextColor mx-auto max-w-md">
            A collection of visuals and moments from my work, designs, and
            creative projects.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-[1.01]"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-xl font-semibold text-white">View</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
