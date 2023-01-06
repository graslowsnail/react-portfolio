import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
    {
      name: 'Parts Tracker',
      category: 'projectPics',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    { 
      name: 'Quiz group project!',
      category: 'projectPics',
      description:'Lorem ipsu, consectetur adipiscing elit. Nunc ultricie'
    },
    { 
      name: 'Run Buddy',
      category: 'projectPics',
      description:'Lorem ipsu, consectetur adipiscing elit. Nunc ultricie'
    },
    { 
      name: 'Place Holder',
      category: 'projectPics',
      description:'Lorem ipsu, consectetur adipiscing elit. Nunc ultricie'
    }
    
  ]);

     const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, index) => (
          <img
            src={require(`../../assets/large/${category}/${index}.jpg`)} 
            //src={require(`../../assets/small/${category}/${index}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, index)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
