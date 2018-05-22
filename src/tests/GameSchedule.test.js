import React from 'react';
import Renderer from 'react-test-renderer';
import GameSchedule from '../components/GameSchedule';

test('GameSchedule component renders gameSchedule correctly', () => {
    let games = [
        {
            id: 'V75_2018-05-26_5_5',
            startTime: '2018-05-26T14:30:00'
        }
    ];
    const component = Renderer.create(
        <GameSchedule games = {games} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
