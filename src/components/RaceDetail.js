import React, {Component} from 'react';
import {Badge, Button, Popover, PopoverBody, PopoverHeader, Table} from 'reactstrap';
import Moment from 'react-moment';

class RaceDetail extends Component {
    constructor(props) {
        super(props);

        this.state = ({});
        this.toggle = this.toggle.bind(this);
    }

    toggle(id) {
        this.setState({
            [id]: !this.state[id]
        });
    }

    componentWillReceiveProps(nextProps) {
        if (Object.keys(nextProps.race).length !== 0) {
            nextProps.race.starts.map((start) => {
                let buttonId = `popoverBtn${nextProps.race.id}${start.number}`;
                this.setState({
                    [buttonId]: false
                });
            });
        }
    }

    render() {
        let starts = '';
        let raceData = '';
        if (Object.keys(this.props.race).length !== 0) {
            starts = this.props.race.starts.map((start) => {
                let buttonId = `popoverBtn${this.props.race.id}${start.number}`;
                return (
                    <tr>
                        <td>{start.number}</td>
                        <td>{start.horse.name}</td>
                        <td>{start.driver.firstName} {start.driver.lastName}</td>
                        <td>
                            <div>
                                <Button color="info" id={buttonId} onClick={() => this.toggle(buttonId)}>
                                    +
                                </Button>
                                <Popover placement="bottom" isOpen={this.state[buttonId]} target={buttonId}
                                         toggle={() => this.toggle(buttonId)}>
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