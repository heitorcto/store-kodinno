import './ButtonStyles.css';
import { Link } from 'react-router-dom';

function ButtonNavbar(props) {
    return (
        <Link to={ props.link } key={ props.id }>
            <div className='button-navbar'>
                { props.name }
            </div>
        </Link>
    );
}

export default ButtonNavbar;