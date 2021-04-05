import React from "react";

interface IProps {
  headerText: string
}
class Header extends React.Component<IProps> {
  render () {
    return (
      <>
        <h1>{this.props.headerText}</h1>
        <h2>{this.props.children}</h2>
      </>
    )
  }
}
export default Header