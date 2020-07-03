import React, { useState } from 'react';

import styles from './Navbar.module.css';
import NavbarMobile from './NavbarMobile';
import NavbarExpand from './NavbarExpand';
import useWindowDimensions from '../../utilities/useWindowDimensions';
import NavbarFull from './NavbarFull';

const Navbar = () => {
    const [expanded, setExpanded] = useState(false);
    const { width } = useWindowDimensions();
    return (
        <div>
            {width < 1024 ? 
                <NavbarMobile expanded={expanded} setExpanded={setExpanded}/> : 
                <NavbarFull expanded={expanded} setExpanded={setExpanded}/>    
            }
            <NavbarExpand expanded={expanded} setExpanded={setExpanded} vertical={width >= 1024} />
        </div>
    )
}

export default Navbar;