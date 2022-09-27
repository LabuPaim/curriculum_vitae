import styled from 'styled-components';

export const modal = {
  display: 'flex',
  position: 'absolute',
  justifyContent: 'center',
  alignItems: 'center',
  top: 0,
  left: 0,
  height: '100%',
  maxWidth: '100%',
  background: 'transparent',
};

export const Layout = styled.article`
  /* display: 'flex';
  flex-direction: 'column';
  text-align: 'justify';
  background: '#820707';
  color: 'white';
  width: '100%';
  height: 'auto';
  transform: 'scale(1.1)';
  padding: 20;
  border: '5px solid white';
  border-radius: 15; */
`;

export const layoutBox = {
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'justify',
  background: '#820707',
  color: 'white',
  width: '50%',
  height: '50%',
  padding: 20,
  border: '5px solid white',
  borderRadius: 15,
};

export const informacaoBox = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginTop: -10,
  gap: 15,
  // zIndex: 100,
};

export const topX = {
  display: 'flex',
  justifyContent: 'flex-end',
  color: 'yellow',
  width: '100%',
  fontSize: 30,
};
