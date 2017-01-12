import React from 'react'

export default class RuleSetView extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return (
      <div>ruleset view</div>
    )
  }
}
