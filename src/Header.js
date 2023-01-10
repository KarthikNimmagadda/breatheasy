import { Button } from 'react-bootstrap';
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const StyledLink = styled(Link)`
    text-decoration: none;
  `;
  return (
    <div>
        <div><p>Choose a breathing exercise, click 'Start' and synchronize your breathing with the animation.</p></div>
        <StyledLink to="/water">
          <Button variant="primary" size="md">Water</Button>
        </StyledLink>
        <StyledLink to="/whiskey">
          <Button variant="primary" size="md">Whiskey</Button>
        </StyledLink>
        <StyledLink to="/coffee">
          <Button variant="primary" size="md">Coffee</Button>
        </StyledLink>
    </div>
  );
  }
  