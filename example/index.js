import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Reactions from '../src'

const images = [
      {id: 'like', description: 'Like', img: 'http://i.imgur.com/LwCYmcM.gif'},
      {id: 'love', description: 'Love', img: 'http://i.imgur.com/k5jMsaH.gif'},
      {id: 'haha', description: 'Haha', img: 'http://i.imgur.com/f93vCxM.gif'},
      {id: 'yay', description: 'Yay', img: 'http://i.imgur.com/a44ke8c.gif'},
      {id: 'wow', description: 'Wow', img: 'http://i.imgur.com/9xTkN93.gif'},
      {id: 'sad', description: 'Sad', img: 'http://i.imgur.com/tFOrN5d.gif'},
      {id: 'angry', description: 'Angry', img: 'http://i.imgur.com/1MgcQg0.gif'}
];

// const images = [
//       {id: 'Like', img: 'http://image.flaticon.com/icons/png/128/187/187132.png'},
//       {id: 'Love', img: 'http://image.flaticon.com/icons/png/128/187/187132.png'},
//       {id: 'Haha', img: 'http://image.flaticon.com/icons/png/128/187/187133.png'},
//       {id: 'Yay', img: 'http://image.flaticon.com/icons/png/128/187/187134.png'},
//       {id: 'Wow', img: 'http://image.flaticon.com/icons/png/128/187/187135.png'},
//       {id: 'Sad', img: 'http://image.flaticon.com/icons/png/128/187/187132.png'},
//       {id: 'Angry', img: 'http://image.flaticon.com/icons/png/128/187/187132.png'}
// ];

class App extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
      reaction: 'Like',
      active: false
    }
  }

 onUpdate(id) {
  let reaction = images.filter(e => e.id == id)[0].description;
  this.setState({
    reactionId: id,
    reaction: reaction,
    active: true
  });
 }

  render() {

    const { reaction, reactionId, active } = this.state;
    const likeStyle = `button ${ reactionId } ${ active ? '' : 'inactive' }`;
    
    return ( 
      <div className="container">
        <div className="buttons">
          <button className="button"> Comment </button>
          <Reactions onUpdate={this.onUpdate.bind(this)} items={images}>
            <button className={ likeStyle }> 
              { reaction } 
            </button>
          </Reactions> 
          <button className="button"> Share </button>
        </div>
      </div>
    );
  }

}

ReactDOM.render(<App />, document.querySelector('#app'))