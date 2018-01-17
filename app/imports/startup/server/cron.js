import { Meteor } from 'meteor/meteor';
import { SyncedCron } from 'meteor/percolate:synced-cron';

SyncedCron.config({
  log: true,
});

Meteor.startup(() => {
  SyncedCron.start();
});
