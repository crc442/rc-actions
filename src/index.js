import React, { Component, PropTypes } from 'react';
import Icon from './components/icon';
import IconContainer from './components/iconContainer';

export default class Reactions extends Component {

	constructor(props) {
		super(props);
	}

	static propTypes = {
		items: PropTypes.array.isRequired
	}

	state = {
		open: false 
	}

	toggleOpen(openState) {
		this.setState({
			open: openState
		});
	}

  render() {
  	const { open } = this.state;
  	const items = this.props.items;
  	const width = items.length * 50 + 30;

  	const optionsStyles = {
  		position: 'relative'
  	};

  	const elementsStyles = {
  		listStyle: 'none',
		padding: 0,
		margin: '0 4px',
		background: '#FFF',
		boxShadow: '0 0 0 1px rgba(0, 0, 0, .08), 0 2px 2px rgba(0, 0, 0, .15)',
		borderRadius: '30px',
		visibility: open ? 'visible' : 'hidden',
		opacity: open ? 1 : 0,
		transition: 'all 0.1s 0.3s',
		display: 'inline-block',
		position: 'absolute',
		width: `${width}px`,
		left: '-10px',
		top: '-130%'
  	}

  	const listItems = items.map((item, i) => {
  		return <IconContainer key={ item.id } onUpdate={ this.props.onUpdate }
  						index={ i } img={ item.img } id={ item.id } show={ open }>		
      			</IconContainer>
  	});

    return (
      	<span style={ optionsStyles }  
      			onMouseEnter={() => this.toggleOpen(true) } 
      			onMouseLeave={() => this.toggleOpen(false) } >
					<ul style={ elementsStyles }>
      			{ listItems }
      		</ul>
      		<span>
      			{ this.props.children }
      		</span>
      	</span>
    );
  }

}
