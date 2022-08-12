#### This is a basic text input field for React.js and Next.js ---

#### Installation:-

> yarn add textfields
> npm i textfields

#### Import and example:-

```JavaScript
import { TextField } from "textfields";

const FunctionName = () => {
  return (
    <TextField
    default={true}
    textLabel='textLabel'
    placeholder='placeholder'
    onChange={(e)= e.target.value}
    />
    )
}

export default FunctionName
```

#### Props:-

textLabel,
id,
value,
name,
placeholder,
onChange,
disabled...

#### ClssName for Css:-

textlabelClass = for label,
rootClass = for input fields

#### variant :-
default, underLine

```JavaScript
<TextField underLine /> //underLine is a variant
```
