'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to our trading cards site!</p>
    <a href="/cards">Click here to view our cards</a>
    <img src="/static/img/balloonicorn.jpg"></img>
    <a href="/about">Click here to read about the author</a>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));


// /// lab's way of doing it: 
// function Homepage() {
//   return (
//     <React.Fragment>
//       <h1>Welcome to Balloonicorn&apos;s Trading Card Site!</h1>
//       <div>
//         <a href="/cards">Go to the cards page</a>
//       </div>
//       <div>
//         <a href="/about">Go to the about page</a>
//       </div>
//       <img src="/static/img/balloonicorn.jpg" alt="" />
//     </React.Fragment>
//   );
// }

// ReactDOM.render(<Homepage />, document.querySelector('#app'));
