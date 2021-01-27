import React from "react";
export default class ArticlePreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const entryValues = entry.getIn(["data", "topics"]);
    const values = entryValues ? entryValues.toJS() : [];
    return <div className="section">
      <div className="columns">
        <div className="column is-8">
          <h1
            className="title is-spaced is-1 has-text-weight-normal has-text-blue is-size-4-mobile">{entry.getIn(["data", "heading"])}</h1>
          <p className="subtitle is-7 has-text-blue has-text-weight-semibold">
            {entry.getIn(["data", "subheading"])}
          </p>
          <a className="button is-primary" href="#">{entry.getIn(["data", "cta_text"])}</a>
        </div>
      </div>

      <div className="columns">
        <div className="column is-8">
            {widgetFor("body") }
        </div>
      </div>
      <div className="columns">
        <div className="column is-8">
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
          <div className="mt-xlarge">
            <a className="button is-primary" href="#">{entry.getIn(["data", "cta_text"])}</a>
          </div>

        </div>
      </div>
    </div>
  }
}
