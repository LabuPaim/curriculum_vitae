import styled from 'styled-components';

export const Layout = styled.article`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      width: '100%',
      height: '100vh',
    })}
`;
export const Background80 = styled.div``;
export const Background20 = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      position: 'fixed',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      right: 0,
      height: '100%',
      width: 300,
      background: '#141414',
    })}
`;

export const principal = {
  display: 'flex',
  position: 'absolute',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'center',
  top: '12%',
  right: '0%',
  height: 600,
  width: '100%',
  zIndex: 100,
};

export const imagem = {
  width: 680,
  height: 'auto',
  borderRadius: '0 0 180px 50px',
  zIndex: 1000,
};

export const boxSobre = {
  display: 'flex',
  position: 'absolute',
  width: '100%',
  height: 300,
  opacity: 0.8,
  gap: 30,
  background: '#141414',
  color: 'white',
};
export const boxSobreText = {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  opacity: 0.8,
  gap: 30,
  background: '#141414',
  color: 'white',
  // marginLeft: 100,
};

export const sobre = {
  width: '70%',
  variant: 'h1',
  component: 'div',
  fontSize: 24,
  fontWeight: 'bold',
};

export const typographyRow = {
  textAlign: 'justify',
  width: '70%',
};

export const listIcon = {
  display: 'flex',
  color: 'white',
  flexDirection: 'row',
  fontSize: 50,
};
