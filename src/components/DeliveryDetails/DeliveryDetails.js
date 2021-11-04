import React from 'react';
import styled from 'styled-components';

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
margin-top: 0px;`;

const Label = styled.label`
font-size: 14px;
line-height: 17px;
color: #2D2A40;
opacity: 0.8;`;

const Checkbox = styled.input`
background: #FFFFFF;
border: 2px solid #1BD97B;
box-sizing: border-box;`;

const WrapperForm = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;`;

const Form = styled.div`
display: flex;
flex: ${ props => props.percent || '40%' }`;

const Input = styled.input`
width: 100%;
height: 60px;
font-size: 16px;
line-height: 19px;
color: #000000;
padding-left: 10px;
opacity: 0.4;
margin-bottom: 10px;
margin-left: ${ props => props.marginLeft || '0' };
margin-right: ${ props => props.marginRight || '0' }`;

const TextArea = styled.textarea`
width: 100%;
height: 120px;
font-size: 16px;
line-height: 19px;
color: #000000;
padding-left: 10px;
opacity: 0.4;
margin-bottom: 10px;
margin-left: ${ props => props.marginLeft || '0' };
margin-right: ${ props => props.marginRight || '0' }`;

const DeliveryDetails = () => {

    return (
        <React.Fragment>
            <Header>
                <Heading>Delivery Details</Heading>
                <div>
                    <Checkbox type="checkbox"></Checkbox> <Label>Send as Dropshipper</Label>
                </div> 
            </Header>

            <WrapperForm>
                <Form percent="60%"><Input marginRight="30px" placeholder="Name"></Input> </Form>
                <Form><Input placeholder="Dropshipper name"></Input> </Form>
                <Form percent="60%"><Input marginRight="30px" placeholder="Phone number"></Input> </Form>
                <Form><Input placeholder="Dropshipper number"></Input> </Form>
                <Form percent="60%"><TextArea marginRight="30px" placeholder="Delivery Address"></TextArea> </Form>
                <Form></Form>
            </WrapperForm>
        </React.Fragment>
    )
}

export default DeliveryDetails;
