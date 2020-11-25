import styled, { css } from "styled-components";
import { UPLOADING, FAIL, PENDING } from "../../core/constants";

const Wrapper = styled.div`
  padding: var(--aiwizo-application-spacing-small)
    var(--aiwizo-application-spacing-regular);
  font-family: var(--aiwizo-application-default-font);
  border-top: 1px solid var(--aiwizo-application-secondary-border-blue);
  font-size: var(--aiwizo-application-font-size-medium);
  display: flex;
  flex-direction: column;
  :last-child {
    border-bottom-left-radius: var(--aiwizo-application-border-radius-primary);
    border-bottom-right-radius: var(--aiwizo-application-border-radius-primary);
  }
  ${(props) => {
    switch (props.status) {
      case UPLOADING: {
        return css`
          background-color: var(--aiwizo-application-light-background-blue);
        `;
      }
      case PENDING: {
        return css`
          background-color: var(--aiwizo-application-light-background-grey);
          color: var(--aiwizo-application-faded-text-grey);
        `;
      }
      case FAIL: {
        return css`
          background-color: var(--aiwizo-application-light-background-red);
          color: var(--aiwizo-application-grey);
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
