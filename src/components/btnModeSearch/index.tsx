import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { btnModeSearchStyles } from '../../styles';
import { useBtnModeSearch } from './useBtnModeSearch';


export interface BtnModeSearch {
  action: (value: 'flightNumber' | 'destination') => void;
  searchType: 'flightNumber' | 'destination';
}

export const BtnModeSearch = (props: BtnModeSearch) => {
  const { setType, active } = useBtnModeSearch(props);
  return (
    <View style={btnModeSearchStyles.btnModeSearchContainer}>
      <View style={btnModeSearchStyles.line}></View>
      <View style={btnModeSearchStyles.contentBtns}>
        <View>
          <TouchableOpacity onPress={() => setType('flightNumber')}>
            <View
              style={
                active === 'flightNumber'
                  ? {
                    ...btnModeSearchStyles.botonBack,
                    ...btnModeSearchStyles.btnActive,
                  }
                  : btnModeSearchStyles.botonBack
              }>
              <Text
                style={
                  active === 'flightNumber'
                    ? {
                      ...btnModeSearchStyles.botonTexto,
                      ...btnModeSearchStyles.btnActive,
                    }
                    : btnModeSearchStyles.botonTexto
                }>
                {'Flight Number'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => setType('destination')}>
            <View
              style={
                active === 'destination'
                  ? {
                    ...btnModeSearchStyles.botonBack,
                    ...btnModeSearchStyles.btnActive,
                  }
                  : btnModeSearchStyles.botonBack
              }>
              <Text
                style={
                  active === 'destination'
                    ? {
                      ...btnModeSearchStyles.botonTexto,
                      ...btnModeSearchStyles.btnActive,
                    }
                    : btnModeSearchStyles.botonTexto
                }>
                {'Destination'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={btnModeSearchStyles.line}></View>
    </View>
  );
};
