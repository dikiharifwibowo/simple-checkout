import React, { useState } from "react";
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {connect} from 'react-redux';
const ItemLeft = styled.div`
padding: 20px 30px 0px 40px;
flex-grow: 1;
padding-bottom: 20px;
display: flex;
flex-basis: 65%;
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
font-size: ${ props => props.fontSize || '32px' };
line-height: 44px;
border-bottom: 4px solid #EEEEEE;
width: ${ props => props.width || '260px' };
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

const ContentForm = styled.form`
display: flex;`;

const Delivery = ({dropshipFee, handleChangePageShipment, enableDropship, disableDropship}) => {
    const [email, setEmail] = useState("John@gmail.com");
    const [phone, setPhone] = useState("123456789012");
    const [address, setAddress] = useState("yogyakarta");
    const [name, setName] = useState("dikiharifwibowo");
    const [dropshipPhone, setDropshipPhone] = useState("1234567890");
    const [dropshipper, setDropshipper] = useState(true);

    const schema = yup.object().shape({
        email: yup.string().email('Email is invalid').required('Email is required'),
        phone: yup.string().matches(new RegExp('[0-9]{7}')).required(),
        address: yup.string().min(6).max(20).required(),
        name: !dropshipper ? yup.string().required() : yup.string(),
        dropshipPhone: !dropshipper ? yup.string().matches(new RegExp('[0-9]{7}')).required() : yup.string().matches(new RegExp('[0-9]{7}')),
      });

      
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    let handleChangeDropshipper = (e) => {
        if(e.target.checked) { 
            setDropshipper(false) 
            enableDropship()
        } else { 
            setDropshipper(true)  
            disableDropship() 
        }
    }

    const onSubmitHandler = (data) => {
        setEmail(data.email);
        setPhone(data.phone);
        setAddress(data.address);
        handleChangePageShipment();
    };
    return (
        <React.Fragment>
            <ContentForm onSubmit={handleSubmit(onSubmitHandler)}>
                <ItemLeft>
                    <Header>
                        <Heading>Delivery Details</Heading>
                        <div>
                            <Checkbox onClick={handleChangeDropshipper} type="checkbox"></Checkbox> <Label>Send as Dropshipper</Label>
                        </div> 
                    </Header>

                    <WrapperForm>
                        <Form percent="60%"><Input {...register("email")} marginRight="30px" placeholder="Email"></Input> </Form>
                        <Form><Input disabled = {(dropshipper)? "disabled" : ""}  {...register("name")}  placeholder="Dropshipper name"></Input> </Form>
                        <Form percent="60%"><Input {...register("phone")} marginRight="30px" placeholder="Phone number"></Input> </Form>
                        <Form><Input disabled = {(dropshipper)? "disabled" : ""}  {...register("dropshipPhone")}  placeholder="Dropshipper number"></Input> </Form>
                        <Form percent="60%"><TextArea {...register("address")} marginRight="30px" placeholder="Delivery Address"></TextArea> </Form>
                        <Form></Form>
                    </WrapperForm>
                </ItemLeft>
                <ItemRight>
                    <Wrapper>
                        <Top>
                            <Heading fontSize="24px" width="130px">Summary</Heading>
                            <ItemPurchased>10 items purchased</ItemPurchased>
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
                                <TotalCost marginTop="1rem" marginBottom="1rem">Total</TotalCost>
                                <TotalCost marginTop="1rem" marginBottom="1rem">{ dropshipFee != 0 ? '5,900' : '5,000' }</TotalCost>
                            </Item>
                            <Button type="submit">Continue to Payment</Button>
                        </Bottom>
                    </Wrapper>
                </ItemRight> 
            </ContentForm>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => {
    return {
        dropshipFee: state.dropshipFee,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePageShipment: () => dispatch({ type: 'CHANGE_PAGE_SHIPMENT' }),
        enableDropship: () => dispatch({ type: 'ENABLE_DROPSHIP' }),
        disableDropship: () => dispatch({ type: 'DISABLE_DROPSHIP' }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
