# @aiwizo/react-file-upload

**NOTE! v0.1 - alpha. Not production ready. Still needs testing and improvements.**

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

## Styling

At the moment styling is depending on these stylesheets from [application-styles](https://github.com/Aiwizo/application-styles)

```
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/reset.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/fonts.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/animations.css"
  rel="stylesheet"
/>
<link
  href="https://cdn.jsdelivr.net/gh/aiwizo/application-styles@latest/colors.css"
  rel="stylesheet"
/>
```

Custom styling may or may not be a feature in the future.

## Contribution

Please let us know if you have any issues. Put an issue here on github and we'll do our best to solve it.
