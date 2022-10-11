
import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav id="nav" class="navbar-expand-md navbar-dark bg-dark mb-4">
            <div class="container-fluid">
                <Link className="navbar-brand" to="/">SPA Example</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div>
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>            
        </nav>
    )
}
