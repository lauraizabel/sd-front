import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  justify-content: space-between;
`;

export const Content = styled.textarea`
  width: 50%;
  min-height: 100vh;
  resize: none;
`;

export const LogContainer = styled.div`
  width: 45%;
`;

export const LogContent = styled.div`
  margin: 20px;
  border-bottom: 1px solid white;
  div {
    margin-top: 12px;
  }
`;
