#### This is a basic text input field for React.js and Next.js ---

#### Installation:-

1. yarn add formfieldsui
2. npm i formfieldsui

#### Import and example:-

```JavaScript
import { TextField } from "formfieldsui";

    <TextField
    default={true}
    textLabel='textLabel'
    placeholder='placeholder'
    onChange={(e)= e.target.value}
    />

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
