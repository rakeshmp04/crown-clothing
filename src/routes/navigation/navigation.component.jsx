import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import '../navigation/navigation.style.scss';
import { UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);
    
    return(
        <Fragment>
             <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <Crownlogo />
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                            :(<Link className='nav-link' to='/auth'>SIGN IN</Link>)
                    }
                    <CartIcon />
                   </div>
                   {isCartOpen &&   <CartDropDown /> }
                 
             </div>
        <Outlet />
        </Fragment>
       
    
    )
 
}

export default Navigation;