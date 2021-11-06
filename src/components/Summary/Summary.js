import React, { useState } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ItemLeft = styled.div`
padding: 20px 30px 0px 40px;
flex-grow: 1;
padding-bottom: 20px;
display: flex;
justify-content: center;
flex-basis: 65%;
align-items: center;
flex-direction: column;
flex-grow: 2;`;

const ItemRight = styled.div`
flex-basis:35%;
height: 100%;
display: flex;
flex-direction: column;
padding-bottom: 20px;`;

const Heading = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
border-bottom: 4px solid #EEEEEE;
width: 200px;
color: #FF8A00;
margin-top: 0px;`;

const TotalCost = styled.h2`
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

const Hr = styled.div`
width: 140px;
margin: 1rem 0;
border: 1px solid #d8d8d8`;

const DeliveryEstimation = styled.div`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
color: #000000;`;

const TimeEstimation = styled.div`
font-family: Inter;
font-style: normal;
font-weight: bold;
font-size: 16px;
margin-top: 10px;
line-height: 19px;
color: #1BD97B;`;


const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    phone: yup.string().matches(new RegExp('[0-9]{7}')),
    address: yup.string().min(6).max(20).required(),
  });


const Summary = () => {
    const [courier, setCourier] = useState(false);
    const [dropshippingFee, setDropshippingFee] = useState("0");

    return (
        <React.Fragment>
            <ItemLeft>
                <div>
                    <Heading>Thank You</Heading>
                    <div>Order ID : <span style={{fontWeight: "bold"}}>asdb1762</span></div>
                    <div>Your order will be delivered today with GO-SEND</div>
                </div>
            </ItemLeft>
            <ItemRight>
                <Wrapper>
                    <Top>
                        <Heading>Summary</Heading>
                        <ItemPurchased>10 items purchased</ItemPurchased>
                        <Hr></Hr>
                        <DeliveryEstimation>Delivery Estimation</DeliveryEstimation>
                        { courier ?  <TimeEstimation>{ courier }</TimeEstimation> : null }
                    </Top>
                    <Bottom>
                        <Item>
                            <ItemName>Cost of goods</ItemName>
                            <ItemValue>500,000</ItemValue>
                        </Item>
                        <Item>
                            <ItemName>Dropshipping Fee</ItemName>
                            <ItemValue>{ dropshippingFee }</ItemValue>
                        </Item>
                        <Item>
                            <TotalCost marginTop="1rem" marginBottom="1rem">Total</TotalCost>
                            <TotalCost marginTop="1rem" marginBottom="1rem">505,900</TotalCost>
                        </Item>
                    </Bottom>
                </Wrapper>
            </ItemRight> 
        </React.Fragment>
    )
}

export default Summary;
