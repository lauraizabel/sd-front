import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  width: 95%;
  margin: 10% auto;
`;

export const ContainerCreateNote = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  input {
    margin-right: 24px;
    height: 32px;
    outline: none;
    width: calc(100% - 100px);
  }

  button {
    height: 36px;
    cursor: pointer;
    width: 100px;
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
  }
`;

export const ContainerNotes = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
`;

export const ContainerNote = styled.div`
  display: flex;
  margin: 12px 0;
  justify-content: space-between;
  width: 100%;

  span {
    width: calc(100% - 100px);
    font-size: 18px;
    font-weight: bold;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  button {
    cursor: pointer;
    width: 100px;
    font-size: 14px;
    font-weight: 600;
  }
`;
