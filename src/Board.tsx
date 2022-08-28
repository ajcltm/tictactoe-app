import React from 'react';

interface BoardProps {
    squares: string[]
}

interface StateProps {
    value: string
    index : number
}

function Square(props: StateProps) {
    const print = () => console.log(props.index)
    return <button className="col square" onClick={print}>{props.value}</button>
}

class Board extends React.Component<BoardProps> {
    renderSquare(i: number) {
        return <Square value={this.props.squares[i]} index={i} />
    }
    render() {
        return (
            <div id="game" className="container">
                <div className="row game-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="row game-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="row game-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board;