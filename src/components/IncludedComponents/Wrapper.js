import { NavLink } from 'react-router-dom';
import CurrencySelect from './CurrencySelector';
import cartImg from '../../assets/cart.png';

function Wrapper(props) {
  return (
    <div>
      <div className="Header-block">
        <span>{props.title}</span>
        <CurrencySelect />
        <NavLink className="Redirect-button" to={props.navLink}><img src={cartImg} /></NavLink>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Wrapper;