'use strict';

const e = React.createElement;

class Przycisk extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressed: false };
  }

  render() {
    if (this.state.pressed) {
      return 'Wciśnołeś przycisk.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ pressed: true }) },
      'Wciśnij'
    );
  }
}

const domContainer = document.querySelector('#kontener_na_przycisk');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));
