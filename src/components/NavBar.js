import './NavBar.css';
import CartWidget from'./CartWidget';

const Navbar = () => {
    return (
        <div className="nav">
        <h2>Pinky Deco</h2>
        <button>Verano</button>
        <button>Cocina</button>
        <button>Deco</button>
        <button>Bazar</button>
        <CartWidget/>
        </div>
)};

export default Navbar;