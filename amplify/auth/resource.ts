import { defineAuth } from '@aws-amplify/backend';
import { autoConfirmAddToGroup } from './autoConfirmAddToGroup/resource';

export const auth = defineAuth({
  loginWith: {
    email: true
  },
  groups: ["NO_PAY", "FREE_TRIAL", "STANDARD", "PREMIUM" ],
  triggers: {
    "preAuthentication": autoConfirmAddToGroup
  },

  access: (allow) => [
    allow.resource(autoConfirmAddToGroup).to(["addUserToGroup", "updateUserAttributes"]),
  ],
});

  