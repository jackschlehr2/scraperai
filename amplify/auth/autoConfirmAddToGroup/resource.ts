import { defineFunction } from '@aws-amplify/backend';

export const autoConfirmAddToGroup = defineFunction({
  // optionally specify a name for the Function (defaults to directory name)
  name: 'autoConfirmAddToGroup',
  // optionally specify a path to your handler (defaults to "./handler.ts")
  entry: './handler.ts'
});