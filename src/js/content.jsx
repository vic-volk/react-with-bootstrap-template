import React from 'react';
import ReactDOM from 'react-dom';
 
class Content extends React.Component {
  render() {
    return <h1>Main-Content</h1>
  }
}
 
ReactDOM.render(<Content/>, document.getElementById('content'));
