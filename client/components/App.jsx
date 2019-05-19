import React from 'react';
import styled from 'styled-components';
import TimeListContainer from '../redux/containers/TimeListContainer';
import AddressContainer from '../redux/containers/AddressContainer';
import PhoneNumberContainer from '../redux/containers/PhoneNumberContainer';
import WebsiteContainer from '../redux/containers/WebsiteContainer';

const Module = styled.div`
  padding: 24px 32px;
  min-width: 250px;

  @font-face {
    font-family: "Calibre-Regular";
    src: url("../../public/fonts/CalibreWeb-Regular.woff2") format("woff2");
  }
`;

const Spacer = styled.div`
  width: 100%;
  height: 10px;

`;

const initData = (cb) => {
  fetch(`http://127.0.0.1:1234/api/restaurants/${'10'}/info`)
    .then(res => res.json())
    .then(data => cb(data));
};

const App = ({ updateData }) => {
  initData((data) => {
    updateData(data);
  });

  return (
    <Module>
      <TimeListContainer />
      <Spacer />
      <AddressContainer />
      <Spacer />
      <PhoneNumberContainer />
      <Spacer />
      <WebsiteContainer />
      {/* <div id='phone'><a href="tel:">{props.phone}</a></div>
      <div id='website'>{thprops.url}</div>
      <div id='get-directions'></div>
      <MapContainer /> */}
    </Module>
  );
};

export default App;
