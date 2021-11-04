import React, { Component } from 'react';
import { BASE_URL, API_KEY } from '../../config'
import Spinner from '../elements/Spinner/Spinner';
import { Row, Col, Container } from 'react-bootstrap';
import no_img from '../elements/img/no_image.jpg';
import PageTitle from '../elements/PageTitle/PageTitle';

class Home extends Component {

    state = {
        movies: [],
        currentPage: 1,
        totalPage: 0,
        loading: false, // Loading Effect
        searchWord: "",
    }

    componentDidMount() {
        const endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage}`;
        this.getRequest(endPoint);

        this.setState({
            loading: true
        })
    };

    searchMovies = searchWord => { // This function trigger the Get Request Function

        let endPoint = "";
        this.setState({
            movies: [],
            searchWord,
            loading: true,
            currentPage: 0,
        });

        if (this.state.searchWord === "") {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage + 1}`;
        }
        else {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=${this.state.searchWord}&page=${this.state.currentPage + 1}`
        }

        this.getRequest(endPoint)
    }

    loadMoreMovies = () => {
        let endPoint = "";
        this.setState({
            loading: true,
        });
        if (this.state.searchWord === "") {
            console.log("current page", this.state.currentPage)
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=Batman&page=${this.state.currentPage+1}`;
        }
        else {
            endPoint = `${BASE_URL}/?apikey=${API_KEY}&s=${this.state.searchWord}&page=${this.state.currentPage+1}`
        }
        this.setState({
            currentPage: this.state.currentPage+1,
        });
        this.getRequest(endPoint)
    }

    getRequest = (endPoint) => {
        fetch(endPoint)
            .then(response => response.json())
            .then(data => {
                if(data.Response === 'True') {
                    this.setState({
                        movies: [...this.state.movies, ...data.Search],
                        currentPage: this.state.currentPage,
                        totalPage: data.totalResults,
                        loading: false
                    })
                } else {
                    this.setState({
                        movies:[],
                        currentPage: 1,
                        totalPage: 0,
                        loading: false
                    })
                }
                
            })
    };

    render() {
        const { searchWord, movies, loading, currentPage, totalPage } = this.state
        //console.log("movie", movies)
        return (
            <>
             
                <Container>
                    <Row>
                        <Col sm = {6} className = "offset-sm-3 text-center">
                            {searchWord ? <h2 >Pencarian untuk {searchWord} </h2> : <PageTitle  title = "Film Kamu"/> }
                        </Col>
                        
                        <Col sm = {6} className = "offset-sm-3 text-center">
                            {movies.length === 0 ? <h2 >Not Found</h2> : ''}
                        </Col>
                    </Row>
                   
                </Container>
                {loading ? <Spinner /> : null}
            </>
        )
    }
}

export default Home;