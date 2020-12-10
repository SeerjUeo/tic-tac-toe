import React, {Component} from 'react'
import Square from './Square'

export default class Board extends Component {
	constructor(props) {
		super(props)

		this.state = {
			squares: Array(9).fill(null),
			isXTurn: true,
			win: ""
		}
	}

	onSquareClick(index) {
		const squares = [...this.state.squares];
		if (squares[index]) return
		
		this.checkEnd(index);
		squares[index] = this.state.isXTurn ? 'X' : '0'
		this.setState({
			squares,
			isXTurn: !this.state.isXTurn
		})
	}

	async checkEnd(index) {
		const squares = [...this.state.squares];
		if (squares[0] == squares[1] == squares[2] == index || 
			squares[3] == squares[4] == squares[5] == index ||
			squares[6] == squares[7] == squares[8] == index ||
			
			squares[0] == squares[3] == squares[6] == index || 
			squares[1] == squares[4] == squares[7] == index ||
			squares[2] == squares[5] == squares[8] == index ||
			
			squares[0] == squares[4] == squares[8] == index || 
			squares[2] == squares[4] == squares[6] == index) {
				this.state.win = this.state.squares[index];
			}
	}

	render() {
		return <div className="board">
			<h1>Wiener: {this.state.win}</h1>
			{
				this.state.squares.map( 
					(value, index) => <Square key={index}
					value={value}
					onSquareClick={() => this.onSquareClick(index)}
				/>)
			}
		</div>
	}
}