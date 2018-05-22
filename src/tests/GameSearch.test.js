import React from 'react';
import Renderer from 'react-test-renderer';
import GameSearch from '../components/GameSearch';

test('GameSearch component renders gameSearch correctly', () => {
    const component = Renderer.create(
        <GameSearch/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
