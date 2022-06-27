import { NavLink } from 'react-router-dom';
import CurrencySelect from './CurrencySelector';
import cartImg from '../../assets/cart.png';

function Wrapper(props) {
  return (
    <div>
      <div className="Header-block">
        <span className="Category-block">
          <NavLink to="/ecommerce-store/"><span className="Selected">WOMEN</span></NavLink>
          <span>MEN</span>
          <span>KIDS</span>
        </span>
        <CurrencySelect />
        <NavLink className="Redirect-button" to="/ecommerce-store/cart"><img src={cartImg} /></NavLink>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;