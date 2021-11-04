import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import './App.css';
import styled from 'styled-components';
import BreadCrumbs from '../elements/BreadCrumb/BreadCrumbs';
import Summary from '../Summary/Summary';
import Navi from '../Navi/Navi';
import Delivery from '../Delivery/Delivery';

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

class App extends Component {

    render() {

        return (
            <Router>
                <React.Fragment>
                    <Container>
                        <Navi></Navi>
                        <BreadCrumbs></BreadCrumbs>
                        <Content>
                            <Delivery></Delivery>
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
