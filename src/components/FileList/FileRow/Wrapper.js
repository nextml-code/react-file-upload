import styled, { css } from "styled-components";
import { UPLOADING, FAIL, PENDING } from "../../../core/constants";

const Wrapper = styled.div`
  padding: var(--react-file-upload-spacing-small)
    var(--react-file-upload-spacing-regular);
  font-family: var(--react-file-upload-default-font);
  border-top: 1px solid var(--react-file-upload-secondary-border-blue);
  font-size: var(--react-file-upload-font-size-medium);
  display: flex;
  flex-direction: column;
  :last-child {
    border-bottom-left-radius: var(--react-file-upload-border-radius-primary);
    border-bottom-right-radius: var(--react-file-upload-border-radius-primary);
  }
  :hover {
    background-color: var(--react-file-upload-light-background-grey);
  }
  ${(props) => {
    switch (props.status) {
      case UPLOADING: {
        return css`
          background-color: var(--react-file-upload-light-background-blue);
        `;
      }
      case PENDING: {
        return css`
          background-color: var(--react-file-upload-light-background-grey);
          color: var(--react-file-upload-faded-text-grey);
        `;
      }
      case FAIL: {
        return css`
          background-color: var(--react-file-upload-light-background-red);
          color: var(--react-file-upload-grey);
        `;
      }
      default: {
        return css`
          background-color: #ffffff;
        `;
      }
    }
  }}
`;

export default Wrapper;
