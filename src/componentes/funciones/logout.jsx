import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
    const navigate = useNavigate();

    const sessionLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };

    return (
        <button onClick={sessionLogout} className="text-red-500"> Log out      <FontAwesomeIcon icon={faCaretRight} className="pr-2"/></button>
    );
};

export default LogoutButton;
