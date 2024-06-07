import styled from './Sidebar.module.scss';

import logo from '../../assets/icons/logo.svg';
import icon_1 from '../../assets/icons/icono-sidebar.svg';

const Sidebar = () => {

    return ( 
        <div className={styled.container_sidebar}>
            <div className={styled.icon}>
                <img src={logo} width={"22"} height={"22"} alt='logo' />
                <h6>UI DASHBOARD</h6>
            </div>
            <div className={styled.divider}></div>
            <div className={styled.option}>
                <img src={icon_1} width={"30"} height={"30"} alt='logo' />
                <span>Dashboard</span>
            </div>
        </div>
    );
}
 
export default Sidebar;