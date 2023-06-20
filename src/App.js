import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import { publicRoutes } from './Routes';
import Slider from './components/Slider/Slider';
import Sidebar from './components/SiderBar';
import Login from './components/login';
import { useState } from 'react';
import { click } from '@testing-library/user-event/dist/click';
// import DefaultLayout from './pages/DefaultLayout';
function App() {
    const [showLogin, setShowLogin] = useState(false);
    const handleclickbutton = () => {
        setShowLogin(true);
    };

    const clickHiddenForm = () => {
        setShowLogin(false);
        setShowRegis(false);
        setShowSign(false);
    };

    const [showSign, setShowSign] = useState(false);
    const [showRegis, setShowRegis] = useState(false);

    const clickShowSign = () => {
        setShowSign(true);
    };

    const clickShowRegister = () => {
        setShowRegis(true);
        console.log(showLogin);
    };

    return (
        <Router>
            <div className="App">
                <Header
                    onHandleClick={handleclickbutton}
                    onClickAppearSign={clickShowSign}
                    onClickAppearRegis={clickShowRegister}
                />
                <Slider />
                <Sidebar />
                {/* <Login /> */}
                {showLogin && showSign ? (
                    <Login onHandleClick={clickHiddenForm} showSign showRegis={false} />
                ) : showLogin && showRegis ? (
                    <Login onHandleClick={clickHiddenForm} showSign={false} showRegis />
                ) : (
                    ''
                )}

                {/* <Routes>
                    {publicRoutes.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
