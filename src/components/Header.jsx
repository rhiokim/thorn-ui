import React from 'react';
import {Link} from 'react-router';

import HeaderNav from './HeaderNav';
// import HeaderTitle from './HeaderTitle';
// import HeaderNavSec from './HeaderNavSec';

export default class Header extends React.Component {
  render() {
    return (
      <div className="page-header page-header-inverse bg-indigo">

        {/* Main navbar */}
        <HeaderNav />
      </div>
    );
  }
}
