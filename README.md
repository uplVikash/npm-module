
####  This is a basic text input field for React.js and Next.js ---

  

####  Installation:-

  

#####  Using npm :-

  

```
$ npm install --save formfieldsui
```
#####  Using yarn :-
```
$ yarn add formfieldsui
```

  

####  Import and example:-

  

```JavaScript

import { TextField } from "formfieldsui";


<TextField

textLabel='textLabel'

placeholder='placeholder'

onChange={(e)=  e.target.value}

/>

```

  

####  Props:-

  

Label,

helperText,

error,

id,

value,

name,

placeholder,

onChange,

disabled...

  

####  ClssName for Css:-

  

textlabelClass = for label,

rootClass = for input fields,

notificationClass = for notification "error message"

  

####  variant :-

  

outlined {Defult}, standard, filled

  

```JavaScript

<TextField  variant='filled' />

```