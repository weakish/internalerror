export interface LeanCloudAPI {
    // object
    '/classes/:class': {}
    '/classes/:class/:id': {}
    '/cloudQuery': {}
    '/scan/class/:class': {}

    // user
    '/users': {}
    '/users/:id': {}
    '/users/:id/refreshSessionToken': {}
    '/users/:id/updatePassword': {}
    '/users/me': {}
    '/usersByMobilePhone': {}
    '/login': {}
    '/requestPasswordReset': {}
    '/requestEmailVerify': {}
    '/requestMobilePhoneVerify': {}
    '/verifyMobilePhone/:code': {}
    '/requestLoginSmsCode': {}
    '/requestPasswordResetBySmsCode': {}
    '/resetPasswordBySmsCode/:code': {}

    // role
    '/roles': {}
    '/roles/:id': {}

    // push notification
    '/push': {}

    // installation
    '/installations': {}
    '/installations/:id': {}
    
    // schema
    '/schemas': {}
    '/schemas/:class': {}

    // cloud function
    '/functions/:name': {}
    '/call/:name': {}

    // user feedback
    'feedback': {}

    // RTM
    '/rtm/messages': {}
    '/rtm/messages/logs': {}
    '/rtm/transient_group/onlines': {}

    // other
    '/date': {}
    '/exportData': {}
    '/exportData/:id': {}
}