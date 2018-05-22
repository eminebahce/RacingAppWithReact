import React from 'react';
import Renderer from 'react-test-renderer';
import RaceDetail from '../components/RaceDetail';

it('RaceDetail component renders raceDetail correctly', () => {
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
    const component = Renderer.create(
        <RaceDetail race={race}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
