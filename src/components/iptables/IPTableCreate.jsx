import React from 'react'
import {withRouter} from 'react-router'
import {Checkbox, Button, Tooltip, Position} from '@blueprintjs/core'

class IPTableCreate extends React.Component {
  constructor() {
    super()

    this.state = {
      isEnabled: false
    }
  }

  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    const {goBack} = this.props.router
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">New net filtering rule<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
          <form className="form-horizontal" action="#">
            <fieldset className="content-group">
              <legend className="text-bold">Basic inputs</legend>

              <div className="form-group">
                <label className="control-label col-lg-2">SID</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" readOnly type="text" placeholder="SID" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Table</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a table...</option>
                      <option value="filter">Filter</option>
                      <option value="nat">NAT (Network Access Transition)</option>
                      <option value="mangle">Mangle</option>
                      <option value="raw">Raw</option>
                      <option value="security">Security</option>
                    </select>
                  </div>
                  <Tooltip content={<span className="text-muted">iptables <b className="text-info">--table nat</b></span>} position={Position.RIGHT} className="pt-5">
                    <span className="pt-icon-standard pt-icon-help pl-5"></span>
                  </Tooltip>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Chain</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a chain...</option>
                      <option value="INPUT">INPUT</option>
                      <option value="OUTPUT">OUTPUT</option>
                      <option value="FORWARD">FORWARD</option>
                      <option value="PREROUTING">PREROUTING</option>
                      <option value="POSTROUTING">POSTROUTING</option>
                    </select>
                  </div>
                  <Tooltip content={<span className="text-muted">iptables --table nat <b className="text-info">-A PREROUTING</b></span>} position={Position.RIGHT} className="pt-5">
                    <span className="pt-icon-standard pt-icon-help pl-5"></span>
                  </Tooltip>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Match</label>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="Protocol" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-4">
                      <div className="pt-select">
                        <select>
                          <option>Choose a protocol...</option>
                          <option value="tcp">tcp</option>
                          <option value="udp">udp</option>
                          <option value="icmp">icmp</option>
                        </select>
                      </div>
                      <Tooltip content={<span className="text-muted">iptables --table nat -A PREROUTING <b className="text-info">-p tcp</b></span>} position={Position.RIGHT} className="pt-5">
                        <span className="pt-icon-standard pt-icon-help pl-5"></span>
                      </Tooltip>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="Source" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="8080" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="Destination" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="8080" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="In Interface" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="Out Interface" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="Fragment" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="content-group">
              <legend className="text-bold"></legend>

              <div className="form-group">
                <label className="control-label col-lg-2">Target</label>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox name="to-ports" checked={this.state.isEnabled} label="To Ports" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="text-right">
              <Button className="pt-intent" iconName="add" text="Cancel" onClick={goBack}/>
              <Button className="pt-intent-primary ml-5" iconName="add" text="Save" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(IPTableCreate)
