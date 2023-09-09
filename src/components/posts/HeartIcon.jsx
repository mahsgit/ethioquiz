import { useState } from 'react';

function HeartIcon() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div onClick={handleClick}>
      {isLiked ? <i className="fas fa-heart" ></i> : <i className="far fa-heart"></i>}
    </div>
  );
}

export default HeartIcon;