import { useNavigate } from 'react-router-dom';

function PageMain() {
  
  const navigate = useNavigate();

  return (
    <>
      <div className='main-container'>
        <h1>Hello!</h1>
        <button onClick={() => navigate('cat', { replace: false })}>
          Cats!
        </button>
        <button onClick={() => navigate('dog', { replace: false })}>
          Dogs!
        </button>
      </div>
    </>
  )
}
  
  export default PageMain;