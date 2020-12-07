/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { useParams } from 'react-router-dom';

import Title from '../../components/title';
import INFO_DATA from '../../data/info';

export default function Project() {
  const { id } = useParams();

  const { projects } = INFO_DATA;

  const project = projects.find((p) => (p.id === Number(id)));

  return (
    <div>
      <div className="row mx-0">
        <div className="col py-4">
          <Title text={project.name} />
        </div>
      </div>

      <div className="row mx-0">
        <div className="col py-4 text-center">
          <img
            className="rounded border border-secondary img-fluid"
            src={project.imageUrl}
          />
        </div>
      </div>

      <div className="row mx-0">
        <div className="col py-4 text-center d-flex justify-content-center align-items-center">
          <a href={project.github} target="__blank">
            <div className="card project mr-4">
              <div className="card-body">

                <div className="row mx-0">
                  <div className="col text-center d-flex justify-content-center align-items-center">
                    <img
                      className="rounded-circle social-media-icon  mr-3"
                      src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                    />

                    <p className="m-0">{project.github}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>

        <div className="col py-4 text-center d-flex justify-content-center align-items-center">
          <a href={project.demo} target="__blank">
            <div className="card project">
              <div className="card-body">

                <div className="row mx-0">
                  <div className="col text-center d-flex justify-content-center align-items-center">
                    <img
                      className="social-media-icon mr-3"
                      src="https://conservationwindows.com/wp-content/uploads/2018/01/icon-request-a-demo-300x300.png"
                    />

                    <p className="m-0">{project.demo}</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>

    </div>
  )
}
