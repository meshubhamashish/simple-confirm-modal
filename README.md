# Simple Confirm Modal

A simple, lightweight, zero-dependency confirmation modal library.

## Features

- ✨ Lightweight and fast
- 🚀 Zero external dependencies
- 🎨 Multiple modal types (danger, success, warning, info)
- 🔄 Flexible callback handling
- 📦 Easy to install and use
- 💬 Customizable titles with HTML support

## Installation

```bash
npm install simple-confirm-modal
```

## Quick Start

### 1. Import the package

```javascript
import { confirmModel } from 'simple-confirm-modal';
```

### 2. Show a confirmation modal

```javascript
confirmModel.show({
  title: 'Are you sure?',
  type: 'danger',
  callback: function () {
    // Handle confirmation
    return true;
  }
});
```

## API Reference

### `confirmModel.show(options)`

Shows a confirmation modal with the specified options.

**Parameters:**

- `title` (string, required): The title of the modal. Supports HTML markup.
- `type` (string, optional): The type of modal. Options: `'danger'`, `'success'`, `'warning'`, `'info'`. Default: `'info'`
- `callback` (function, optional): Callback function executed when the user confirms. Return `true` to close the modal, `false` to keep it open.

**Example:**

```javascript
confirmModel.show({
  title: 'Confirm action',
  type: 'danger',
  callback: () => {
    // Perform your action
    console.log('Action confirmed!');
    return true;
  }
});
```

## Usage Examples

### Basic Usage

```javascript
import { confirmModel } from 'simple-confirm-modal';

// Simple confirmation
<button
  onClick={() => {
    confirmModel.show({
      title: 'Delete this item?',
      type: 'danger'
    })
  }}
>
  Delete
</button>
```

### With Custom Callback (Close on Confirmation)

```javascript
<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h5>Custom Title!!</h5>',
      callback: function () {
        alert('Custom Callback');
        return true;  // Modal closes
      },
      type: 'danger'
    })
  }}
>
  Custom close on Confirmation
</button>
```

### Don't Close on Confirmation

```javascript
<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h6>Custom Title!!</h6>',
      callback: function () {
        alert('Custom Callback');
        return false;  // Modal stays open
      },
      type: 'success'
    })
  }}
>
  Custom don't close Confirmation
</button>
```

### Warning Type

```javascript
<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h6>Warning Title!!</h6>',
      type: 'warning'
    })
  }}
>
  Warning Confirmation
</button>
```

### Info Type

```javascript
<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h6>Info Title!!</h6>',
      type: 'info'
    })
  }}
>
  Info Confirmation
</button>
```

## Modal Types

The library supports four modal types with different visual styles:

- **danger** - Red colored modal for destructive actions
- **success** - Green colored modal for positive confirmations
- **warning** - Yellow/orange colored modal for cautionary actions
- **info** - Blue colored modal for informational messages

## Resources

- 📦 [NPM Package](https://www.npmjs.com/package/simple-confirm-modal)
- 🔗 [GitHub Repository](https://github.com/meshubhamashish/simple-confirm-modal)
- 🎮 [Live Demo - CodeSandbox](https://codesandbox.io/p/sandbox/simple-confirm-modal-ky2ggy)

## Browser Support

Works in all modern browsers that support ES6.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request to the [GitHub repository](https://github.com/meshubhamashish/simple-confirm-modal).

## Support

If you encounter any issues or have questions, please open an issue on the [GitHub repository](https://github.com/meshubhamashish/simple-confirm-modal/issues).