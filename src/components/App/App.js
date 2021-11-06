import React, { Component, } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import './App.css';
import styled from 'styled-components';
import BreadCrumbs from '../elements/BreadCrumb/BreadCrumbs';
import Summary from '../Summary/Summary';
import Navi from '../Navi/Navi';
import Delivery from '../Delivery/Delivery';
import Shipment from '../Shipment/Shipment';
import {connect} from 'react-redux';

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
                        { this.props.page !== 'summary' ? <BreadCrumbs></BreadCrumbs> : null }
                        <Content>
                            { this.props.page === 'delivery' ? <Delivery></Delivery> : null  }
                            { this.props.page === 'shipment' ? <Shipment></Shipment> : null  }
                            { this.props.page === 'summary' ? <Summary></Summary> : null  }
                        </Content>
                    </Container>
                    {/* <Switch>
                        <Route component={NotFound} />
                    </Switch> */}
                </React.Fragment>
            </Router>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        page: state.page
    }
}
export default connect(mapStateToProps)(App);
