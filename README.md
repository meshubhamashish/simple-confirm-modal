# Simple Confirm Modal

A simple, lightweight, zero-dependency confirmation modal library.

## Installation

```bash
npm install simple-confirm-modal
```

## How to Use

### 1. Import the package

```javascript
import { confirmModel } from 'simple-confirm-modal';
```

### 2. Usage
```javascript
<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h5>Custom Title!!</h5>',
      callback: function () {
        alert('Custom Callback');
        return true;
      },
      type: 'danger'
    })
  }}
>
  Custom close on Confirmation
</button>

<button
  className="btn"
  onClick={() => {
    confirmModel.show({
      title: '<h6>Custom Title!!</h6>',
      callback: function () {
        alert('Custom Callback');
        return false;
      },
      type: 'success'
    })
  }}
>
  Custom don't close Confirmation
</button>

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