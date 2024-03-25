import React, { useEffect } from "react";
import { useState } from "react";

function ShowImg({ imageUrl }) {
  const [photoImageSrc, setPhotoImageSrc] = useState(null);

  useEffect(() => {
    const getPhotoItem = async () => {
      try {
        const profileImg = await import(`${imageUrl}`);
        setPhotoImageSrc(profileImg.default);
      } catch (error) {
        console.error("Error loading image:", error);
      }
    };
    getPhotoItem();
  }, [imageUrl]);
  return (
    <div>
      <div>
        <img src={photoImageSrc} alt="Displayed" />
      </div>
    </div>
  );
}

export default ShowImg;
