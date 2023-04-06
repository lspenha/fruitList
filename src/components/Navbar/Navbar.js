import { FiMenu } from 'react-icons/fi';
import { AiFillHome } from 'react-icons/ai';
import './Navbar.css';


function NavBar() {

  function handleMove() {
    let move = document.getElementById("myTopnav");
    if (move.className === "topnav") {
      move.className += " responsive";
    } else {
      move.className = "topnav";
    }
  }
  
  return (
    <div className="NavBar">    
      <div class="topnav" id="myTopnav">
        <a href="/" class="active">{<AiFillHome/>}</a>
        <a href="#noticias">Notícias</a>
        <a href="#contato">Contato</a>
        <a href="#sobre">Sobre</a>
        <button class="icon" onClick={handleMove}>
          <FiMenu class="fa fa-bars"></FiMenu>
        </button>
      </div>
    </div>
  );
}

export default NavBar;
