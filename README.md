####  Input field's for React.js and Next.js ---
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
import { EmailFieldInput, TextFieldInput, TextAreaFieldInput } from "formfieldsui";

<EmailFieldInput
label='EmailLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<TextFieldInput
label='textLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>

<TextAreaFieldInput 
label='textAreaLabel'
placeholder='placeholder'
onChange={(e) =>  e.target.value}
/>
```

####  Props:-
| Name  | Type | Default | Description
| ------------- | ------------- | ------------- | ------------- |
| type | string | text-TextFieldInput, email-EmailFieldInput |It's customizable and it's only applicable for TextFieldInput|
| Label  | string  |  | The label content.  |
| helperText  | string  |   |   The helper text content for message's.  |
| error  | bool  | false  | If `true`, the label is displayed in an error state.  |
| id  | string  |   | The id of the `input` element. Use this prop to make `label` and `helperText` accessible for screen readers.  |
| value  | any  |   | The value of the  `input`  element, required for a controlled component.  |
| name  | string  |   |   Name attribute of the  `input`  element.  |
| placeholder  | string  |   | The placeholder content.  |
| onChange  | func  |   | `onChange={(e)=  e.target.value}`  |
|rows| number | |The rows attribute specifies the visible height of a text area, in lines. `(it's only aplicable for TextAreaFieldInput)`|
|cols|number||The cols attribute specifies the visible width of a text area. `(it's only aplicable for TextAreaFieldInput)`|
| disabled  | bool  | false  |If `true`, the input field is disabled  |

####  ClassName for Css:-
```
lableClass = for label,
rootClass = for input fields,
helperTextClass = for notification "error message"
```
####  variant :-
| | Name  | |
|---| ------------- | --|
| | outlined `(Default)` ||
| | standard ||
| | filled  ||

```JavaScript
Ex:-
<TextFieldInput  variant='filled' />
<EmailFieldInput  variant='filled' />
```