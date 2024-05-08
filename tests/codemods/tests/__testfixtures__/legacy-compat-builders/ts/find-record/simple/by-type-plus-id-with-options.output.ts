import { findRecord } from '@ember-data/legacy-compat/builders';
const { content: post } = await store.request(
  findRecord<Post>('post', '1', {
    reload: true,
    backgroundReload: false,
    include: 'author,comments',
    adapterOptions: {},
  })
);
