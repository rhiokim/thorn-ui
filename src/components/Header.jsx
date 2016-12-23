import React from 'react';
import {Link} from 'react-router';

import HeaderTitle from './HeaderTitle';
import HeaderNav from './HeaderNav';
import HeaderNavSec from './HeaderNavSec';

export default class Header extends React.Component {
  render() {
    return (
      <div className="page-header page-header-inverse bg-indigo">

        {/* Main navbar */}
        <HeaderNav />

        <HeaderTitle />

        <HeaderNavSec />
      </div>
    );
  }
}
