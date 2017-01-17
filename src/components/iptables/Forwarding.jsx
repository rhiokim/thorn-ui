import React from 'react'
import {withRouter} from 'react-router'
import {Menu, MenuDivider, MenuItem, Popover, Position, Dialog, Button, AnchorButton, Intent, Alert, Checkbox} from "@blueprintjs/core"

class Forwarding extends React.Component {
  constructor() {
    super()

    this.toggleDialog = this.toggleDialog.bind(this)
    this.toggleDeactivateAlert = this.toggleDeactivateAlert.bind(this)

    this.state = {
      ruleId: undefined,
      isOpen: false,
      isDeactivateAlert: false
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

  componentWillMount() {
    const {ruleSetFile} = this.props.params

    if (this.props.params.hasOwnProperty('ruleSetFile')) {
      console.log(`display rules of ${ruleSetFile}`)
    } else {
      console.log('all rules')
    }
  }

  toggleDialog() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  toggleDeactivateAlert() {
    this.setState({
      isDeactivateAlert: !this.state.isDeactivateAlert
    })
  }

  handleClick(act) {
    const {ruleId} = this.state
    switch (act) {
      case 'view':
        this.props.router.push(`/forward/${ruleId}`)
      break
      case 'edit':
        this.props.router.push(`/forward/edit/${ruleId}`)
      break
      case 'deactivate':
        this.setState({ isDeactivateAlert: true })
      break
      case 'delete':
        this.setState({ isOpen: true })
      break
      default:
      break
    }
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Port Forwarding<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
            <AnchorButton href="#/forward/new" text="New" iconName="add" intent={Intent.PRIMARY}/>
          </div>
        </div>

        <div className="panel-body hidden">
          Example of a <code>bordered</code> table with <code>stiped</code> rows. Add <code>.table-bordered</code> and <code>.table-striped</code> classes to the base <code>.table</code> class for borders and row striping. This method works with all table border options.
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-lg-1 text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </th>
                <th className="col-lg-2 text-center">Service Port</th>
                <th className="col-lg-4 text-center">IP Address</th>
                <th className="col-lg-2 text-center">Internal Port</th>
                <th className="col-lg-2 text-center">Protocol</th>
                <th className="col-lg-2 text-center">Status</th>
                <th className="col-lg-1 text-center"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">49151</td>
                <td className="text-center">192.168.0.107</td>
                <td className="text-center">53</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <Checkbox className="no-margin-bottom" checked={false} onChange={() => {}} />
                </td>
                <td className="text-center">80</td>
                <td className="text-center">192.168.0.101</td>
                <td className="text-center">80</td>
                <td className="text-center">TCP, UDP</td>
                <td className="text-center">Enabled</td>
                <td className="text-center">
                  <Popover content={this.ruleMenu} position={Position.BOTTOM_RIGHT}>
                    <a className="icon-menu9" onClick={() => this.setState({ruleId:Math.random()})}></a>
                  </Popover>
                </td>
              </tr>
              <tr className="border-double active"></tr>
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

          <Dialog iconName="inbox" isOpen={this.state.isOpen} onClose={this.toggleDialog} title="Remove Rule">
            <div className="pt-dialog-body">
              Are you sure remove this rule?<br/>You can't restore this rule after delete.
            </div>
            <div className="pt-dialog-footer">
              <div className="pt-dialog-footer-actions">
                <Button text="No" />
                <Button intent={Intent.DANGER} onClick={this.toggleDialog} text="Sure" />
              </div>
            </div>
          </Dialog>

          <Alert isOpen={this.state.isDeactivateAlert} onConfirm={this.toggleDeactivateAlert} onCancel={this.toggleDeactivateAlert} confirmButtonText="Confirm" cancelButtonText="No" intent={Intent.WARNING} >Are you sure deactivate this rule?</Alert>
        </div>
      </div>
    )
  }
}

export default withRouter(Forwarding)
