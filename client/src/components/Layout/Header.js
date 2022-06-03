import { useState } from 'react';

const Header = (props) => {
    const [toggleCategory, setToggleCategory] = useState(true);

    const categoryHandler = () => {
        setToggleCategory((prev) => !prev);
    }
    return (
        <header>
            <div>Logo Space</div>
            <button onClick={categoryHandler}>toggle</button>
            {toggleCategory && props.children}
        </header>
    );
};

export default Header;
