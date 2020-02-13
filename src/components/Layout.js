import React from 'react';
import styled from 'styled-components';

const styles = {
  bkg: {
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(to right, #C06C84, #6C5B7B, #355C7D)"
  }
}

const Container = styled.div`
  /* red sunset */
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, #C06C84, #6C5B7B, #355C7D);
`

const Layout = (props) => {
  return (
    <Container className={styles.bkg}>
      {props.children}
    </Container>
  )
};

export default Layout;