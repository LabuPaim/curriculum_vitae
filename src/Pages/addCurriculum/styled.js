import styled from 'styled-components';

export const Layout = styled.article`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '80vw',
      gap: 2,
    })}
`;

export const avatar = {
  width: 300,
  height: 300,
  background: '#0e2d2f',
};

export const Box = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-end',
      width: '40vw',
      gap: 2,
    })}

  button {
    ${props =>
      (props.style = {
        width: '40%',
        padding: '15px 0 15px 0',
      })}
  }
`;
export const BoxColumn = styled(Box)`
  ${props =>
    (props.style = {
      flexDirection: 'column',
    })}
`;

export const formControlRow = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  gap: 2,
};

export const formControlColumn = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 15,
};
