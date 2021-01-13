import React from "react";

export default class Jumbotron extends React.Component {
  render() {
    const {image, title, titlebold, subtitle} = this.props;
    return <section className="section is-paddingless  has-background-primary">
      <div className="section is-desktop columns">
        <div className="column">
          <div className="bedrift_animation-0" id="bedrift_animation-0">
          </div>
          <div className="column">
            <h2 className="title is-spaced is-1 has-text-weight-normal has-text-blue is-size-3-mobile has-text-centered-mobile has-text-right">
              <span>{title}</span>
              <span className="has-text-weight-bold">{titlebold}</span>
            </h2>
            <p className="subtitle is-6 has-text-blue has-text-weight-semibold">
              {subtitle} </p>
          </div>
        </div>
      </div>
    </section>;
  }
}
