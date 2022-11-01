import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import '../navigation/navigation.style.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    
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
                   </div>
             </div>
        <Outlet />
        </Fragment>
       
    
    )
 
}

export default Navigation;