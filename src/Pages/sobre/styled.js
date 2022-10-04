import styled from 'styled-components';

export const Layout = styled.article`
  ${props =>
    (props.style = {
      display: 'flex',
      position: 'relative',
      width: '100%',
      height: '100vh',
    })}
  ${props =>
    props.theme === true &&
    (props.style = {
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '95%',
      height: '98%',
    })}
`;
export const Background80 = styled.div`
  ${props =>
    (props.style = {
      height: '100%',
    })}
`;
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
  ${props =>
    props.theme === true &&
    (props.style = {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 0,
      height: 100,
      width: '100%',
    })}
`;

export const CardPrincipal = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      position: 'absolute',
      justifyContent: 'flex-end',
      alignItems: 'center',
      top: '12%',
      right: '0%',
      width: '100%',
    })}

  ${props =>
    props.theme === true &&
    (props.style = {
      position: 'relative',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      top: 0,
    })}

.imagemLabu {
    ${props =>
      (props.style = {
        width: '40%',
        height: 'auto',
        borderRadius: '0 0 100px 50px',
        zIndex: 1000,
      })}

    ${props =>
      props.theme === true &&
      (props.style = {
        position: 'relative',
        width: 300,
        top: '80%',
      })}
  }
`;
export const BoxSobre = styled(CardPrincipal)`
  ${props =>
    (props.style = {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: '0 0 0 5%',
      opacity: 0.8,
      gap: 30,
      height: 400,
      background: '#141414',
      color: 'white',
    })}

  h1 {
    ${props =>
      (props.style = {
        width: '70%',
        component: 'div',
        fontSize: 24,
        fontWeight: 'bold',
      })}
    ${props =>
      props.theme === true &&
      (props.style = {
        width: '95%',
      })}
  }

  .sobre {
    ${props =>
      (props.style = {
        textAlign: 'justify',
        width: '50%',
      })}
    ${props =>
      props.theme === true &&
      (props.style = {
        width: '95%',
      })}
  }
`;

export const listIcon = {
  display: 'flex',
  color: 'white',
  flexDirection: 'row',
  fontSize: 50,
};
