import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './IconMenuMobile.css';

function IconMenuMobile() {
    const [menu, setMenu] = useState(true);
    const [animateClass, setAnimateClasse] = useState('');

    const animateIcon = () => {
        setAnimateClasse('opacity-animation');
        setTimeout(() => {
            menu === true ? setMenu(false) : setMenu(true);
            setAnimateClasse(''); 
        }, 300);
    };

    return (
        <div className={`icon-style ${animateClass}`}>
            { menu && <FaBars onClick={() => animateIcon()}/> }
            { !menu && <FaTimes onClick={() => animateIcon()}/> }
        </div>
    );
}

export default IconMenuMobile;