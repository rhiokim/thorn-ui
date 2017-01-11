import React from 'react'

export default class RuleSetEdit extends React.Component {
  componentWillMount() {
    console.log(this.props.params)
  }

  render() {
    return(
      <div>ruleset edit</div>
    )
  }
}
