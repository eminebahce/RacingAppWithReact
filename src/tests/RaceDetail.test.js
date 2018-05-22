import React from 'react';
import RaceDetail from '../components/RaceDetail';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

describe('<RaceDetail />', () => {
    test('should include race, start, horse, driver and trainer information', () => {
        let race = {
            id: '1',
            number: 5,
            name: 'Byggnads Prostataloppet - Bronsdivisionen, Final',
            startTime: '2018-05-26T14:30:00',
            starts: [
                {
                    number: '1',
                    horse: {
                        name: 'Disco Volante',
                        trainer: {
                            firstName: 'Stefan',
                            lastName: 'Melander'
                        },
                        pedigree: {
                            father: {
                                name: 'Scarlet Knight'
                            }
                        }
                    },
                    driver: {
                        firstName: 'Ulf',
                        lastName: 'Ohlsson'
                    }
                }
            ]
        };

        const wrapper = mount(<RaceDetail race={race}/>);
        const gameNumber = wrapper.find('span').first().text();
        const gameName = wrapper.find('span').at(1).text();
        const startTime = wrapper.find('time').first().text();
        const startNumber = wrapper.find('tbody').find('td').first().text();
        const horseName = wrapper.find('tbody').find('td').at(1).text();
        const driverFirstAndLastName = wrapper.find('tbody').find('td').at(2).text();

        expect(gameNumber).toEqual('5');
        expect(gameName).toEqual('Byggnads Prostataloppet - Bronsdivisionen, Final');
        expect(startTime).toEqual('Sat May 26 2018 14:30:00 GMT+0300');
        expect(startNumber).toEqual('1');
        expect(horseName).toEqual('Disco Volante');
        expect(driverFirstAndLastName).toEqual('Ulf Ohlsson');
    });
});