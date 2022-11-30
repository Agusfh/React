import Card from './Card';
import "./ItemListContainer.css";

function ItemListContainer() {
    return (
      <div className="ItemList">
      <h3 className='hello'>Bienvenidos a Pinky Deco Tienda Online</h3>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
    );
  }

export default ItemListContainer;