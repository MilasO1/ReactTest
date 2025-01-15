import React from 'react';
import { Link } from 'react-router-dom';
import 'bulma/css/bulma.min.css';

function Home() {
  return (
    <section className="hero is-fullheight">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5-tablet is-4-desktop">
              <div className="box">
                <h1 className="title has-text-centered">Geek-Project</h1>
                <div className="buttons are-medium is-flex is-flex-direction-column">
                  <Link to="/register" className="button is-primary is-fullwidth mb-3">
                    S'inscrire
                  </Link>
                  <Link to="/login" className="button is-link is-fullwidth">
                    Se connecter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
