import React from 'react';
import styled from 'styled-components';

const Heading = styled.h2`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;
color: #FF8A00;
margin-top: ${ props => props.marginTop || '0' };
margin-bottom: ${ props => props.marginBottom || '0' }`;

const Wrapper = styled.div`
margin-top: 20px;
margin-right:20px;
display: flex;
flex-flow: column nowrap;
justify-content: space-between;
height: 100%;
padding-left: 20px;
border-left: 1px solid rgba(860, 460, 0.2);`;

const ItemPurchased = styled.div`
font-family: Inter;
font-size: 14px;
color: #000000;
opacity: 0.6;`;

const Button = styled.button`
background: #FF8A00;
border: 1px solid rgba(255, 255, 255, 0.2);
box-sizing: border-box;
box-shadow: 3px 5px 10px rgba(255, 138, 0, 0.2);
border-radius: 2px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
text-align: center;
color: #FFFFFF;
height: 60px;
width: 100%;`;

const Top = styled.div`
display:flex;
flex-flow: column nowrap`;

const Bottom = styled.div`
display:flex;
flex-flow: column nowrap`;

const Item = styled.div`
display: flex;
justify-content: space-between`;

const ItemName = styled.div`
font-family: Inter;
font-size: 14px;
color: #000000;
opacity: 0.6;`;

const ItemValue = styled.div`
font-family: Inter;
font-size: 14px;
color: #000000;
font-weight: bold;`;

const Summrary = () => {

    return (
        <React.Fragment>
            <Wrapper>
                <Top>
                    <Heading>Summary</Heading>
                    <ItemPurchased>10 items purchased</ItemPurchased>
                </Top>
                <Bottom>
                    <Item>
                        <ItemName>Cost of goods</ItemName>
                        <ItemValue>500,000</ItemValue>
                    </Item>
                    <Item>
                        <ItemName>Dropshipping Fee</ItemName>
                        <ItemValue>5,900</ItemValue>
                    </Item>
                    <Item>
                        <Heading marginTop="1rem" marginBottom="1rem">Total</Heading>
                        <Heading marginTop="1rem" marginBottom="1rem">505,900</Heading>
                    </Item>
                    <Button>Continou to Payment</Button>
                </Bottom>
            </Wrapper>
        </React.Fragment>
    )
}

export default Summrary;
