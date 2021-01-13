import React from "react";

export default class ImageAndText extends React.Component {
  render() {
    const {title, titlebold, text} = this.props;
    return <section className="section  is-desktop columns">
      <div className="column">
        <div className="bedrift_animation-1" id="bedrift_animation-2"></div>
      </div>
      <div className="column">
        <h2 className="title is-spaced is-3 has-text-weight-normal is-size-4-mobile">
          <span>{title}</span>
          <span className="has-text-weight-bold"> {titlebold}</span>
        </h2>
        <p className="subtitle is-6 has-text-weight-semibold">
          {text}
        </p>
      </div>
    </section>;
  }
}
