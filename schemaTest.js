 
 //working:

//  const bandSchema = new schema.Entity('band', {}, {idAttribute: 'name'});

//  const recordLabelSchema = new schema.Entity('recordLabel', {}, {idAttribute: 'recordLabel'});

//  const recordLabelListSchema = new schema.Array(recordLabelSchema);

// const bandsSchema = new schema.Entity('bandsSchema', {name: bandSchema, recordLabel: recordLabelSchema});

// const festivalSchema = new schema.Entity('festivalSchema', { bands: [bandsSchema]}, {idAttribute:'name'})

// const festivalListSchema = new schema.Array(festivalSchema);


// iteration 2:

// const bandSchema = new schema.Entity('band', {}, {idAttribute: 'name'});

// const recordLabelSchema = new schema.Entity('recordLabel', {}, {idAttribute: 'recordLabel'});

// const recordLabelListSchema = new schema.Array(recordLabelSchema);


// const bandsSchema = new schema.Entity('recordlabel', {},  {idAttribute: 'recordLabel'});

// const festivalSchema = new schema.Entity('festivalSchema', { bands: [bandsSchema]}, {idAttribute:'name'})

// const festivalListSchema = new schema.Array(festivalSchema);


// manual normalisation:

// const normaliseData = (jsonData) => {

//   let normalised_Data = {}

//   for(let i=0; i < jsonData.length; i++) {

//     normalised_Data[jsonData[i].name] = jsonData[i]

//   }

//   //console.log(normalised_Data);

//   return normalised_Data;


// }

// let normalised_Data = normaliseData(mockData);
// console.log(normalised_Data); 

