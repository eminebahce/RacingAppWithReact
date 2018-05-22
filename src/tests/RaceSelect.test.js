import React from 'react';
import RaceSelect from '../components/RaceSelect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<RaceSelect />', () => {
    test('should include game number and game id', () => {
        let races = [
            {
                id: '2018-05-26_5_5',
                number : 5
            }
        ];

        const wrapper = mount(<RaceSelect races={races}/>);
        const gameNumber = wrapper.find('button').text();
        const gameId = wrapper.find('button').prop('id');

        expect(gameNumber).toEqual('Race Number: 5');
        expect(gameId).toBe("2018-05-26_5_5");
    });
});