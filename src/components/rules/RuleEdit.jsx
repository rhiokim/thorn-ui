import React from 'react'
import {Checkbox, Button} from '@blueprintjs/core'

export default class RuleEdit extends React.Component {
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
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">Edit Rule<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
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
                <label className="control-label col-lg-2">Message</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" type="text" placeholder="" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Detect</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" type="text" placeholder="" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Matching Zone</label>
                <div className="col-lg-10">
                  <Checkbox checked={this.state.isEnabled} label="BODY" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="URL" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="ARGS" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="FILE_EXT" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:User-Agent" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="HEADERS" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Connection" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Cookie" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Content-Type" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Accept-Encoding " onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:X-Forward-For" onChange={this.handleEnabledChange} />
                  <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Proxy" onChange={this.handleEnabledChange} />
                  <input className="pt-input" type="text" placeholder="Custom matching zone" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Score</label>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$SQL" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$RFI" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$TRAVERSAL" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$EVADE" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$XSS" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$UWA" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-3 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$ATTACK" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-2">
                      <input className="pt-input pt-fill" min="0" type="number" defaultValue="8" placeholder="" dir="auto" />
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>

            <fieldset className="content-group">
              <legend className="text-bold"></legend>

              <div className="form-group">
                <label className="control-label col-lg-2">Remarks</label>
                <div className="col-lg-10">
                  <textarea className="pt-input pt-fill"  dir="auto"></textarea>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-lg-2">Rule Set</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Rule Sets...</option>
                      <option value="1">web_server.rules</option>
                      <option value="2">app_server.rules</option>
                      <option value="3">scanner.rules</option>
                      <option value="4">browser_only.rules</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="text-right">
              <Button className="pt-intent-primary" iconName="add" text="Save" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}
