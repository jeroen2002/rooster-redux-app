/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Appbar } from 'react-native-paper';
import { Text } from 'react-native';

export default class HeaderBar extends React.Component {
  render() {
    const ContentTitle = ({ title, style }) => (
      <Appbar.Content
        title={(
          <Text style={style}>
            {title}
          </Text>
        )}
        style={{ alignItems: 'center' }}
      />
    );
    return (
      <Appbar.Header style={{ backgroundColor: 'white' }}>
        <ContentTitle title="AO2A" style={{ color: 'black' }} />
        <ContentTitle title="9 mei 2020" style={{ color: 'black' }} />
      </Appbar.Header>
    );
  }
}
