import React from 'react';
import back from './arrow.svg'
import styled from 'styled-components';

const Breadcrumb = styled.div`
margin-left: 40px;
margin-top: 30px;`;

const Link = styled.a`
display: flex;
margin-top: 2rem;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 17px;
color: #000000;
opacity: 0.6;`;

const Span = styled.span`
margin-left: 10px;`;

const BreadCrumbs = () => {

    return (
        <Breadcrumb>
            <Link to="/">
                <img src={back} alt = "back to cart"></img>
                <Span>Back to cart</Span>  
            </Link>
        </Breadcrumb>
    )
}

export default BreadCrumbs;
