# clean-speech: preemptively sanitize user text inputs

A lightweight and customizable library to censor words in a textarea or input and display a toast message when a censored word is detected.

### Written in:
![TypeScript](https://img.shields.io/static/v1?style=for-the-badge&message=TypeScript&color=3178C6&logo=TypeScript&logoColor=FFFFFF&label=)

![clean-speech](https://user-images.githubusercontent.com/114263701/234681282-d1400675-7015-4e9f-b35f-fc5bb52fff8d.gif)
This demo uses 'badword1', 'badword2', and 'badword3' user-typed bad words.

## Installation

```bash
npm install clean-speech
```

## Usage

Import the `censorInput` function and call it with a configuration object:

```javascript
import censorInput from 'clean-speech';

censorInput({
  textareaSelector: '#text-area',
  censoredWords: ['badword1', 'badword2', 'badword3'],
});
```

## Configuration Options

The `censorInput` function accepts a configuration object with the following properties:

| Property          | Type                         | Required | Default                       | Description                                                                 |
|-------------------|------------------------------|----------|-------------------------------|-----------------------------------------------------------------------------|
| textareaSelector  | string                       | Yes      |                               | A CSS selector for the textarea element to be censored.                     |
| censoredWords     | string[]                     | No       | `[]`                          | An array of words to be censored.                                           |
| toastMessage      | string                       | No       | `'Please use nicer language!'`| The message to be displayed in the toast.                                   |
| toastStyle        | Partial<CSSStyleDeclaration> | No       | Default styles                | An object containing the CSS styles for the toast.                          |
| toastDuration     | number                       | No       | `3000`                        | The duration for which the toast is displayed (in milliseconds).            |
| fadeDuration      | number                       | No       | `500`                         | The duration of the toast fade-out animation (in milliseconds).             |

## Example

`index.html`:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Text Area Example</title>
    <style>
      body {
        font-family: Arial, sans-serif;
      }
    </style>
    <script src="./src/index.js" defer></script>
  </head>
  <body>
    <h1>Text Area Example</h1>
    <label for="text-area">Enter some text:</label>
    <textarea id="text-area" rows="4" cols="50"></textarea>
  </body>
</html>
```

`index.js`:

```javascript
import censorInput from 'censor-input';

censorInput({
  textareaSelector: '#text-area',
  censoredWords: ['badword1', 'badword2', 'badword3'],
  toastMessage: 'Please use nicer language!',
  toastStyle: {
    backgroundColor: 'rgba(255, 59, 48, 0.8)',
  },
  toastDuration: 1000,
  fadeDuration: 200,
});
```

In this example, the `censorInput` function is called with a configuration object that specifies the textarea selector, censored words, toast message, custom toast background color, toast duration, and fade duration.