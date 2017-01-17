import React from 'react'

export default class RuleSetView extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return (
      <div className="panel panel-flat">
        <div className="panel-heading">
          <h5 className="panel-title">APP_SERVER Ruleset in Details<a className="heading-elements-toggle"><i className="icon-more"></i></a></h5>
          <div className="heading-elements hidden">
            <ul className="icons-list">
              <li><a data-action="collapse"></a></li>
              <li><a data-action="reload"></a></li>
              <li><a data-action="close"></a></li>
            </ul>
          </div>
        </div>

        <div className="panel-body">
        </div>

        <div className="table table-responsive">
          <table className="table table-lg">
            <tbody>
              <tr>
                <th className="active">
                  BasicRule
                </th>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Blocking "bad" user agents</span>
                  <br/>
                  <span className="text-semibold">MainRule "str:w3af.sourceforge.net" "msg:DN SCAN w3af User Agent" "mz:$HEADERS_VAR:User-Agent" "s:$UWA:8" id:42000041;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Blocking "bad" referers</span>
                  <br/>
                  <span className="text-semibold">BasicRule "str:http://www.shadowysite.com/" "msg:Bad referer" "mz:$HEADERS_VAR:referer" "s:DROP" id:20001;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Blocking dangerous directories</span>
                  <br/>
                  <span className="text-semibold">MainRule "str:/magmi/" "msg:Access to magmi folder" "mz:URL" "s:$UWA:8" id:42000400;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Blocking dangerous directories</span>
                  <br/>
                  <span className="text-semibold">MainRule "str:/magmi.php" "msg:Access to magmi.php" "mz:URL" "s:$UWA:8" id:42000401;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Simple/Generic XSS</span>
                  <br/>
                  <span className="text-semibold">MainRule id:4242 "str:&lt;" "msg:xss (angle bracket)" "mz:$ARGS_VAR:foo|$URL:/target" s:DROP;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Simple/Generic (wider) XSS</span>
                  <br/>
                  <span className="text-semibold">MainRule id:4242 "str:&lt;" "msg:xss (angle bracket)" "mz:$ARGS_VAR_X:^foo$|$URL_X:^/product/[0-9]+/product$" s:DROP;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Raw Body</span>
                  <br/>
                  <span className="text-semibold">MainRule "id:4241" "s:DROP" "str:RANDOMTHINGS" "mz:RAW_BODY";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># LibInjection (XSS) Virtual Patching</span>
                  <br/>
                  <span className="text-semibold">MainRule "id:4241" "s:DROP" "d:libinj_xss" "mz:$ARGS_VAR:foo";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># LibInjection (SQL) Virtual Patching</span>
                  <br/>
                  <span className="text-semibold">MainRule "id:4241" "s:DROP" "d:libinj_sql" "mz:$ARGS_VAR:foo";</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
