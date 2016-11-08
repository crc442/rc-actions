## rc-actions [![npm](https://img.shields.io/npm/v/rc-actions.svg?style=flat-square)](https://github.com/crc442/rc-actions.git)
Reactions in React.

<img src="http://wolfofsiliconvalley.com/reactions/reactions.gif">

Use facebook's reactions like tooltip to do your own actions.

<br>
#### Install
 ```
 $ npm install --save rc-actions
 ```

<br>
#### Use

[Demo](https://crc442.github.io/rc-actions/) from the [example](https://github.com/crc442/rc-actions/tree/master/example) folder.

<br>
##### How to: 
 -> Array of actions.
```javascript
const images = [
      {id: 'like', description: 'Like', img: 'http://i.imgur.com/LwCYmcM.gif'},
      {id: 'love', description: 'Love', img: 'http://i.imgur.com/k5jMsaH.gif'},
      {id: 'haha', description: 'Haha', img: 'http://i.imgur.com/f93vCxM.gif'},
      {id: 'yay', description: 'Yay', img: 'http://i.imgur.com/a44ke8c.gif'},
];
```

-> Your element on which reactions need to be mounted.
```javascript
render() {
		<button>Actions</button>
}
```

-> import and add reactions
```javascript
import Reactions from 'rc-actions'

... 

render () {
	<Reactions items={images}>
		<button>Actions</button>
    </Reactions> 
}
```

-> Done. Onclick, you get the 'id' of the action clicked.

Look at the [example](https://github.com/crc442/rc-actions/tree/master/example) for more details.


<br>
#### Develop

Build:

```
$ make build
```

Start dev server:

```
$ make start
```

<br>
---

![](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)

> [imcrc.me](http://wolfofsiliconvalley.com) &nbsp;&middot;&nbsp;
> GitHub [@crc442](https://github.com/crc442) &nbsp;&middot;&nbsp;
