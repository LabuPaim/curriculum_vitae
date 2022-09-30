import styled from 'styled-components';

export const modal = {
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  height: '100%',
  width: '100%',
  background: 'transparent',
};

export const Layout = styled.article`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      textAlign: 'justify',
      background: '#0e2d2f',
      color: 'white',
      width: '50%',
      height: 'auto',
      padding: 30,
      border: '5px solid white',
      borderRadius: 15,
    })}
`;

export const TopX = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      justifyContent: 'flex-end',
      color: 'yellow',
      width: '100%',
      fontSize: 30,
      paddingBottom: 10,
    })}
`;

export const BoxButtom = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      paddingTop: 40,
      // margin: '20px 0 20px 0',
      gap: 20,
    })}

  button {
    ${props =>
      (props.style = {
        height: 70,
        width: 150,
        border: '2px solid #82d4d9',
        fontSize: 20,
        borderRadius: 8,
        color: '#82d4d9',
        cursor: 'pointer',
      })}
  }
`;

export const Buttom = styled.button`
  ${props =>
    props.children === 'Deletar'
      ? (props.style = {
          background: '#610505',
          // color: '#82d4d9',
        })
      : (props.style = {
          background: 'transparent',
        })}
`;

export const Box = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      width: '100%',
      gap: 25,
    })}
`;

export const BoxImage = styled.img`
  ${props =>
    (props.style = {
      display: 'flex',
      width: 260,
      height: 260,
      gap: 15,
    })}
`;

export const BoxInfo = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: 15,
    })}

  h2 {
    ${props =>
      (props.style = {
        color: '#82d4d9',
        fontSize: 32,
      })}
  }

  h3 {
    ${props =>
      (props.style = {
        color: '#30979c',
        padding: '0 0 20px 0',
        fontSize: 22,
      })}
  }
  p {
    ${props =>
      (props.style = {
        color: '#82d4d9',
      })}
  }
  strong {
    ${props =>
      (props.style = {
        color: '#30979c',
      })}
  }
`;
