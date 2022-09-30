import styled from 'styled-components';

export const Layout = styled.article`
  ${props =>
    (props.style = {
      display: 'flex',
      justifyContent: 'center',
    })}
`;
export const Form = styled.form`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '40px 0 30px 0',
      minHeight: '100vh',
      gap: 5,
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
        width: '30%',
        padding: '15px 0 15px 0',
        margin: 15,
        border: '2px solid #52c3cb',
        color: '#52c3cb',
        // border: '2px solid black',
        borderRadius: 8,
        background: '#31404C',
        
      })}
  }
  #submit:hover {
    ${props =>
      (props.style = {
        background: '#52c3cb',
        color: 'black',
        border: '2px solid black',
        
      })}
  }
  #reset:hover {
    ${props =>
      (props.style = {
        background: '#f31616',
        color: 'black',
        border: '2px solid black',
        
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
