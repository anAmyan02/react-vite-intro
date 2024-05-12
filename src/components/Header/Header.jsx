import React, { useState, useEffect } from 'react';
import logo from '../../../public/vite-logo.jpg';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    height: 50px;
    display: flex;
    padding: 0.2rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px #ccc solid;
    background-color: #fafafa;
`;

export default function Header() {
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setNow(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <HeaderContainer>
            <img src={logo} alt="logo" className="logo" />
            <span>Time is: {now.toLocaleTimeString()}</span>
        </HeaderContainer>
    );
}
