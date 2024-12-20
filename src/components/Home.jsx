import React from 'react';
import profile from "../assets/profile pic.jpg";

const Home = () => {
    return (
        <section className="home">
            <div className="intro">
                <img
                    src={profile}
                    alt="Dineshkumar"
                    className="profile-pic"
                />
                <div className="content">
                    <h2>
                        Hello, I'm <span>Dineshkumar</span>
                    </h2>
                    <p>
                        As a recent graduate with a passion for web development, I build modern, responsive, and scalable applications Proficient in front-end and
                        back-end technologies like HTML, CSS, JavaScript, and React.
                        Looking to join a team <br /> that values innovation and creativity.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
