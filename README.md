#### This is a basic text input field for React.js and Next.js ---

#### Installation:-

```
yarn add formfieldsui
npm i formfieldsui

```

#### Import and example:-

```JavaScript
import { TextField } from "formfieldsui";

    <TextField
    outlined={true}
    textLabel='textLabel'
    placeholder='placeholder'
    onChange={(e)= e.target.value}
    />

```

#### Props:-

textLabel,
notification,
id,
value,
name,
placeholder,
onChange,
disabled...

#### ClssName for Css:-

textlabelClass = for label,
rootClass = for input fields,
notificationClass = for notification "error message"

#### variant :-

outlined, standard, filled

```JavaScript
<TextField standard /> //standard is a variant
```
