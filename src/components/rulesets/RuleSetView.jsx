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
                  <span className="text-muted"># Disable rule #1000 on all url in GET argument named foo:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$ARGS_VAR:foo";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in GET argument named foo for url /bar:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$ARGS_VAR:foo|$URL:/bar";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET arguments for url /bar:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$URL:/bar|ARGS";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET argument NAMES (only name, not content):</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:ARGS|NAME";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET argument NAMES (only name, not content) for url /bar:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$URL:/bar|ARGS|NAME";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET arguments containing meh:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$ARGS_VAR_X:meh";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in GET argument starting with meh:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$ARGS_VAR_X:^meh";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET arguments matching meh_&lt;number&gt;:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$ARGS_VAR_X:^meh_[0-9]+$"</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET arguments for URL starting with /foo:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$URL_X:^/foo|ARGS";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Disable rule #1000 in all GET arguments starting with a number for URL starting with /foo:</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1000 "mz:$URL_X:^/foo|$ARGS_VAR_X:^[0-9]";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Whitelisting rule 1337 on URL /index.html for file name will be written :</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1337 "mz:$URL:/index.html|FILE_EXT";</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># JSON is handled as normal BODY, and parsed into variable when possible :</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:1302 "mz:$BODY_VAR:lol";</span>
                </td>
              </tr>
              <tr>
                <th className="active">
                  MainRule
                </th>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># With the following rule targeting RAW_BODY :</span>
                  <br/>
                  <span className="text-semibold">MainRule id:4241 s:DROP str:RANDOMTHINGS mz:RAW_BODY;</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="text-muted"># Whitelisting id:4241 would be :</span>
                  <br/>
                  <span className="text-semibold">BasicRule wl:4241 "mz:$URL:/|BODY";</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
