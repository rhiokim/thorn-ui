import React from 'react'
import {withRouter} from 'react-router'
import {Checkbox, Button, EditableText} from '@blueprintjs/core'

class RuleEdit extends React.Component {
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
          <h5 className="panel-title">Edit Whitelist<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
          <form className="form-horizontal" action="#">
            <fieldset className="content-group">
              <legend className="text-bold">Basic inputs</legend>

              <div className="form-group">
                <label className="control-label col-lg-2">Whitelist SID</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" readOnly type="text" placeholder="SID" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Base Rule</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a base rule ...</option>
                      <option value="42000458">HTTPoxy - Attack</option>
                      <option value="42000457">Scanner/AttackBot GO-http-client 1.1</option>
                      <option value="42000456">Scanner/AttackBot GO 1.1</option>
                      <option value="42000455">possible XML/XXE-Exploitation atempt (Doctype)</option>
                      <option value="42000454">Some Scanner nlpproject.info</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Message</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" type="text" placeholder="" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Matching Zone</label>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="BODY" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="URL" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="ARGS" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="FILE_EXT" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:User-Agent" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="HEADERS" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-xs-4 pt-5">
                      <Checkbox checked={this.state.isEnabled} label="$HEADERS_VAR:Connection" onChange={this.handleEnabledChange} />
                    </div>
                    <div className="col-xs-3">
                      <input className="pt-input pt-fill" min="0" type="text" defaultValue="" placeholder="" dir="auto" />
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
                  <EditableText className="pt-input pt-fill" multiline minLines={3} maxLines={12} defaultValue="" dir="auto"></EditableText>
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

export default withRouter(RuleEdit)
