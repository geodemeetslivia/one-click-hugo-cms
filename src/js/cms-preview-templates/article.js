import React from "react";
export default class ArticlePreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const topicValues = entry.getIn(["data", "topics"]);
    const cardValues = entry.getIn(["data", "cards"]);
    const values = topicValues ? topicValues.toJS() : [];
    const card_values = cardValues ? cardValues.toJS() : [];
    return <div className="section">
      <div className="columns">
        <div className="column is-3">
          <img src="img/Vector.png"/>
            <p>{entry.getIn(["data", "cta_text"])}</p>
            <button className="button is-outlined is-small">{entry.getIn(["data", "cta_paragraph"])}</button>
        </div>
        <div className="column is-9">
          <h1
            className="title is-spaced is-1 has-text-weight-normal  is-size-4-mobile">{entry.getIn(["data", "heading"])}</h1>
          <p className="subtitle is-7 has-text-weight-semibold">
            {entry.getIn(["data", "subheading"])}
          </p>
        </div>
      </div>

      <div className="columns">
        <div className="column is-3">
        </div>
        <div className="column is-9">
            {widgetFor("body") }
        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
        </div>
        <div className="column is-9">
          {values.map(({title, text}, i) =>

          <div className="card">
            <header className="card-header">
              <p className="card-header-title">
                {title}
              </p>
              <span className="card-header-icon" aria-label="more options" data-target="card-content-{i}">
                <span className="icon">
                  <i className="fal fa-plus" aria-hidden="true"></i>
                </span>
              </span>
            </header>
            <div className="card-content is-hidden" id="card-content-{i}">
              <div className="content">
                {text}
              </div>
            </div>
          </div>
          )}

        </div>
      </div>
      <div className="columns">
        <div className="column is-3">
        </div>
        <div className="column is-9">
          <div className="columns">
            {card_values.map(({image, boldText, text}, i) =>
              <div className="column">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={image && getAsset(image)}/>
                    </figure>
                  </div>
                  <p><strong>{boldText}</strong>&nbsp;{text}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  }
}
