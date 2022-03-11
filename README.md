# @nextml/react-file-upload

**NOTE! v0.x.x - beta. Not production ready. Still needs testing and improvements.**

File upload component for React.

## Installation

```
npm install @nextml/react-file-upload
```

## Basic Usage

```javascript
import { FileUpload } from "@nextml/react-file-upload";
```

```jsx
<FileUpload
  // Upload url
  url="https://my.awesome/api/endpoint"
  // The callback function is called each
  // time we get a file upload response.
  onUploadResponse={(fileUploadResponse, file) => {
    // Do something with a file upload response or file
  }}
  // Amount of parallel file uploads.
  // Defaults to 1.
  requestBatchSize={1}
  // Calls this function with the
  // data returned from the upload request
  // of a file
  onRowClick={(fileResponseData) => {
    // Do something with the data from the file upload response
  }}
  // Options for configuring the request made
  // when posting the file to the specified url.
  requestOptions={{
    headers: {},
    body: {
      /* JSON */
    },
  }}
/>
```

## Request options

### JSON

Its possible to set request headers and body through the `requestOptions` parameter.

If a body is set the `content-type` header is set to `application/json` and the file will be converted to a base64 string and passed to the `body.file.data` field i.e.

```javascript
// Request body:
{
  ...requestOptions.body,
  file: {
    ...requestOptions.body.file,
    data: "data:image/jpeg;base64,/9j/4AAQSkZJRgABA...",
  },
}
```

### form-data

Set additional `multipart/form-data` entries through the `requestOptions.form` parameter.

The uploaded file will still be set as the entry `file`.

Example:

```javascript
requestionOptions={{
  form: {
    text: "text",
    value: 3,
  }
}}
```

Does not yet support nested `requestionOptions.form`.

Make sure that the peer dependencies in `package.json` are installed in your application.

## Development

Start storybook with

```
npm start
```

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
