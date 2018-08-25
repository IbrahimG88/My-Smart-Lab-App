import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';

const Header = () => (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to='/'>  <Button variant="contained" color="primary">Home</Button>
                    </Link>
                </li>
                <li>
                    <Link to='/inventory-module'> <Button variant="contained" color="primary">Inventory Main</Button>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
