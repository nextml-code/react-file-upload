# @aiwizo/react-file-upload

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

```javascript
<FileUpload
  // Upload url
  url="https://my.awesome/api/endpoint"
  // The callback function is called each
  // time we get a file upload response.
  callback={(fileUploadResponse) => {
    // Do something with a file upload response
  }}
  // Amount of parallell file uploads.
  // Defaults to 1.
  requestBatchSize={1}
/>
```
