'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to our trading cards site!</p>
    <a href="/cards">Click here to view our cards</a>
    <img src="/static/img/balloonicorn.jpg"></img>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
