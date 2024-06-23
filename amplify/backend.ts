import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource'

const backend = defineBackend({
    auth
});

const { cfnUserPool } = backend.auth.resources.cfnResources

