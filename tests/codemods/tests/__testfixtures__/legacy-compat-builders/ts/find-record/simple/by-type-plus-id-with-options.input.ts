const post = await store.findRecord<Post>('post', '1', {
  reload: true,
  backgroundReload: false,
  include: 'author,comments',
  adapterOptions: {},
});
