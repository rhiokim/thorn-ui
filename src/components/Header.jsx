import React from 'react';

import HeaderNav from './HeaderNav';
// import HeaderTitle from './HeaderTitle';
// import HeaderNavSec from './HeaderNavSec';

export default class Header extends React.Component {
  render() {
    return (
      <div className="page-header">

        {/* Main navbar */}
        <HeaderNav />
      </div>
    );
  }
}
