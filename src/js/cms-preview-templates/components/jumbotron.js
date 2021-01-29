import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, titlebold, subtitle} = this.props;
    return <section className="section is-paddingless  has-background-primary">
      <div className="section columns reverse-columns">
        <div className="column">
          <div className="bedrift_animation-0" id="bedrift_animation-0">
          </div>
          <div className="column">
            <h2 className="title is-spaced is-1 has-text-weight-normal has-text-white is-size-3-mobile has-text-left-mobile has-text-right">
              <span>{title} </span>
              <span className="has-text-weight-bold">{titlebold}</span>
            </h2>
            <p className="subtitle is-7 has-text-white has-text-weight-semibold">
              {subtitle} </p>
          </div>
        </div>
      </div>
    </section>;
  }
}
