export default function StarMatch(){
    return (
        <div className="game">
            <div className="help">
                Pickk 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                    <div className="star"/>
                </div>
                <div className="right">
                    <button className="number">1</button>
                    <button className="number">2</button>
                    <button className="number">3</button>
                    <button className="number">4</button>
                    <button className="number">5</button>
                    <button className="number">6</button>
                    <button className="number">7</button>
                    <button className="number">8</button>
                    <button className="number">9</button>
                </div>
            </div>
        </div>
    )
}