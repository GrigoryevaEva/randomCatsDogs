import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DogNull from '../dog-null.jpg';

function PageDog() {

  const navigate = useNavigate();

  const [ img, setImg ] = useState(<img src= {DogNull} />)

  const [isLoadingData, setisLoadingData] = useState(false);
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState(false);

  const handleChangeDog = () => {
    setisLoadingData(true);
    setShowData(true);
    const url = "https://random.dog/woof.json";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setisLoadingData(false);
        setData(json)
        console.log(data);
      })
    .catch((error) => console.log(error));

    showData ? (
      isLoadingData ? (
        setImg(<p>Loading...</p>)
      ) : (
        setImg(<img src={data.url} alt=" " />))
      ) : (
        setImg(<img src={DogNull} />));
  }

  return (
    <div className='main-container'>
      <button onClick={() => navigate('/', { replace: false })}>
        Cancel
      </button>
      <button onClick={handleChangeDog}>Get a dog!</button>
      <div className='img-container'>{img}</div>
    </div>
  )
}
  
  export default PageDog;