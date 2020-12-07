/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import Title from '../../components/title';

import INFO_DATA from '../../data/info';

export default function Home() {
  const [cardClass, setCardClass] = useState('');

  useEffect(
    () => {
      const timeout = setTimeout(() => {
        setCardClass(() => 'active');
      }, 400);

      return () => clearTimeout(timeout);
    },
    [],
  );

  return (
    <div>

      <div className="row mx-0 h-100">
        <div className="col py-4 d-flex justify-content-center align-items-center">
          <div className={`card ${cardClass}`}>


            <div className="card-body">

              <div className="row mx-0">

                <div className="col py-4 d-flex justify-content-center align-items-center">
                  <img className="profile-picture rounded-circle" src={INFO_DATA.profilePictureUrl} alt="Card image cap" />
                </div>

                <div className="col py-4 d-flex flex-column justify-content-center">
                  <div className="row mx-0">
                    <div className="col py-4">
                      <Title text={INFO_DATA.title} />
                    </div>
                  </div>

                  <div className="row mx-0">
                    <div className="col py-4 d-flex justify-content-center">
                      <p className="presentation-description">{INFO_DATA.introduction}</p>
                    </div>
                  </div>

                  <div className="row mx-0">
                    <div className="col py-4 text-center icons-container">
                      <a href={INFO_DATA.github} target="__blank">
                        <img
                          className="rounded-circle social-media-icon  mr-3"
                          src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                        />
                      </a>

                      <a href={INFO_DATA.linkedIn} target="__blank">
                        <img
                          className="rounded-circle social-media-icon mr-3"
                          src="https://cdn.iconscout.com/icon/free/png-256/linkedin-42-151143.png"
                        />
                      </a>

                      <a href={INFO_DATA.cv} target="__blank">
                        <img
                          className="social-media-icon"
                          src="https://cdn.iconscout.com/icon/free/png-256/find-cv-1107443.png"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="row mx-0">
                    <div className="col py-4 d-flex justify-content-center">
                      <span className="font-italic text-secondary">{INFO_DATA.email}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <span className="font-italic text-secondary">{INFO_DATA.phone}</span>
                    </div>
                  </div>
                </div>

              </div>
              

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
