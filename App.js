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

import {normalize,arrayOf, schema} from 'normalizr';



const App = () => {
const URL = 'api/v1/festivals';
const [isLoading, setIsLoading] = useState(false);
const [dataSource, setDataSource] = useState(null);


const mockData = [
  {
    name: 'Festival_A',
    bands: [
      {
        name: 'Band_W',
        recordLabel: 'RecordLabel_1'
      },
      {
        name: 'Band_X',
        recordLabel: 'RecordLabel_3'
      },
      {
        name: 'Band_Z',
        recordLabel: 'RecordLabel_1'
      }
    ]
  },
  {
    name: 'Festival_B',
    bands: [
      {
        name: 'Band_A',
        recordLabel: 'RecordLabel_2'
      },
      {
        name: 'Band_B',
        recordLabel: 'RecordLabel_3'
      },
      {
        name: 'Band_Z',
        recordLabel: 'RecordLabel_1'
      }
    ]
  },
  {
    name: 'Festival_C',
    bands: [
      {
        name: 'Band_W',
        recordLabel: 'RecordLabel_1'
      },
      {
        name: 'Band_A',
        recordLabel: 'RecordLabel_2'
      },
      {
        name: 'Band_Z',
        recordLabel: 'RecordLabel_1'
      }
    ]
  },
  {
    name: '',
    bands: [
      {
        name: 'Band_E',
        recordLabel: 'RecordLabel_1'
      },
      {
        name: 'Band_F',
        recordLabel: 'RecordLabel_2'
      },
      {
        name: 'Band_G',
        recordLabel: 'RecordLabel_3'
      }
    ]
  }

];




// const bandsSchema = new schema.Entity('recordlabel', {},  {idAttribute: 'recordLabel'});

// const festivalSchema = new schema.Entity('festivalSchema', { bands: [bandsSchema]}, {idAttribute:'name'})
// const recordLabel = new schema.Array('recordArray', bandsSchema);
// const festivalListSchema = new schema.Array(festivalSchema);

const normaliseData = (jsonData) => {

let recordLabelMap = {};

jsonData.forEach(festival => {
    const festivalName = festival.name || "No festival Attended";
    console.log(festivalName);
    console.log(festival);
    festival.bands.forEach( band => {
      console.log(band);
      const bandName = band.name;
      const recordLabelCompany = band.recordLabel;
      if(!recordLabelMap[recordLabelCompany]){
        recordLabelMap[recordLabelCompany] = {}
      }

      if(!recordLabelMap[recordLabelCompany][bandName]) {
        recordLabelMap[recordLabelCompany][bandName] = [];
      }

      console.log(bandName);
      console.log(recordLabelCompany);
    
      recordLabelMap[recordLabelCompany][bandName].push(festivalName)  
      console.log(recordLabelMap);
    })
})

console.log('recordmap is ',recordLabelMap);

return recordLabelMap;

//   let normalised_Data = {}

//   for(let i=0; i < jsonData.length; i++) {

//     normalised_Data[jsonData[i].name ? jsonData[i].name: 'no festival attended'] = jsonData[i]

//   }


//   let normalised_RecordLabel = {
//     bands: [],
//   };

// let band = [];


//   console.log('normalised data is ', normalised_Data)

   
//        Object.values(normalised_Data).map(festival => {    
//      festival.bands.map(band => {
               
//                  console.log('band is ', band)
//                  normalised_RecordLabel[band.recordLabel] = band.recordLabel;
              
                 
//            })
//         })

//   //normalised_RecordLabel["labels"] = [...recordLableSet];

//   console.log(normalised_RecordLabel)
 
  




  //console.log(normalised_Data);

 // return normalised_Data;


}


const fetchFestivals =  () => {
 setIsLoading(true);
  //const apiCall = await fetch(URL);
  //const festivalsData = await apiCall.json();
  const festivalsData = mockData;
  setIsLoading(false);
 // setDataSource(festivalsData);
 // console.log("festival data is ", festivalsData);

 
 //const normalizedData = normalize(festivalsData, festivalListSchema);
 

let normalised_Data = normaliseData(mockData);

setDataSource(normalised_Data);

console.log(normalised_Data); 


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
       
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
          {

          dataSource &&  Object.keys(dataSource).map((recordLabel, key) => {
         return(
           <View key={key}> 
         <Text style={styles.recordLabel} >{recordLabel}</Text>
         {Object.keys(dataSource[recordLabel]).map((band, key) =>{
           return(
             <View key={key}>
             <Text style={styles.band}>{band}</Text>
             <View>
             {dataSource[recordLabel][band].map(festival => {
               return(<Text style={styles.festival}>{festival}</Text>)
             })}
             </View>
            
             </View>
           )
         })} 
         </View>
         )
               
        })
           

          }


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
  recordLabel:{
    paddingLeft: 10
  },
  band: {
    paddingLeft:20
  },
  festival: {
    paddingLeft: 30
  }

});

export default App;
