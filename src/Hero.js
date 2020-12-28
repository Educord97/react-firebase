import React from 'react';

const Hero = ({ handleLogout }) => {
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
            <div className="content">
                <div className="text_follow">
                    <h1>Follow me on Github.</h1>
                    <p>There are a lot cool projects for you!!!</p>
                    <a href="https://github.com/Educord97" target="_blank">Follow</a>
                </div>
                <div className="iframe">
                    <h2>React wheater</h2>
                    <iframe width="600" height="400px" src="https://reactjsweather.netlify.app/" scrolling="yes" frameborder="no"></iframe>
                </div>
                <div className="iframe">
                    <h2>Currency Converter</h2>
                    <iframe width="600" height="400px" src="https://conversormoedas-react.netlify.app/" scrolling="yes" frameborder="no"></iframe>
                </div>
                <div className="iframe">
                    <h2>React Timer</h2>
                    <iframe width="600" height="400px" src="https://cronometro-react.netlify.app/" scrolling="yes" frameborder="no"></iframe>
                </div>
                <div className="iframe">
                    <h2>React Fortune Cookie</h2>
                    <iframe width="600" height="400px" src="https://biscoito-react.netlify.app/" scrolling="yes" frameborder="no"></iframe>
                </div>
            </div>

        </section>
    )
}

export default Hero;