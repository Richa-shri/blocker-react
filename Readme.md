
# Blocker-React

A customizable loading blocker for React applications, ideal for indicating background tasks, data fetching, or other processes.

## Installation

To install the `blocker-react` package, run the following command:

```bash
npm install blocker-react --save
```

## Usage

You can use the `Blocker` component in your React application to display a loading overlay. Here's an example of how to integrate it:

```jsx
import React, { useEffect, useState } from "react";
import Blocker from "blocker-react";

export default function App() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Blocker
        title="Loading..."
        subtitle="Please wait..."
        type="Linear"  // Available types: Circle, Linear, CircularDots, Signal, Dots
        show={show}
      />
    </div>
  );
}
```

### Blocker Props

- **title**: *(string)* — The main text to display (e.g., "Loading...").
- **subtitle**: *(string)* — The secondary text to display (e.g., "Please wait...").
- **type**: *(string)* — The loader style. Options: `Circle`, `Linear`, `CircularDots`, `Signal`, `Dots`. Defaults to `Circle`.
- **show**: *(boolean)* — Controls whether the loader is visible.

## Customization

You can pass custom text, choose from various loader types, and toggle the visibility of the blocker with the `show` prop. Here's an overview of the available loader types:

1. **Circle** (default)
2. **Linear**
3. **CircularDots**
4. **Signal**
5. **Dots**

## Example

To see how the loader works in your project, try changing the `type` or adjusting the visibility duration using `setTimeout`.

## License

This project is licensed under the MIT License.


