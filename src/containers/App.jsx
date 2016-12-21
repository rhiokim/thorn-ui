import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      totalUserCount: 0
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
        <Footer />
        {
          // (() => {
          //   if (process.env.NODE_ENV === 'development') {
          //     const DevTools = require('../DevTools').default;
          //     return <DevTools />;
          //   }
          // })()
        }
      </div>
    );
  }
}
