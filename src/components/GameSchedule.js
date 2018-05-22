import React, {Component} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
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
        let gameList = '';
        if (Object.keys(this.props.games).length !== 0) {
            const gameListItems = this.props.games.map((game) => {
                return (
                    <tr className="pointer" onClick={() => {
                        this.gameInfoSearch(game.id)
                    }} key={game.id}>
                        <td className="tableRowAlign2"><Moment>{game.startTime}</Moment></td>
                        <td className="tableRowAlign2">{game.id}</td>
                    </tr>
                );
            });

            gameList = (
                <Table size="sm" striped>
                    <thead>
                    <tr>
                        <th colSpan="2" className="tableRowAlign">
                            Game Schedule
                        </th>
                    </tr>
                    <tr>
                        <th className="tableRowAlign2">Game Date</th>
                        <th className="tableRowAlign2">Game Identifier</th>
                    </tr>
                    </thead>
                    <tbody>
                    {gameListItems}
                    </tbody>

                </Table>
            );
        }
        return (
            <div>
                <div>
                    {gameList}
                </div>
                <div>
                    <RaceSelect races={this.state.races}/>
                </div>
            </div>
        );
    }

}

export default GameSchedule;