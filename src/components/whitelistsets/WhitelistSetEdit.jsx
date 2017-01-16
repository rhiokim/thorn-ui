import React from 'react'
import {withRouter} from 'react-router'
import {Button} from '@blueprintjs/core'

class WhitelistSetEdit extends React.Component {
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
          <h5 className="panel-title">Edit Ruleset<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
          <form className="form-horizontal" action="#">
            <fieldset className="content-group">
              <legend className="text-bold">Basic inputs</legend>

              <div className="form-group">
                <label className="control-label col-lg-2">Description</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" type="text" placeholder="Description" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">File</label>
                <div className="col-lg-10">
                  <input className="pt-input pt-fill" type="text" placeholder="" dir="auto" />
                </div>
              </div>

              <div className="form-group">
                <label className="control-label col-lg-2">Plan</label>
                <div className="col-lg-10">
                  <div className="pt-select">
                    <select>
                      <option>Choose a plan for this ruleset</option>
                      <option value="1">update per 5 minutes</option>
                      <option value="1">update per 10 minutes</option>
                      <option value="1">update per 30 minutes</option>
                      <option value="2">update per 1 hour</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="text-right">
              <Button className="pt-intent" iconName="add" text="Cancel" onClick={goBack} />
              <Button className="pt-intent-primary ml-5" iconName="add" text="Save" />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(WhitelistSetEdit)
