import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import gravatar from "../utils/gravatar";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video-BW2.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
    const { user } = props;
    const isUser = Object.keys(user).length;
    const handleLogout = () => {
        props.logoutRequest({});

    }

    return (
        <header className="header">

            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>

            <div className="header__menu">
                <div className="header__menu--profile">
                    {isUser > 0 ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img src={userIcon} alt="User Icon" />
                    }
                    {isUser > 0 ?
                        <p>{user.name}</p>
                        :
                        <p>Perfil</p>
                    }

                </div>

                {
                    isUser > 0 ?

                        <ul>
                            <li>
                                <Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link>
                            </li>
                        </ul>

                        :

                        <ul>
                            <li>
                                <Link to="/Login">Iniciar Sesión</Link>
                            </li>
                        </ul>
                }


            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);