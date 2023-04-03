import React from 'react';
import "./skillset.css"
import Frontend from './Frontend';
import Backend from './Backend';

const Skillset = () => {
    return (
        <section className="skills section" id='skills'>
            <div className="skills_container container grid">
                <Frontend />
                <Backend />
            </div>
       </section>
    );
}

export default Skillset