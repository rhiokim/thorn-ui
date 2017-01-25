import React from 'react'
import {Checkbox, Button, EditableText} from '@blueprintjs/core'

export default class Score extends React.Component {
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
          <h5 className="panel-title">Scores<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-lg-5">Part</th>
                <th className="col-lg-6">Description</th>
                <th className="col-lg-1"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input type="text" className="pt-input pt-fill" placeholder="Score Name..." />
                </td>
                <td>
                  <input type="text" className="pt-input pt-fill" placeholder="Score Name..." />
                </td>
                <td className="text-center">
                  <button className="pt-button pt-intent-primary">Add</button>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $ATTACK
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    Attack from Bot, DDos
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $EVADE
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    Proper sizing of form control feedback
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $RFI
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    Remote File Inclusion
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $SQL
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    A SQL injection Vulnerabilities
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $TRAVERSAL
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    Directory Traversal Vulnerability
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $UWA
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    UnWanted Access
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $XSS
                </td>
                <td>
                  <a href="#" className="text-default display-inline-block">
                    Cross-Site Scripting (XSS) attacks are a type of injection
                  </a>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
