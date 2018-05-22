import React, {Component} from 'react';
import {Badge, Button, Popover, PopoverBody, PopoverHeader, Table} from 'reactstrap';
import Moment from 'react-moment';

class RaceDetail extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            buttonIds: []
        });
        this.toggle = this.toggle.bind(this);
    }

    toggle(toggledButtonId) {
        this.setState({
            [toggledButtonId]: !this.state[toggledButtonId]
        });
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.race).length !== 0) {
            let newButtonIds = [];
            nextProps.race.starts.map((start, index) => {
                newButtonIds[index] = `btn${nextProps.race.id}${start.number}`;
                this.setState({
                    [newButtonIds[index]]: false
                });
            });

            this.setState({
                buttonIds: newButtonIds
            });
        }
    }

    render() {
        let starts = '';
        let raceData = '';
        if (Object.keys(this.props.race).length !== 0) {
            starts = this.props.race.starts.map((start, index) => {
                return (
                    <tr key={this.state.buttonIds[index]}>
                        <td>{start.number}</td>
                        <td>{start.horse.name}</td>
                        <td>{start.driver.firstName} {start.driver.lastName}</td>
                        <td>
                            <div>
                                <Button color="info" id={this.state.buttonIds[index]} onClick={() => this.toggle(this.state.buttonIds[index])}>
                                    +
                                </Button>
                                <Popover placement="bottom" isOpen={this.state[this.state.buttonIds[index]]} target={this.state.buttonIds[index]}
                                         toggle={() => this.toggle(this.state.buttonIds[index])}>
                                    <PopoverHeader>Information</PopoverHeader>
                                    <PopoverBody>
                                        <div>
                                            Trainer: {start.horse.trainer.firstName} {start.horse.trainer.lastName}
                                        </div>
                                        <div>
                                            Horse Father: {start.horse.pedigree.father.name}
                                        </div>
                                    </PopoverBody>
                                </Popover>
                            </div>
                        </td>
                    </tr>
                );
            });

            raceData = (
                <div>
                    <Table size="sm" striped responsive>
                        <thead>
                        <tr>
                            <th colSpan="4" className="tableRowAlign">
                                <Badge color="success"
                                    pill>{this.props.race.number}</Badge> : {this.props.race.name} : <Moment>{this.props.race.startTime}</Moment>
                            </th>
                        </tr>
                        <tr>
                            <th>Start #</th>
                            <th>Horse Name</th>
                            <th>Driver</th>
                            <th>Info</th>
                        </tr>
                        </thead>
                        <tbody>
                        {starts}
                        </tbody>
                    </Table>
                </div>
            );
        }
        return (
            <div>{raceData}</div>
        );
    }
}

export default RaceDetail;