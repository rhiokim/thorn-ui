import React from 'react'
import {Checkbox, Button, EditableText, Tooltip, Position} from '@blueprintjs/core'

export default class MatchingZone extends React.Component {
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
          <h5 className="panel-title">Matching Zones<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements">
          </div>
        </div>

        <div className="panel-body">
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th className="col-lg-5">Matching Zone</th>
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
                  BODY
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Body
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  URL
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    Uniform Resource Locator
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  ARGS
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    Arguments, Querystring
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  FILE_EXT
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    File extension
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:User-Agent
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP User Agent Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  HEADERS
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Cookie Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:Connection
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Connection Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:Cookie
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Connection Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:Content-Type
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Content-Type Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:Accept-Encoding
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Accept-Encoding Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:X-Forward-For
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP X-Forward-For Header
                  </Tooltip>
                </td>
                <td className="text-center">
                  <i className="icon-cross2 text-danger"></i>
                </td>
              </tr>
              <tr>
                <td className="text-bold">
                  $HEADERS_VAR:Proxy
                </td>
                <td>
                  <Tooltip content={<span className="text-muted"> <b className="text-info"></b></span>} position={Position.RIGHT} className="pt-5">
                    HTTP Proxy Header
                  </Tooltip>
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
