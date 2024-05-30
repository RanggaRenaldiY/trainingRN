import {appSchema, tableSchema} from '@nozbe/watermelondb';

const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'post',
      columns: [
        {name: 'title', type: 'string'},
        {name: 'body', type: 'string'},
      ],
    }),
  ],
});
