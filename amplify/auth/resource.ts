import { defineAuth } from '@aws-amplify/backend';
import { preSignUp } from './autoConfirmAddToGroup/resource';

export const auth = defineAuth({
  loginWith: {
    email: true
  },
  groups: ["NO_PAY", "FREE_TRIAL", "STANDARD", "PREMIUM" ],
  triggers: {
    preSignUp,
  },

  access: (allow) => [
    allow.resource(preSignUp).to(["addUserToGroup", "updateUserAttributes"]),
  ],
});

  