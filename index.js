const list =
    React.createElement('div', {className: 'me'},
      React.createElement('h1', {}, 'An Awesome Person'),
      React.createElement('p', {}, 'Who is learning React'),
      React.createElement('ul', {},
        [
          React.createElement('li', { className: 'myInterests' }, 'React'),
          React.createElement('li', { className: 'myInterests' }, 'Ice Cream'),
          React.createElement('li', { className: 'myInterests' }, 'Harry Potter')
        ]
      ));

  ReactDOM.render(list, document.getElementById('main'));
