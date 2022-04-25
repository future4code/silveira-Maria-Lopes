import Logo from '../images/logotinder.png';
import WordLogo from '../images/palavratinder.png';


const Nav = ({ minimal,  setShowModal, ShowModal, setIsSignUp }) => {


    const handleClick = () => {
      setShowModal(true)
      setIsSignUp(false)
    }

    const authToken = false;


    return(
        <>
      <nav>
          <div className="logo-container">

            <img className="logo" src={minimal ? Logo : WordLogo} />

          </div>

         {!authToken && !minimal && <button 
         className='nav-button'
         onClick={handleClick}
         disabled={ShowModal}
         >Log in </button>}
      </nav>
      </>
    )
}

export default Nav;