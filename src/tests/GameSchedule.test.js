import React from 'react';
import GameSchedule from '../components/GameSchedule';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<GameSchedule />', () => {
    test('should include game id and game start time', () => {
        let games = [
            {
                id: 'V75_2018-05-26_5_5',
                startTime: '2018-05-26T14:30:00'
            }
        ];

        const wrapper = mount(<GameSchedule games={games}/>);
        const startTime = wrapper.find('time').first().text();
        const id = wrapper.find('tbody').find('td').at(1).text();

        expect(startTime).toEqual('Sat May 26 2018 14:30:00 GMT+0300');
        expect(id).toEqual('V75_2018-05-26_5_5');
    });
});