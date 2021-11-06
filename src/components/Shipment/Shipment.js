import React, { useState } from "react";
import styled from 'styled-components';
import { connect } from "react-redux";

const ItemLeft = styled.div`
padding: 20px 30px 0px 40px;
flex-grow: 1;
padding-bottom: 20px;
display: flex;
flex-basis: 60%;
margin-right: 5%;
flex-direction: column;
flex-grow: 2;`;

const ItemRight = styled.div`
flex-basis:35%;
height: 100%;
display: flex;
flex-direction: column;
padding-bottom: 20px;`;

const Header = styled.div`
display: flex;
flex-wrap: nowrap;
margin-bottom: 20px;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: baseline;
justify-content-space-between`;

const Heading = styled.h1`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 44px;
color: #FF8A00;
border-bottom: 4px solid #EEEEEE;
min-width: 200px;
margin-top: 0px;`;

const WrapperForm = styled.div`
display: flex;
flex-wrap: no-wrap;
gap: 10px;
justify-content: space-between;
flex-direction: row;`;

const Form = styled.div`
display: flex;
background: ${ props => props.bgColor || '#ffffff' };
border-color: ${ props => props.borderColor || '#CCCCCC' };
height: 60px;
border-style: solid;
box-sizing: border-box;
justify-content: space-around;
flex: 0 0 33.333333%;`;

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

const Divider = styled.div`
margin: 1.5rem 0`;

const LeftRow = styled.div`
font-weight: bold;
display: flex;
height: 100%;
justify-content: space-around;
flex-direction: column;
align-items: flex-start;
line-height: 20px;`;
const RightRow = styled.div`
display: flex;
justify-content: flex-end;
min-width: 30px;
align-items: center;`;

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


