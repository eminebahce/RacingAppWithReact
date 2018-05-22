import React from 'react';
import GameSearch from '../components/GameSearch';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {mount} from 'enzyme';

Enzyme.configure({adapter: new Adapter()});

describe('<GameSearch />', () => {
    test('should include four game types', () => {
        const wrapper = mount(<GameSearch/>);

        const gameV75 = wrapper.find('h5').at(0).text();
        const gameV65 = wrapper.find('h5').at(1).text();
        const gameV64 = wrapper.find('h5').at(2).text();
        const gameV4 = wrapper.find('h5').at(3).text();

        expect(gameV75).toEqual('Game V75');
        expect(gameV65).toEqual('Game V65');
        expect(gameV64).toEqual('Game V64');
        expect(gameV4).toEqual('Game V4');
    });
});