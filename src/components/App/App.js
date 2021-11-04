import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import './App.css';
import styled from 'styled-components';
import BreadCrumbs from '../elements/BreadCrumb/BreadCrumbs';
import Summary from '../Summary/Summary';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const Container = styled.section`
background: #FFFFFF;
box-shadow: 2px 10px 20px rgba(255, 138, 0, 0.1);
border-radius: 4px;
height: 550px;
margin: 55px 50px 95px 50px;
display: flex;
flex-direction: column;`;

const Content = styled.div`
display: flex;
height: 100%;
flex-wrap: nowrap;
margin-bottom: 20px;
justify-content-space-between`;

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

class App extends Component {

    render() {

        return (
            <Router>
                <React.Fragment>
                    <Container>
                        <BreadCrumbs></BreadCrumbs>
                        <Content>
                            <ItemLeft>
                                <DeliveryDetails></DeliveryDetails>
                            </ItemLeft>
                            <ItemRight>
                                <Summary></Summary>
                            </ItemRight>     
                        </Content>
                    </Container>
                    {/* <Switch>
                        <Route exact path="/" component={Home} />
                        <Route component={NotFound} />
                    </Switch> */}
                </React.Fragment>
            </Router>
        )
    }

}
export default App;
