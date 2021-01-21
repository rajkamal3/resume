import React, { useState, useEffect } from 'react';
import './App.css';
import Experience from './components/experience/experience';
import moon from './assets/images/moon.png';
import sun from './assets/images/sun.png';
// import Images from './components/images/images';

const getStorageTheme = () => {
    let theme = 'sdfghjklrtyui';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function App() {
    const [theme, setTheme] = useState(getStorageTheme());

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="App">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '10px'
                }}
            >
                <div
                    onClick={toggleTheme}
                    style={{
                        height: '50px',
                        width: '50px',
                        cursor: 'pointer'
                    }}
                >
                    {theme === 'light-theme' ? <img src={moon} width="50px" alt="moon" /> : <img src={sun} width="50px" alt="moon" />}
                </div>
            </div>
            <Experience />
            {/* <Images /> */}
        </div>
    );
}

export default App;
