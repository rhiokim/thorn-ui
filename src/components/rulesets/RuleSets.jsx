import React from 'react'
import {Link, withRouter} from 'react-router'
import {Menu, MenuDivider, MenuItem, Popover, Position} from "@blueprintjs/core"

class RuleSets extends React.Component {
  constructor() {
    super()

    this.state = {
      ruleId: undefined
    }
  }

  ruleMenu = (
    <Menu>
      <MenuItem iconName="add" text="View" onClick={this.handleClick.bind(this, 'view')} />
      <MenuItem iconName="add" text="Edit" onClick={this.handleClick.bind(this, 'edit')}/>
      <MenuItem iconName="map" text="Clone" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuItem iconName="map" text="Copy to Clipboard" disabled={true} onClick={this.handleClick.bind(this, 'copy')} />
      <MenuDivider />
      <MenuItem iconName="add" text="Deactivate" onClick={this.handleClick.bind(this, 'deactivate')} />
      <MenuItem iconName="map" text="Delete" onClick={this.handleClick.bind(this, 'delete')} />
    </Menu>
  )

  handleClick(act) {
    const {ruleId} = this.state
    switch (act) {
      case 'view':
        this.props.router.push(`/rulesets/${ruleId}`)
      break
      case 'edit':
        this.props.router.push(`/rulesets/${ruleId}/edit`)
      break
      default:
      break
    }
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Rule Sets<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="reload"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div className="panel-body hidden">
          Example of a <code>bordered</code> table with <code>stiped</code> rows. Add <code>.table-bordered</code> and <code>.table-striped</code> classes to the base <code>.table</code> class for borders and row striping. This method works with all table border options.
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-lg-3">Description</th>
                <th className="col-lg-5">File</th>
                <th className="col-lg-3">Updated</th>
                <th className="col-lg-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>APP_SERVER</td>
                <td>
                  <Link to={`/rulesets/${Math.random()}`}>app_server.rules</Link>
                </td>
                <td>3 months ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>BROWSER_ONLY</td>
                <td>
                  <Link to="">browser_only.rules</Link>
                </td>
                <td>2 weeks ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>HONEYPOTS</td>
                <td>
                  <Link to="">honeypots.rules</Link>
                </td>
                <td>1 day ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>MALWARE</td>
                <td>
                  <Link to="">malware.rules</Link>
                </td>
                <td>34 seconds ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>IMPORT</td>
                <td>
                  <Link to="">import.rules</Link>
                </td>
                <td>12 hours ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>SCAN</td>
                <td>
                  <Link to="">scan.rules</Link>
                </td>
                <td>3 days ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td>WEB_APPS</td>
                <td>
                  <Link to="">web_apps.rules</Link>
                </td>
                <td>39 years ago</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9"></a>
                  </Popover>
                </td>
              </tr>
              <tr className="border-double"></tr>
            </tbody>
          </table>

          <div className="p-20 text-center">
            <ul className="pagination">
              <li><a href="#" className="legitRipple">‹</a></li>
              <li className="active"><a href="#" className="legitRipple">1</a></li>
              <li><a href="#" className="legitRipple">2</a></li>
              <li><a href="#" className="legitRipple">3</a></li>
              <li className="disabled"><a href="#">4</a></li>
              <li><a href="#" className="legitRipple">5</a></li>
              <li><a href="#" className="legitRipple">6</a></li>
              <li><a href="#" className="legitRipple">7</a></li>
              <li><a href="#" className="legitRipple">8</a></li>
              <li><a href="#" className="legitRipple">9</a></li>
              <li><a href="#" className="legitRipple">›</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RuleSets)
