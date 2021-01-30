import PlayNumber from './components/PlayNumber';
import StarsDisplay from './components/StarsDisplay';
import React, {useState} from 'react';
import utils from './../libs/utils';

export default function StarMatch() {
    const [starsCount] = useState(utils.random(1,9));

    return (
        <div className="game">
            <div className="help">
                Pickk 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay count={starsCount}/>
                </div>
                <div className="right">
                    {utils.range(1,9).map(o=>
                            <PlayNumber key={o} number={o}/>)}
                </div>
            </div>
        </div>
    );
}