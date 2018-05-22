import React, {Component} from 'react';
import {Row, Col, Button, ButtonGroup} from 'reactstrap';
import RaceDetail from './RaceDetail';

class RaceSelect extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            race: {}
        });
        this.selectRace = this.selectRace.bind(this);
    }

    selectRace(selectedRace) {
        this.setState({
            race: selectedRace
        });
    }

    componentWillReceiveProps() {
        this.setState({
            race: {}
        });
    }

    render() {
        let raceNumbers = '';
        if (this.props.races !== undefined && this.props.races.length !== 0) {
            raceNumbers = this.props.races.map((race) => {
                return (
                    <Button color="success" onClick={() => {
                        this.selectRace(race)
                    }} id={race.id} key={race.id}>
                        Race Number: {race.number}
                    </Button>
                );
            });
        }
        return (
            <div className="formatCardClass2">
                <Row>
                    <Col sm="12">
                        <div className="text-center">
                            <div className="btn-group">
                                <ButtonGroup>
                                    {raceNumbers}
                                </ButtonGroup>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="formatCardClass3">
                    <Col sm="12">
                        <RaceDetail race={this.state.race}/>
                    </Col>
                </Row>
            </div>
        );
    }

}

export default RaceSelect;