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
      marginTop: '30px',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    })}
`;
export const BoxForm = styled.div`
  ${props =>
    (props.style = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      gap: 15,
    })}

  ${props =>
    props.theme === true &&
    (props.style = {
      alignItems: 'flex-start',
    })}
`;

export const BoxAvatar = styled(BoxForm)`
  ${props =>
    (props.style = {
      alignItems: 'center',
      width: '90%',
    })}

  ${props =>
    props.theme !== true &&
    (props.style = {
      flexDirection: 'row',
      alignItems: 'flex-end',
      width: '50%',
    })}

  #avatar {
    ${props =>
      props.theme === true
        ? (props.style = {
            width: 150,
            height: 150,
            background: '#0e2d2f',
          })
        : (props.style = {
            width: 300,
            height: 300,
            background: '#0e2d2f',
          })}
  }
`;

export const BoxColumn = styled(BoxForm)`
  ${props =>
    (props.style = {
      width: '90%',
    })}

  ${props =>
    props.theme !== true &&
    (props.style = {
      width: '50%',
    })}

  .formControlRow {
    ${props =>
      (props.style = {
        flexDirection: 'row',
        minWidth: '100%',
        gap: '10%',
      })}

    ${props =>
      props.theme === true &&
      (props.style = {
        flexDirection: 'column',
        gap: 15,
      })}

      .controlRow {
      ${props =>
        (props.style = {
          minWidth: '45%',
        })}
    }
  } ;
`;

export const BoxButtom = styled(BoxForm)`
  ${props =>
    (props.style = {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: '20px',
      gap: 55,
    })}

  ${props =>
    props.theme === true &&
    (props.style = {
      gap: 15,
    })}

  button {
    ${props =>
      (props.style = {
        width: '15%',
        padding: '15px 0 15px 0',
        border: '2px solid #52c3cb',
        color: '#52c3cb',
        borderRadius: 8,
        background: '#31404C',
      })}

    ${props =>
      props.theme === true &&
      (props.style = {
        width: '40%',
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

export const formControlColumn = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 15,
};
