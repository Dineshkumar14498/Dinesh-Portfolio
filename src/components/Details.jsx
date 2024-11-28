import React from 'react';

const Details = () => {
    return (
        <div className="details">
            {/* Education Section */}
            <div className="section education">
                <h2 className="section-title">Education</h2>
                <ul className="list">
                    <li>
                        <h4>B.Com (55%)</h4>
                        <p>C. Abdul Hakeem College, Vellore</p>
                    </li>
                    <li>
                        <h4>HSC (65%)</h4>
                        <p>NKM Higher Sec School, Vellore</p>
                    </li>
                    <li>
                        <h4>SSLC (63%)</h4>
                        <p>NKM Higher Sec School, Vellore</p>
                    </li>
                </ul>
            </div>

            {/* Experience Section */}
            <div className="section experience">
                <h2 className="section-title">Experience</h2>
                <ul className="list">
                    <li>
                        <h4>Purchase Manager</h4>
                        <p>Sky Mobile and Electronics</p>
                        <p className="duration">(April 2020 - March 2024)</p>
                    </li>
                    <li>
                        <h4>Sales Person</h4>
                        <p>Bro Mobile Private Limited</p>
                        <p className="duration">(October 2018 - April 2020)</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Details;
