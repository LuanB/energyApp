 
 //working:

//  const bandSchema = new schema.Entity('band', {}, {idAttribute: 'name'});

//  const recordLabelSchema = new schema.Entity('recordLabel', {}, {idAttribute: 'recordLabel'});

//  const recordLabelListSchema = new schema.Array(recordLabelSchema);

// const bandsSchema = new schema.Entity('bandsSchema', {name: bandSchema, recordLabel: recordLabelSchema});

// const festivalSchema = new schema.Entity('festivalSchema', { bands: [bandsSchema]}, {idAttribute:'name'})

// const festivalListSchema = new schema.Array(festivalSchema);