import React from "react";

export default class ImageAndText extends React.Component {
  render() {
    const {title, titlebold, text} = this.props;
    return <section className="section columns reverse-columns">
      <div className="column">
        <div className="bedrift_background-2"></div>
      </div>
      <div className="column">
        <h2 className="title is-spaced is-4 has-text-weight-normal  is-size-6-mobile">
          <span>{title}</span>
          <span className="has-text-weight-bold"> {titlebold}</span>
        </h2>
        <p className="subtitle is-7 is-line-height-7">
          {text}
        </p>
      </div>
    </section>;
  }
}
