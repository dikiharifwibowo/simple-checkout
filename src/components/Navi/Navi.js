import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const WrapperNav = styled.div`
background: #FFFAE6;
display: flex;
justify-content: space-around;
align-items: center;
border-radius: 35px;
height: 70px;
padding: 0px 10px;
position: absolute;
margin-top: -35px;
top: 85px;
left: 50%;
transform: translate(-50%, -50%);
width: 500px;`;

const Circle = styled.div`
background: #FF8A00;
box-shadow: 0px 2px 4px rgb(255 138 0 / 30%);
border-radius: 15px;
width: 30px;
height: 30px;
display: flex;
justify-content: center;
opacity: ${ props => props.opacity || '0.2' };
color: #ffffff;
align-items: center;`;

const Step = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
align-items: center;`;

const Title = styled.span`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 20px;
line-height: 29px;
text-align: center;
margin-left: 10px;
color: #FF8A00;`;

const Flex = styled.div`
display: flex;`;

const Navi = ({page}) => {
        return (
            <WrapperNav>
                <Step>
                    <Flex>
                        <Circle opacity="1">1</Circle>
                        <Title>Delivery </Title>
                    </Flex>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="18.000000pt" height="18.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                        fill="#FF8A00" stroke="none">
                        <path d="M54 229 c-3 -6 15 -33 42 -60 l48 -49 -49 -50 c-39 -39 -47 -52 -37
                        -62 10 -10 25 1 74 50 l63 62 -60 60 c-62 63 -69 67 -81 49z"/>
                        </g>
                    </svg>
                </Step>
                <Step>
                    <Flex>
                        <Circle opacity={ (page === 'shipment' || page === 'summary')  ? '1' : '0.2'}>2</Circle>
                        <Title>Payment</Title>
                    </Flex>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="18.000000pt" height="18.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                        fill="#FF8A00" stroke="none">
                        <path d="M54 229 c-3 -6 15 -33 42 -60 l48 -49 -49 -50 c-39 -39 -47 -52 -37
                        -62 10 -10 25 1 74 50 l63 62 -60 60 c-62 63 -69 67 -81 49z"/>
                        </g>
                    </svg>
                </Step>

                <Step>
                    <Flex>
                        <Circle opacity={ page === 'summary' ? '1' : '0.2'}>3</Circle>
                        <Title>Finish</Title>
                    </Flex>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="18.000000pt" height="18.000000pt" viewBox="0 0 24.000000 24.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                        fill="#FF8A00" stroke="none">
                        <path d="M54 229 c-3 -6 15 -33 42 -60 l48 -49 -49 -50 c-39 -39 -47 -52 -37
                        -62 10 -10 25 1 74 50 l63 62 -60 60 c-62 63 -69 67 -81 49z"/>
                        </g>
                    </svg>
                </Step>
                
            </WrapperNav>
        )
}
const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}
export default connect(mapStateToProps)(Navi);
