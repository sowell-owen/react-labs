import styled from "@emotion/styled";

export const StyledFooter = styled.footer<{ bg?: string }>`
  margin-top: auto;
  background: ${props => props?.bg || '#f5f5f5'}
  padding: 20px 0;
  width: 100%;
  height: 70px;`