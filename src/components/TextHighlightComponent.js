import React from 'react'
import {Text, View} from 'react-native'
import { findAll } from "highlight-words-core";

const TextHighlightComponent = (props) => {
  const defaultTextStyle = {fontSize: props.fontSize, fontFamily: props.fontFamily}
  const renderHighlightText = (text, index) => {
    return <Text key={index} style={[{backgroundColor: 'yellow'}, defaultTextStyle, props.highlightTextStyle]}>{text}</Text>
  }

  const renderText = () => {
    const chunks = findAll({autoEscape: true, searchWords: props.searchWords, textToHighlight: props.textToHighlight});
    let highlightedText = []
    chunks.map((chunk, index) => {
      const { end, highlight, start } = chunk;
      const text = props.textToHighlight.substr(start, end - start);
      if (highlight)
        highlightedText.push(renderHighlightText(text, index))
      else
        highlightedText.push(<Text key={index} style={defaultTextStyle}>{text}</Text>);
    })
    return highlightedText
  }

  return <View style={[{flexDirection: 'row', flexWrap: 'wrap'}, props.containerStyle]}>
            {renderText()}
         </View>
}

export default TextHighlightComponent;