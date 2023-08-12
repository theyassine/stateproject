import React, { useState } from 'react';

const App = () => {
  const [person, setPerson] = useState({
    fullName: 'yassine',
    bio: ' developer.',
    imgSrc: "https://media2.ledevoir.com/images_galerie/nwd_1448513_1112103/image.jpg",
    profession: ' Engineer',
  });

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <div>
      <button onClick={toggleShow}>Toggle</button>
      {show && (
        <div>
          <h2>{person.fullName}</h2>
          <p>{person.bio}</p>
          <img src={person.imgSrc} alt="image" />
          <p>Profession: {person.profession}</p>
        </div>
      )}
    </div>
  );
};

export default App;
