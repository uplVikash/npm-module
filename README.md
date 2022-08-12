#### This is a basic text input field for React.js and Next.js ---

#### Installation:-

1. yarn add basicformfields
2. npm i basicformfields

#### Import and example:-

```JavaScript
import { TextField } from "textfields";


    <TextField
    default={true}
    textLabel='textLabel'
    placeholder='placeholder'
    onChange={(e)= e.target.value}
    />

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
