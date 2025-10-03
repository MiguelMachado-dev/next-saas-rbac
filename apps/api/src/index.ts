import { appAbility } from '@saas/auth'

const userCanInviteSomeoneElse = appAbility.can('invite', 'User')

console.log('User can invite someone else:', userCanInviteSomeoneElse)
