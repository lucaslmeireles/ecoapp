export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Featured Category Name',
        type: 'string',
        
      },
      {
        name: 'posts',
        title: 'Posts',
        type: 'array',
        of: [{type: 'reference', to: [ {type:'post'} ]  }],
      },
    ]
  
}