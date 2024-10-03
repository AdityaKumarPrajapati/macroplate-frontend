import { Navbar } from './Navbar';
import { LoginAndAccount } from './LoginAndAccount';
import '../css/Navbar.css'
import { Outlet } from 'react-router-dom';
import { SidebarMain } from '../../../app/modules/sidebarModule/sideBarMain';
import { Footer } from './Footer';

const NavBarComponents = () => {
    return (
        <div className='navBarWrapper'>
            <SidebarMain />
            <div className='navBarComponentsWrapper'>
                <div className='navBarComponents container'>
                    <Navbar />
                    <LoginAndAccount />
                </div>
            </div>
            <Outlet />
            <Footer />
        </div>
    );
}

export { NavBarComponents };