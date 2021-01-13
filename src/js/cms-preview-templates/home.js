import React from "react";
import format from "date-fns/format";

import Jumbotron from "./components/jumbotron";
import TextAndImage from "./components/TextAndImage";
import ImageAndText from "./components/ImageAndText";

export default class PostPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
        image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    const entryValues = entry.getIn(["data", "sections"]);
    const values = entryValues ? entryValues.toJS() : [];
    return <div>
      <Jumbotron image={image} title={entry.getIn(["data", "title"])} titlebold={entry.getIn(["data", "titlebold"])} subtitle={entry.getIn(["data", "subtitle"])}/>

      {values.map(({title, titlebold, text}, i) =>
         i === 0 ? <TextAndImage key={i} title={title} titlebold={titlebold} text={text} />: <ImageAndText key={i} title={title} titlebold={titlebold} text={text} />
      )}
    </div>;
  }
}
