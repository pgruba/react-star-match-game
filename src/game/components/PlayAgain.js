import React from 'react';

const PlayAgain = props =>{
    return (
        <div className='game-done'>
            <button onClick={props.reset}>Play Again</button>
        </div>
    );
};

export default PlayAgain;