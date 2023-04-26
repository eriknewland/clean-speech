# potty-mouth: Pre-emptively sanitize user text inputs

A lightweight and customizable library to censor words in a textarea or input and display a toast message when a censored word is detected.

## Installation

```bash
npm install potty-mouth
```

## Usage

Import the `censorInput` function and call it with a configuration object:

```javascript
import censorInput from 'potty-mouth';

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
  toastDuration: 3000,
  fadeDuration: 500,
});
```

In this example, the `censorInput` function is called with a configuration object that specifies the textarea selector, censored words, toast message, custom toast background color, toast duration, and fade duration.
```

This README file provides an overview of the `censorInput` library, installation instructions, usage information, configuration options, and an example. You can customize the content as needed to better suit your project.