import React, {useEffect} from 'react';
import s from './header.module.css'
import Button from "../Button/Button";

const Header = () => {
    useEffect(() => {
        tg.ready()
    }, [])
    const onClose = () => {
        tg.close()
    }
    return (
        <header className={s.header}>
            <Button onClick={onClose()}>Закрыть</Button>
            <span>{tg.initDataUnsafe?.user?.username}</span>
        </header>
    );
};

export default Header;