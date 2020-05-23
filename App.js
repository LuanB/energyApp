/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {normalize, schema} from 'normalizr';

const App = () => {
const URL = 'api/v1/festivals';
const [isLoading, setIsLoading] = useState(false);
const [dataSource, setDataSource] = useState(null);

const mockData = [
  {
    'name': 'Festival_A',
    'bands': [
      {
        'name': 'Band_W',
        'recordLabel': 'RecordLabel_1'
      },
      {
        'name': 'Band_X',
        'recordLabel': 'RecordLabel_3'
      },
      {
        'name': 'Band_Z',
        'recordLabel': 'RecordLabel_1'
      }
    ]
  },
  {
    'name': 'Festival_B',
    'bands': [
      {
        'name': 'Band_A',
        'recordLabel': 'RecordLabel_2'
      },
      {
        'name': 'Band_B',
        'recordLabel': 'RecordLabel_3'
      },
      {
        'name': 'Band_Z',
        'recordLabel': 'RecordLabel_1'
      }
    ]
  },
  {
    'name': 'Festival_C',
    'bands': [
      {
        'name': 'Band_W',
        'recordLabel': 'RecordLabel_1'
      },
      {
        'name': 'Band_A',
        'recordLabel': 'RecordLabel_2'
      },
      {
        'name': 'Band_Z',
        'recordLabel': 'RecordLabel_1'
      }
    ]
  },
  {
    'name': '',
    'bands': [
      {
        'name': 'Band_E',
        'recordLabel': 'RecordLabel_1'
      },
      {
        'name': 'Band_F',
        'recordLabel': 'RecordLabel_2'
      },
      {
        'name': 'Band_G',
        'recordLabel': 'RecordLabel_3'
      }
    ]
  }

];





const band = new schema.Entity('band', {}, {idAttribute: 'name'});
const recordLabelCompany = new schema.Entity('recordLabelCompany', {}, {idAttribute: 'recordLabel'});

const festivalSchema = new schema.Entity('festival', {}, {idAttribute: 'name'});

const festivalListSchema = new schema.Array(festivalSchema);








const fetchFestivals = async () => {
 setIsLoading(true);
  //const apiCall = await fetch(URL);
  //const festivalsData = await apiCall.json();
  const festivalsData = mockData;
  setIsLoading(false);
  setDataSource(festivalsData);
  console.log("festival data is ", festivalsData);

  const normalizedData = normalize(festivalsData, festivalListSchema);
  console.log('normalised data is ', normalizedData);

}

useEffect(() => {
   fetchFestivals();
},[]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
