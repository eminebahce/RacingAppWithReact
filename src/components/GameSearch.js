import React, {Component} from 'react';
import axios from 'axios';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row} from 'reactstrap';
import GameSchedule from './GameSchedule';

const PRODUCTS_URL = `https://www.atg.se/services/racinginfo/v1/api/products/`;

class GameSearch extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            games: []
        });
        this.gameSearchByType = this.gameSearchByType.bind(this);
    }

    gameSearchByType(gameType) {
        const url = `${PRODUCTS_URL}${gameType}`;
        axios.get(url)
            .then(res => {
                if (res.data.upcoming === undefined ||res.data.upcoming === null ) {
                    this.setState({
                        games: res.data.results
                    });
                } else {
                    this.setState({
                        games: res.data.upcoming,
                    });
                }
            });
    }

    render() {
        return (
            <div className="formatCardClass1">
                <Row className="formatCardClass1">
                    <Col sm="3">
                        <Card>
                            <CardImg top width="25%"
                                     src="http://www.swedishhorseracing.com/assets/images/racethumbs/v75.png"
                                     alt="V75 image"/>
                            <CardBody>
                                <CardTitle>Game V75</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Click button to see the schedule table for game type V75</CardText>
                                <Button onClick={event => this.gameSearchByType(event.target.textContent)}
                                        className="btn btn-success">
                                    V75
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="25%"
                                     src="http://www.swedishhorseracing.com/assets/images/racethumbs/v65.png"
                                     alt="V65 image"/>
                            <CardBody>
                                <CardTitle>Game V65</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Click button to see the schedule table for game type V65</CardText>
                                <Button onClick={event => this.gameSearchByType(event.target.textContent)}
                                        className="btn btn-success">
                                    V65
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="25%"
                                     src="http://www.swedishhorseracing.com/assets/images/racethumbs/v64.png"
                                     alt="V64 image"/>
                            <CardBody>
                                <CardTitle>Game V64</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Click button to see the schedule table for game type V64</CardText>
                                <Button onClick={event => this.gameSearchByType(event.target.textContent)}
                                        className="btn btn-success">
                                    V64
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="3">
                        <Card>
                            <CardImg top width="25%"
                                     src="http://www.swedishhorseracing.com/assets/images/racethumbs/v4.png"
                                     alt="V4 image"/>
                            <CardBody>
                                <CardTitle>Game V4</CardTitle>
                                <CardSubtitle></CardSubtitle>
                                <CardText>Click button to see the schedule table for game type V4</CardText>
                                <Button onClick={event => this.gameSearchByType(event.target.textContent)}
                                        className="btn btn-success">
                                    V4
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row className="formatCardClass1">
                    <Col sm="12">
                        <GameSchedule games={this.state.games}/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default GameSearch;
