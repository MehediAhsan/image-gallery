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
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (id) => {
    // Set the selected image
    setSelectedImage(id);
  };

  const handleDeleteSelectedImage = () => {
    if (selectedImage !== null) {
      // Delete the selected image
      const remainingImages= images.filter((image) => image.id !== selectedImage)
      setImages(remainingImages);
    
      // Clear selected image
      setSelectedImage(null);
    }
  };

  return (
    <div className="shadow container mx-auto my-20">
      {/* header section */}
      <div className="flex justify-between p-6 border-b-2">
        <h1 className="text-2xl font-bold">Gallery</h1>
        <p
          className="text-xl text-red-500 font-semibold cursor-pointer hover:border-b-2 hover:border-red-500"
          onClick={handleDeleteSelectedImage}
          disabled={selectedImage === null}
        >
          Delate Files
        </p>
      </div>
      {/* Gallery */}
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-5 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className={`relative overflow-hidden border rounded cursor-pointer ${
                selectedImage === image.id ? "ring-4 ring-blue-500" : ""
              }`}
              onClick={() => handleImageClick(image.id)}
            >
              {selectedImage === image.id && (
                <div className="absolute top-2 left-2 text-green-500 text-2xl font-bold">
                  &#10003;
                </div>
              )}
              <img
                className="w-full h-auto"
                src={image.picture}
                alt={`Image ${image.id}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
