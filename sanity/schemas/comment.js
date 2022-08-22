export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'name',
      type: 'string',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'string',
    },
    {
      name: 'post',
      title: 'post',
      type: 'reference',
      to: {type: 'post'},
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },


  ],


}
