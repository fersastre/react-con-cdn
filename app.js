var Greeting = React.createClass({
    render: function() {
        return (
            React.createElement('h1', null, this.props.algo , this.props.name) // this.props.name es lo que le pasamos por parametro a la clase
          );
    }
  });
 

  var Clock = React.createClass({
    render: function() {
      var time = this.props.hour < 12 ? 'Morning' : 'Afternoon';
      return (
        React.createElement('h2', null, time)
      );
    }
  });

  window.addEventListener('load', function() {
    React.render(
      React.createElement(Greeting, { name: 'fer', algo: 'hola' }), // Le paso una propiedad a la clase
      document.body
    );
  });