const Shipment = ({dropshipFee, handleChangePageSummary, shipment, shipmentFee, paymentMethod, shipmentGojek, shipmentJne, shipmentPersonal}) => {
    const [courier, setCourier] = useState(false);
    const [payment, setPayment] = useState(false);
    const [gosend, setGoSend] = useState(false);
    const [jne, setJne] = useState(false);
    const [personalCourier, setPersonalCourier] = useState(false);
    const [eWallet, setEWallet] = useState(false);
    const [bankTransfer, setBankTransfer] = useState(false);
    const [va, setVa] = useState(false);

    let handleShipment = (value) => {
        if(value === 'gosend') {
            setGoSend(true)
            setCourier("Today by GO SEND")
            setJne(false)
            setPersonalCourier(false)
            shipmentGojek()
        } else if(value === 'jne') {
            setGoSend(false)
            setJne(true)
            setCourier("2 day by JNE")
            setPersonalCourier(false)
            shipmentJne()
        } else {
            setGoSend(false)
            setJne(false)
            setPersonalCourier(true)
            setCourier("1 day by Personal Courier")
            shipmentPersonal()
        }

    }

    let handlePayment = (value) => {
        if(value === 'eWallet') {
            setEWallet(true)
            setPayment("Pay with e-Wallet")
            setBankTransfer(false)
            setVa(false)
        } else if(value === 'bankTransfer') {
            setEWallet(false)
            setBankTransfer(true)
            setPayment("Pay with Bank Transfer")
            setVa(false)
        } else {
            setEWallet(false)
            setBankTransfer(false)
            setVa(true)
            setPayment("Pay with Virtual Account")
        }
    }

    let handleShipmentPayment = () => {
        if(!courier || !payment) return;
        handleChangePageSummary()
    }
    const Icon = () => {
        return <svg gosend={gosend} version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="24.000000pt" height="16.000000pt" viewBox="0 0 12.000000 24.000000"
            preserveAspectRatio="xMidYMid meet">
        
            <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
            fill="#1BD97B" stroke="none">
            <path d="M143 158 l-52 -52 -26 24 -25 24 -22 -22 -22 -22 39 -40 c21 -22 46
            -40 55 -40 8 0 47 31 85 70 68 68 68 70 50 90 -10 11 -21 20 -24 20 -4 0 -30
            -23 -58 -52z"/>
            </g>
        </svg>
    }
        

    return (
        <React.Fragment>
            <ItemLeft>
                <Header>
                    <Heading>Shipment</Heading>
                </Header>
                <WrapperForm>
                    <Form onClick={() => handleShipment('gosend')} 
                    borderColor={ gosend ? '#1BD97B' : '#cccccc' } bgColor={ gosend ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                        <LeftRow>
                            <ItemName>GO-SEND</ItemName>
                            <ItemName>15,000</ItemName>
                        </LeftRow>
                        <RightRow>
                            { gosend ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                    <Form onClick={() => handleShipment('jne')} 
                     borderColor={ jne ? '#1BD97B' : '#cccccc' } bgColor={ jne ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                         <LeftRow>
                            <ItemName>JNE</ItemName>
                            <ItemName>9,000</ItemName>
                        </LeftRow>
                        <RightRow>
                            { jne ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                    <Form onClick={() => handleShipment('personalCourier')} 
                     borderColor={ personalCourier ? '#1BD97B' : '#cccccc' } bgColor={ personalCourier ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                        <LeftRow>
                            <ItemName>Personal Courier</ItemName>
                            <ItemName>29,000</ItemName>
                        </LeftRow>
                        <RightRow>
                            { personalCourier ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                </WrapperForm>
                <Divider></Divider>
                <Header>
                    <Heading>Payment</Heading>
                </Header>
                <WrapperForm>
                    <Form onClick={() => handlePayment('eWallet')} 
                    borderColor={ eWallet ? '#1BD97B' : '#cccccc' } bgColor={ eWallet ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                        <LeftRow>
                            <ItemName>e-Wallet</ItemName>
                            <ItemName>1,500,000 Left</ItemName>
                        </LeftRow>
                        <RightRow>
                            { eWallet ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                    <Form onClick={() => handlePayment('bankTransfer')} 
                    borderColor={ bankTransfer ? '#1BD97B' : '#cccccc' } bgColor={ bankTransfer ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                        <LeftRow>
                            <ItemName>Bank Transfer</ItemName>
                        </LeftRow>
                        <RightRow>
                            { bankTransfer ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                    <Form onClick={() => handlePayment('va')} 
                    borderColor={ va ? '#1BD97B' : '#cccccc' } bgColor={ va ? 'rgba(27, 217, 123, 0.1)' : '#ffffff' }>
                        <LeftRow>
                            <ItemName>Virtual Account</ItemName>
                        </LeftRow>
                        <RightRow>
                            { va ? <Icon></Icon> : null }
                        </RightRow>
                    </Form>
                </WrapperForm>
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
                            <ItemValue>{dropshipFee}</ItemValue>
                        </Item>
                        <Item>
                            <ItemName>{ shipment } shipment</ItemName>
                            <ItemValue>{ shipmentFee }</ItemValue>
                        </Item>
                        <Item>
                            <TotalCost marginTop="1rem" marginBottom="1rem">Total</TotalCost>
                            <TotalCost marginTop="1rem" marginBottom="1rem">{ dropshipFee != 0 ? '5,900' : '5,000' }</TotalCost>
                        </Item>
                        <Button onClick={ handleShipmentPayment }>{ payment ? payment : "Pay with ..." }</Button>
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
        paymentMethod: state.payment,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePageSummary: () => dispatch({ type: 'CHANGE_PAGE_SUMMARY' }),
        shipmentGojek: () => dispatch({ type: 'SHIPMENT_GOJEK' }),
        shipmentJne: () => dispatch({ type: 'SHIPMENT_JNE' }),
        shipmentPersonal: () => dispatch({ type: 'SHIPMENT_PERSONAL' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shipment);
