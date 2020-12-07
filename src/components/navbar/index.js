/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const { projects } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <Link to="/" className="navbar-brand">
        Sahiba's Portfolio
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true" 
              ria-expanded="false"
            >
              Projects
            </a>

            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              {
                projects.map((project, index) => (
                  <Link
                    to={`/project/${project.id}`}
                    className="dropdown-item"
                    key={`project_${index + 1}`}
                  >
                    {project.name}
                  </Link>
                ))
              }
            </div>
          </li>
        </ul>
      </div>

    </nav>
  )
}
