import React, { useState } from "react";
import styled from 'styled-components';
import * as yup from "yup";
import back from './arrow.svg'
import { connect } from "react-redux";

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
font-size: ${ props => props.fontSize || '32px' };
line-height: 44px;
border-bottom: 4px solid #EEEEEE;
width: ${ props => props.width || '260px' };
margin-top: ${ props => props.marginTop || '0' };
color: #FF8A00;`;

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

const Link = styled.div`
display: flex;
font-style: normal;
font-weight: normal;
margin-top: 2rem;
font-size: 14px;
line-height: 17px;
color: #000000;
opacity: 0.6;`;

const Span = styled.div`
margin-left: 10px;`;

const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    phone: yup.string().matches(new RegExp('[0-9]{7}')),
    address: yup.string().min(6).max(20).required(),
  });


const Summary = ({shipment,shipmentFee, deliveryEstimation, paymentMethod, dropshipFee, handleChangePageDelivery}) => {
    function commafy( num ) {
        var str = num.toString().split('.');
        if (str[0].length >= 5) {
            str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
        }
        if (str[1] && str[1].length >= 5) {
            str[1] = str[1].replace(/(\d{3})/g, '$1 ');
        }
        return str.join('.');
    }
    function randomString() {
        let length = 5;
        let chars = '23456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ';
        var result = '';
        for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }
    return (
        <React.Fragment>
            <ItemLeft>
                <div>
                    <Heading>Thank You</Heading>
                    <div>Order ID : <span style={{fontWeight: "bold"}}> { randomString() }</span></div>
                    <div>Your order will be delivered today with GO-SEND</div>
                    <Link onClick={ handleChangePageDelivery }>
                        <img src={back} alt = "back to cart"></img>
                        <Span>Back to homepage</Span>  
                    </Link>
                </div>
            </ItemLeft>
            <ItemRight>
                <Wrapper>
                    <Top>
                        <Heading marginTop="2rem" fontSize="24px" width="130px">Summary</Heading>
                        <ItemPurchased>10 items purchased</ItemPurchased>
                        <Hr></Hr>
                        <DeliveryEstimation>Delivery Estimation</DeliveryEstimation>
                        { shipment ?  <TimeEstimation>{ deliveryEstimation +` by `+ shipment}</TimeEstimation> : null }
                        <Hr></Hr>
                        <DeliveryEstimation>Payment Method</DeliveryEstimation>
                        { paymentMethod ?  <TimeEstimation>{paymentMethod}</TimeEstimation> : null }
                    </Top>
                    <Bottom>
                        <Item>
                            <ItemName>Cost of goods</ItemName>
                            <ItemValue>500,000</ItemValue>
                        </Item>
                        <Item>
                            <ItemName>Dropshipping Fee</ItemName>
                            <ItemValue>{ dropshipFee }</ItemValue>
                        </Item>
                        <Item>
                            <ItemName>{ shipment } shipment</ItemName>
                            <ItemValue>{ shipmentFee }</ItemValue>
                        </Item>
                        <Item>
                            <TotalCost marginTop="1rem" marginBottom="1rem">Total</TotalCost>
                            <TotalCost marginTop="1rem" marginBottom="1rem">{ commafy(500000+parseInt(dropshipFee.replace(/,/g, ''))+parseInt(shipmentFee.replace(/,/g, ''))) }</TotalCost>
                        </Item>
                    </Bottom>
                </Wrapper>
            </ItemRight> 
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        dropshipFee: state.dropshipFee,
        shipment: state.shipment,
        shipmentFee: state.shipmentFee,
        deliveryEstimation: state.deliveryEstimation,
        paymentMethod: state.payment,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePageDelivery: () => dispatch({ type: 'CHANGE_PAGE_DELIVERY' }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
