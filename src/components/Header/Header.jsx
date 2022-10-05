import React from 'react';
import s from './header.module.css'
import Button from "../Button/Button";
import {useTg} from "../../hooks/useTg";


const Header = () => {
    const {user, onClose} = useTg()
    return (
        <header className={s.header}>
            <Button onClick={onClose()}>Закрыть</Button>
            <span>{user?.username}</span>
        </header>
    );
};

export default Header;