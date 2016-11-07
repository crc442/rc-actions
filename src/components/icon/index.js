import React, { Component, PropTypes } from 'react';

export default class Icon extends Component {
	static propTypes = {
		id: PropTypes.string,
		link: PropTypes.string,
		width: PropTypes.string,
		hover: PropTypes.bool
	};

	static defaultProps = {
		width: '40px',
		hover: false
	};

	constructor(props) {
		super(props);
	};

	render() {

		const { title, link, width, hover } = this.props;

		const iconStyles = {
			transition: 'all 0.2s',
			transform: hover ? 'translateY(-2px) scale(1.2)' : 'translateY(0px) scale(1)',
			transformOrigin: 'bottom',
			width: width,
			margin: '2px'
		};

		const iconNameStyles = {
			background: 'rgba(0, 0, 0, 0.8)',
			color: 'white',
			padding: '0px 6px',
			fontSize: '10px',
			borderRadius: '12px',
			position: 'absolute',
			top: '-20px',
			left: 'calc(50% - 16px)',
			textAlign: 'center',
			opacity: hover ? 1 : 0,
			transform: hover ? 'translateY(-6px)' : 'translateY(0px)',
			transition: 'all 0.1s'
		};

    return (
      <div>
      	<span style={ iconNameStyles }>{ title }</span>
      	<img style={ iconStyles } src={ link } alt={ title } />
      </div>
    );
  }

}
