import React, {Component} from 'react';
import {ListGroup, ListGroupItem, Badge, Row, Col} from 'reactstrap';

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
                    <ListGroupItem className="pointer" onClick={() => {
                        this.selectRace(race)
                    }} key={race.id} action>
                        Race #: <Badge pill>{race.number}</Badge>
                    </ListGroupItem>
                );
            });
        }
        return (
            <div className="formatCardClass2">
                <Row>
                    <Col sm="2">
                        <ListGroup>
                            {raceNumbers}
                        </ListGroup>
                    </Col>
                    <Col sm="10"></Col>
                </Row>
            </div>
        );
    }

}

export default RaceSelect;