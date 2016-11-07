import React, { Component, PropTypes } from 'react';
import Icon from '../icon';

export default class IconContainer extends Component {
	static propTypes = {
		show: PropTypes.bool,
		onUpdate: PropTypes.func
	};

	static defaultProps = {
		show: false
	};

	state = {
		selected: '',
		hover: false
	}

	constructor(props) {
		super(props);
	}

	clicked(id) {
		this.setState({
			selected: id 
		});
		this.props.onUpdate(id);
	}

	hovering(hoverState) {
		this.setState({
			hover: hoverState
		});
	}

	render() {

		const { index, img, id, show } = this.props;
		const delay = index / 20 + 0.2;

		const divStyles = {
			position: 'relative',
			display: 'inline-block',
			padding: '6px 4px 0px',
			transition: `transform 0.2s ${delay}s cubic-bezier(.76,.26,.28,1.4), opacity 0.1s ${delay}s`,
			transform: show ? 'translateY(0px) scale(1)' : 'translateY(30px) scale(0.8)',
			opacity: show ? 1 : 0 ,
			cursor: 'pointer'
  	};

		return (
			<li style={ divStyles } 
					onClick={() => this.clicked(id)}
					onMouseEnter={() => this.hovering(true)}
					onMouseLeave={() => this.hovering(false)}>
					<Icon index={ index } link={ img } id={ id } hover={ this.state.hover }/> 
			</li>
		);
	}
}
