import React from 'react';
import {Link} from "react-router";

export default (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
            <p>
                <Link className="navbar-brand" to={'/'}>
                    Nested link
                </Link>
            </p>

            <Link className="navbar-brand" to={'/movies'}>
               movies List
            </Link>
        </div>
      </div>
    </nav>
  );
}
