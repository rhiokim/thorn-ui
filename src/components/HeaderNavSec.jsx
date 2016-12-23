import React from 'react';

export default class HeaderNavSec extends React.Component {
  render() {
    return (
      <div className="navbar navbar-inverse navbar-transparent" id="navbar-second">
        <ul className="nav navbar-nav no-border visible-xs-block">
          <li><a className="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i className="icon-menu7"></i></a></li>
        </ul>

        <div className="navbar-collapse collapse" id="navbar-second-toggle">
          <ul className="nav navbar-nav navbar-nav-material">
            <li><a href="../index.html">Dashboard</a></li>

            <li className="dropdown mega-menu mega-menu-wide">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Mega menu <span className="caret"></span></a>

              <div className="dropdown-menu dropdown-content">
                <div className="dropdown-content-body">
                  <div className="row">
                    <div className="col-md-3">
                      <span className="menu-heading underlined">Column 1 title</span>
                      <ul className="menu-list">
                        <li><a href="#">First link, first column</a></li>
                        <li>
                          <a href="#">Second link (multilevel)</a>
                          <ul>
                            <li><a href="#">Second level, first link</a></li>
                            <li><a href="#">Second level, second link</a></li>
                            <li><a href="#">Second level, third link</a></li>
                            <li><a href="#">Second level, fourth link</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Third link, first column</a></li>
                        <li><a href="#">Fourth link, first column</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <span className="menu-heading underlined">Column 2 title</span>
                      <ul className="menu-list">
                        <li><a href="#">First link, second column</a></li>
                        <li>
                          <a href="#">Second link (multilevel)</a>
                          <ul>
                            <li><a href="#">Second level, first link</a></li>
                            <li><a href="#">Second level, second link</a></li>
                            <li><a href="#">Second level, third link</a></li>
                            <li><a href="#">Second level, fourth link</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Third link, second column</a></li>
                        <li><a href="#">Fourth link, second column</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <span className="menu-heading underlined">Column 3 title</span>
                      <ul className="menu-list">
                        <li><a href="#">First link, third column</a></li>
                        <li>
                          <a href="#">Second link (multilevel)</a>
                          <ul>
                            <li><a href="#">Second level, first link</a></li>
                            <li><a href="#">Second level, second link</a></li>
                            <li><a href="#">Second level, third link</a></li>
                            <li><a href="#">Second level, fourth link</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Third link, third column</a></li>
                        <li><a href="#">Fourth link, third column</a></li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <span className="menu-heading underlined">Column 4 title</span>
                      <ul className="menu-list">
                        <li><a href="#">First link, fourth column</a></li>
                        <li>
                          <a href="#">Second link (multilevel)</a>
                          <ul>
                            <li><a href="#">Second level, first link</a></li>
                            <li><a href="#">Second level, second link</a></li>
                            <li><a href="#">Second level, third link</a></li>
                            <li><a href="#">Second level, fourth link</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Third link, fourth column</a></li>
                        <li><a href="#">Fourth link, fourth column</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Starter kit <span className="caret"></span>
              </a>

              <ul className="dropdown-menu width-200">
                <li className="dropdown-header">Basic layouts</li>
                <li className="dropdown-submenu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-grid2"></i> Columns</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-header highlight">Options</li>
                    <li><a href="1_col.html">One column</a></li>
                    <li><a href="2_col.html">Two columns</a></li>
                    <li className="dropdown-submenu">
                      <a href="#">Three columns</a>
                      <ul className="dropdown-menu">
                        <li className="dropdown-header highlight">Sidebar position</li>
                        <li><a href="3_col_dual.html">Dual sidebars</a></li>
                        <li><a href="3_col_double.html">Double sidebars</a></li>
                      </ul>
                    </li>
                    <li><a href="4_col.html">Four columns</a></li>
                  </ul>
                </li>
                <li className="dropdown-submenu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="icon-paragraph-justify3"></i> Navbars</a>
                  <ul className="dropdown-menu">
                    <li className="dropdown-header highlight">Fixed navbars</li>
                    <li><a href="layout_navbar_fixed_main.html">Fixed main navbar</a></li>
                    <li className="active"><a href="layout_navbar_fixed_secondary.html">Fixed secondary navbar</a></li>
                    <li><a href="layout_navbar_fixed_both.html">Both navbars fixed</a></li>
                  </ul>
                </li>
                <li className="dropdown-header">Optional layouts</li>
                <li><a href="layout_boxed.html"><i className="icon-align-center-horizontal"></i> Fixed width</a></li>
                <li><a href="layout_sidebar_sticky.html"><i className="icon-flip-vertical3"></i> Sticky sidebar</a></li>
              </ul>
            </li>
          </ul>

          <ul className="nav navbar-nav navbar-nav-material navbar-right">
            <li><a href="#">Text link</a></li>

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <i className="icon-cog3"></i>
                <span className="visible-xs-inline-block position-right">Dropdown</span>
                <span className="caret"></span>
              </a>

              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li className="divider"></li>
                <li><a href="#">One more separated line</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
