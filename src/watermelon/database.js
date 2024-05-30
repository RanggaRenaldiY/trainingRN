import {Database} from '@nozbe/watermelondb';
import {SQLiteAdapter} from '@nozbe/watermelondb/adapter/sqlite';
// import Post from './Post';
import schema from './schema';

const adapter = new SQLiteAdapter({
  dbName: 'WatermelonDemo', // Make sure to name your database
  schema,
});

const database = new Database({
  adapter,
  modelClasses: [Post],
  actionsEnabled: true, //Ensure actions are enabled
});

export default database;
