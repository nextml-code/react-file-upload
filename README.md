# @aiwizo/react-file-upload

**NOTE! v0.3.x - beta. Not production ready. Still needs testing and improvements.**

File upload component for React.

## Installation

```
npm install @aiwizo/react-file-upload
```

## Basic Usage

```javascript
// Importing
import FileUpload from "@aiwizo/react-file-upload";
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
/>
```

Make sure that the peer dependencies in `package.json` are installed in your application.

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
