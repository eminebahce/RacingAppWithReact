import React from 'react';
import Renderer from 'react-test-renderer';
import RaceSelect from '../components/RaceSelect';

test('RaceSelect component renders raceSelect correctly', () => {
    let races = [
        {
            id: '2018-05-26_5_5',
            number : 5
        }
    ];
    const component = Renderer.create(
        <RaceSelect races = {races} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
