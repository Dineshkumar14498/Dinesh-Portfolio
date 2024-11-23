import React from 'react';
import profile from "../assets/profile pic.jpg"

const Home = () => {
    return (
        <section className="home">
            <div className="intro">
                {/* Profile picture */}
                <img
                    src={profile} // Replace this with the actual image path
                    alt="Dineshkumar"
                    className="profile-pic"
                />
                <div>
                    <h2>
                        Hello, I'm <span>Dineshkumar</span>
                    </h2>
                    <p>
                        A passionate Full-Stack Developer building modern web applications.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;
