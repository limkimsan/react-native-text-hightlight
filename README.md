<span><img src="https://user-images.githubusercontent.com/18114944/227136134-d90f2305-420a-40c0-8a0e-02007b055ba4.png" width="250" height="500" /></span>

React Native Text Highlight is a custom component to highlight the searched word in a sentence using the [highlight-words-core](https://github.com/bvaughn/highlight-words-core).

## Support
iOS & Android

## Installation

```sh
npm install react-native-text-highlighter
```

#### Note:
You need to make configuration on iOS and Android by following the instruction from the above dependencies libraries.

## Usage

```js
import TextHighlight from 'react-native-text-highlighter';

//...

<TextHighlight
  textToHighlight='The quick brown fox jumps over the lazy dog'
  searchWords={["the", "fox"]}
  fontSize={18}
/>

```
## Properties
#### Basic
| Prop               |    Default    |       Type       |  Optional  | Description                                       |
| :----------------- | :-----------: | :--------------: | :--------: | :------------------------------------------------ |
| textToHighlight    |      ''       |     `string`     |   `false`  | The text for the search words to match            |
| searchWords        |      []       |     `array`      |   `false`  | The array of search words                         |
| fontSize           |       15      |     `number`     |   `true`   | The font size of the text                         |
| fontFamily         |      null     |     `string`     |   `true`   | The font family of the text                       |
| numberOfLines      |      null     |     `number`     |   `true`   | The number of lines to render the text            |

#### Custom styles

| Prop                  |    Default    |   Type    |  Optional  | Description                                         |
| :-------------------- | :-----------: | :-------: | :--------: | :-------------------------------------------------- |
| containerStyle        |     {...}     |  `style`  |   `true`   | Style of the container of the text                  |
| highlightTextStyle    |     {...}     |  `style`  |   `true`   | Style of the highlighted text                       |
| textStyle             |     {...}     |  `style`  |   `true`   | Style of the entire text (highlighted & not highlighted text)                 |


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
