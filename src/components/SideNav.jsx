import React from 'react';

export default class SideNav extends React.Component {
  render() {
    return(
      <div className="sidebar sidebar-main sidebar-default">
        {/* Main sidebar */}
        <div className="sidebar-content">

          {/* Main navigation */}
          <div className="sidebar-category sidebar-category-visible">
            <div className="category-title h6">
              <span>Main sidebar</span>
              <ul className="icons-list">
                <li><a href="#" data-action="collapse"></a></li>
              </ul>
            </div>

            <div className="category-content no-padding">
              <ul className="navigation navigation-main navigation-accordion">

                {/* Main */}
                <li className="navigation-header"><span>Main</span> <i className="icon-menu" title="Main pages"></i></li>
                <li><a href="../index.html"><i className="icon-home4"></i> <span>Dashboard</span></a></li>
                <li>
                  <a href="#"><i className="icon-stack"></i> <span>Netfilter</span></a>
                  <ul>
                    <li><a href="1_col.html">Port forwarding</a></li>
                    <li><a href="1_col.html">iptable</a></li>
                  </ul>
                </li>
                <li>
                  <a href="#"><i className="icon-stack"></i> <span>Rules / Whitelist</span></a>
                  <ul>
                    <li><a href="1_col.html">New Rules</a></li>
                    <li><a href="1_col.html">Rules</a></li>
                    <li className="active"><a href="2_col.html">Rule Sets</a></li>
                    <li className="navigation-divider"></li>
                    <li><a href="layout_navbar_fixed_main.html">Whitelist</a></li>
                    <li><a href="layout_navbar_fixed_secondary.html">Whitelist Sets</a></li>
                  </ul>
                </li>
                <li><a href="../changelog.html"><i className="icon-list-unordered"></i> <span>Settings</span></a></li>
                {/* /main */}

              </ul>
            </div>
          </div>
          {/* /main navigation */}

        </div>
        {/* /main sidebar */}
      </div>
    )
  }
}
