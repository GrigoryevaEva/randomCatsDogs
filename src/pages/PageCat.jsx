import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import  CatNull from '../cat-null.png';

function PageCat() {
  const navigate = useNavigate();

  const [ img, setImg ] = useState(<img src={CatNull} />)

  const [isLoadingData, setisLoadingData] = useState(false);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleChangeCat = () => {
    setisLoadingData(true);
    setShowData(true)
    const url = "https://api.thecatapi.com/v1/images/search";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setisLoadingData(false);
        setData(json[0])
        console.log(data);
      })
    .catch((error) => console.log(error));

    showData ? (
      isLoadingData ? (
        setImg(<p>Loading...</p>)
      ) : (
        setImg(<img src={data.url} alt=" " />))
      ) : (
        setImg(<img src={CatNull} />));
  }

  return (
    <div className='main-container'>
      <button onClick={() => navigate('/', { replace: false })}>
        Cancel
      </button>
      <button onClick={handleChangeCat}>
        Get a cat!
      </button>
      <div className='img-container'>{img}</div>
    </div>
  )
}
  
  export default PageCat;