import { FaArrowRightToBracket } from "react-icons/fa6";
import icon_user from '../../assets/icons/user.png';

import styled from './Navbar.module.scss';

const Navbar = ({ name, email }) => {

    return (
        <div className={styled.container_navbar}>
            <div className={styled.nav_header}>
                <div className={styled.col_1}>
                    <span>Home / Dashboard</span>
                    <h6>Dashboard</h6>
                </div>
                <div className={styled.col_2}>
                    <FaArrowRightToBracket color="#FFF" />
                </div>
            </div>
            <div className={styled.info_user}>
                <div className={styled.secc_1}>
                    <img src={icon_user} width={"80"} height={"80"} alt='avatar' />
                </div>
                <div className={styled.secc_2}>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
}
 
export default Navbar;
