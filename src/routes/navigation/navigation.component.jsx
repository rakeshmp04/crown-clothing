import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Crownlogo } from '../../assets/crown.svg';
import '../navigation/navigation.style.scss';

const Navigation = () => {
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
                </div>
             </div>
        <Outlet />
        </Fragment>
       
    
    )
 
}

export default Navigation;