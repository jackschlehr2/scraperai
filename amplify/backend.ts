import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource'
import { autoConfirmAddToGroup } from './auth/autoConfirmAddToGroup/resource'
const backend = defineBackend({
    auth, 
    autoConfirmAddToGroup
});

const { cfnUserPool } = backend.auth.resources.cfnResources


cfnUserPool
