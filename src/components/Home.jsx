import { useState } from "react";
import img1 from '../assets/image-1.webp';
import img2 from '../assets/image-2.webp';
import img3 from '../assets/image-3.webp';
import img4 from '../assets/image-4.webp';
import img5 from '../assets/image-5.webp';
import img6 from '../assets/image-6.webp';
import img7 from '../assets/image-7.webp';
import img8 from '../assets/image-8.webp';
import img9 from '../assets/image-9.webp';
import img10 from '../assets/image-10.jpeg';
import img11 from '../assets/image-11.jpeg';

const image = [
  {
    id: 1,
    picture: img1,
    isFeatured: false,
  },
  {
    id: 2,
    picture: img2,
    isFeatured: false,
  },
  {
    id: 3,
    picture: img3,
    isFeatured: false,
  },
  {
    id: 4,
    picture: img4,
    isFeatured: false,
  },
  {
    id: 5,
    picture: img5,
    isFeatured: false,
  },
  {
    id: 6,
    picture: img6,
    isFeatured: false,
  },
  {
    id: 7,
    picture: img7,
    isFeatured: false,
  },
  {
    id: 8,
    picture: img8,
    isFeatured: false,
  },
  {
    id: 9,
    picture: img9,
    isFeatured: false,
  },
  {
    id: 10,
    picture: img10,
    isFeatured: false,
  },
  {
    id: 11,
    picture: img11,
    isFeatured: false,
  }
];

const Home = () => {
  const [images, setImages] = useState(image);
  const [selectedImages, setSelectedImages] = useState([]);
  const [hoveredImage, setHoveredImage] = useState(null);

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

  const handleImageHover = (id) => {
    // Set the hovered image ID to trigger hover effect
    setHoveredImage(id);
  };

  const handleDeleteSelectedImages = (selectedImages) => {
    // Delete selected images
    setImages((prevImages) => prevImages.filter((image) => !selectedImages.includes(image.id)));
    // Clear selected images
    setSelectedImages([]);
  };

  const handleNewImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const newImage = {
          id: images.length + 1, // Generate a new unique ID for the image
          picture: reader.result, // Set the picture data as the base64 representation of the uploaded image
          isFeatured: false,
        };
        setImages((prevImages) => [...prevImages, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="shadow-md shadow-gray-400 container mx-auto my-14 px-4 md:px-0">
      {/* header section */}
      <div className="flex justify-between p-6 border-b-2">
        <h1 className="text-2xl font-bold">
          {
            selectedImages.length === 0 ? 'Gallery': <>
            <input type="checkbox" checked className="checked:bg-blue-500 w-5 h-5 mr-2" /> {selectedImages.length} File Selected
            </>
          }
        </h1>
        {
          selectedImages.length === 0 ? '': <p
          className="text-xl text-red-500 font-semibold cursor-pointer hover:border-b-2 hover:border-red-500"
          onClick={() => handleDeleteSelectedImages(selectedImages)}
          disabled={selectedImages.length === 0}
        >
          Delete Files
        </p>
        }
      </div>
      {/* Gallery */}
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {images.map((image,index) => (
            <div
              key={image.id}
              className={`relative overflow-hidden rounded cursor-pointer ${
                selectedImages.includes(image.id) ? 'ring-2 ring-blue-500' : ''
              } ${hoveredImage === image.id ? 'border-yellow-400' : ''}`}
              onMouseEnter={() => handleImageHover(image.id)}
              onMouseLeave={() => handleImageHover(null)}
              onClick={() => handleImageClick(image.id)}
              style={{
                gridColumn: index === 0 ? 'span 2' : 'span 1', // First image spans 2 columns
                gridRow: index === 0 ? 'span 2' : 'span 1', // First image spans 2 rows
              }}
            >
              <div className="absolute top-3 left-3 text-2xl z-20">
                {selectedImages.includes(image.id) ? (
                  <input type="checkbox" checked className="checked:bg-blue-500 w-5 h-5" />
                ) : (
                  <input type="checkbox" className={`${hoveredImage === image.id ? 'block':'hidden'} checked:bg-blue-500 w-5 h-5`} />
                )}
              </div>
              {
                hoveredImage === image.id && hoveredImage === image.id && <div className="absolute bg-black opacity-40 inset-0 z-10"></div>
              }
              <img className="w-full h-auto border border-gray-400 hover:border-0" src={image.picture} alt={`Image ${image.id}`} />
            </div>
          ))}
          <div className="relative overflow-hidden rounded border-dashed border-2 cursor-pointer flex items-center justify-center text-gray-600 text-xl font-semibold border-gray-600 col-span-1 h-96 w-96 md:h-auto md:w-auto">
            <label htmlFor="upload" className="cursor-pointer">
              <input
                type="file"
                id="upload"
                className="hidden"
                accept="image/*"
                onChange={(e) => handleNewImageUpload(e)}
              />
              <span>+</span> Add Image
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

