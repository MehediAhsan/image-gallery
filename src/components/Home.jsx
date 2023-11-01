import { useState } from "react";

const image = [
  {
    id: 1,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 2,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 3,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 4,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 5,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 6,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 7,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 8,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 9,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
  {
    id: 10,
    picture: "https://images.unsplash.com/photo-1682686580391-615b1f28e5ee?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8",
    isFeatured: false,
  },
];

const Home = () => {
  const [images, setImages] = useState(image);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageClick = (id) => {
    // Toggle selection for the clicked image
    setSelectedImages((prevSelectedImages) => {
      if (prevSelectedImages.includes(id)) {
        return prevSelectedImages.filter((imageId) => imageId !== id);
      } else {
        return [...prevSelectedImages, id];
      }
    });
  };

  const handleDeleteSelectedImages = () => {
    // Delete selected images
    setImages((prevImages) => prevImages.filter((image) => !selectedImages.includes(image.id)));
    // Clear selected images
    setSelectedImages([]);
  };

  return (
    <div className="shadow container mx-auto my-20">
      {/* header section */}
      <div className="flex justify-between p-6 border-b-2">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <p
          className="text-xl text-red-500 font-semibold cursor-pointer hover:border-b-2 hover:border-red-500"
          onClick={handleDeleteSelectedImages}
          disabled={selectedImages.length === 0}
        >
          Delate Files
        </p>
      </div>
      {/* Gallery */}
      <div className="container mx-auto p-8">
      <div className="grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden border rounded cursor-pointer ${
              selectedImages.includes(image.id) ? 'ring-4 ring-blue-500' : ''
            }`}
            style={{
                gridColumn: index === 0 ? 'span 2' : 'span 1', // First image spans 2 columns
                gridRow: index === 0 ? 'span 2' : 'span 1', // First image spans 2 rows
              }}
            onClick={() => handleImageClick(image.id)}
          >
            {selectedImages.includes(image.id) && (
              <div className="absolute top-2 left-2 text-green-500 text-2xl font-bold">&#10003;</div>
            )}
            <img className="w-full h-auto" src={image.picture} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;