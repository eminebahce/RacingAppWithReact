import React, {Component} from 'react';
import axios from 'axios';
import {ListGroup, ListGroupItem, Badge} from 'reactstrap';
import Moment from 'react-moment';
import RaceSelect from './RaceSelect';

const GAMES_URL = `https://www.atg.se/services/racinginfo/v1/api/games/`;

class GameSchedule extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            races: []
        });
        this.gameInfoSearch = this.gameInfoSearch.bind(this);
    }

    gameInfoSearch(gameId) {
        const url = `${GAMES_URL}${gameId}`;
        axios.get(url)
            .then(res => {
                this.setState({
                    races: res.data.races
                });
            });
    }

    componentWillUpdate(nextProps) {
        if (this.props.games !== nextProps.games) {
            this.setState({
                races: []
            });
        }
    }

    render() {
        const gameListItems = this.props.games.map((game) => {
            return (
                <ListGroupItem className="pointer" onClick={() => {
                    this.gameInfoSearch(game.id)
                }} key={game.id} action>
                    <Badge pill><Moment>{game.startTime}</Moment></Badge> {game.id}
                </ListGroupItem>
            );
        });
        return (
            <div>
                <div>
                    <ListGroup>
                        {gameListItems}
                    </ListGroup>
                </div>
                <div>
                    <RaceSelect races={this.state.races}/>
                </div>
            </div>
        );
    }

}

export default GameSchedule;