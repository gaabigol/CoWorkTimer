import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const StartCountDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40.5rem;
  height: 4rem;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  background: ${(props) => props.theme.green500};
  color: ${(props) => props.theme.gray100};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.green700};
  }
`
export const StopCountDownButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40.5rem;
  height: 4rem;
  gap: 0.5rem;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;

  background: ${(props) => props.theme.red500};
  color: ${(props) => props.theme.gray100};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme.red700};
  }
`
