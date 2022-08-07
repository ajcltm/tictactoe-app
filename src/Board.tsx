import React from 'react';

interface BoardProps {
    squares: string[]
}

interface BoardStates {

}

class TestReactComponent<T> {
    props: T;

    constructor(param: T) {
        this.props = param
    }
    render(): string {
        return "something"
    }
}

class MyComponent extends TestReactComponent<BoardProps> {
    constructor(param: BoardProps) {
        super(param)
    }

    render() {
        return "MyComponent " + this.props.squares[0]
    }
}

class FixTypeTest {
    test(param: number) {
        console.log(param)
    }
}

interface StateProps {
    value: string
}

function Square(props: StateProps) {
    return <button className="col square">{props.value}</button>
}

class Board extends React.Component<BoardProps> {
    renderSquare(i: number) {
        return <Square value={this.props.squares[i]} />
    }
    render() {
        
       // let myComponent = new MyComponent({squares: ['x', 'o']})
       // console.log(myComponent.render())

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