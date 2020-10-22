'use strict';

exports.ACCESS_DENIED = (msg) => `Access denied: ${msg}`;
exports.NOT_AUTHORIZED = 'User is not authorized to access this endpoint';
exports.TOKEN_EXPIRED = 'Token is expired';
exports.INVALID_TOKEN = 'Token is invalid';
exports.MISSING_HEADER = 'Bearer or api-key authentication required';
exports.MULTIPLE_API_KEY = 'Multiple API Key methods are provided';
exports.DEACTIVATED_USER = 'This account is deactivated';
exports.WRONG_LIMIT = 'Value "limit" must be an integer';
exports.WRONG_PAGE = 'Value "page" must be an integer';
exports.WRONG_ORDER_BY = 'Value "order_by" cannot include whitespaces';
exports.WRONG_ORDER = 'Value "order" must be one of: ["asc", "desc"]';
exports.USER_NOT_FOUND = 'User not found';
exports.SIGNUP_NOT_AVAILABLE = 'Sign up not available';
exports.INVALID_PASSWORD = 'Invalid password. It has to contain at least 8 characters, at least one digit and one character.';
exports.SAME_PASSWORD = 'New password must be different from previous password';
exports.PROVIDE_VALID_EMAIL = 'Please provide a valid email';
exports.USER_EXISTS = 'User already exists';
exports.INVALID_VERIFICATION_CODE = 'Invalid verification code';
exports.VERIFICATION_CODE_USED = 'Verification code already used';
exports.INVALID_CAPTCHA = 'Invalid captcha';
exports.INVALID_OTP_CODE = 'Invalid OTP Code';
exports.USER_NOT_VERIFIED = 'User is not verified';
exports.USER_NOT_ACTIVATED = 'User is not activated';
exports.INVALID_CREDENTIALS = 'Credentials incorrect';
exports.SERVICE_NOT_SUPPORTED = 'This service is not supported';
exports.USERNAME_CANNOT_BE_CHANGED = 'Username can not be changed';
exports.USERNAME_IS_TAKEN = 'Username is already taken. Select a different username';
exports.TOKEN_OTP_MUST_BE_ENABLED = 'OTP must be enabled to create a token';
exports.TOKEN_NOT_FOUND = 'Token not found';
exports.CODE_NOT_FOUND = 'Code not found';
exports.CODE_USED = 'Code is already used';
exports.TOKEN_REVOKED = 'Token is already revoked';
exports.INVALID_WITHDRAWAL_TOKEN = 'Withdrawal token is incorrect';
exports.EXPIRED_WITHDRAWAL_TOKEN = 'Expired withdrawal token';
exports.MULTIPLE_API_KEY = 'Multiple API Key method is provided';
exports.API_KEY_NULL = 'Access Denied: API Key is not provided';
exports.API_REQUEST_EXPIRED = 'Access Denied: API request is expired';
exports.API_SIGNATURE_NULL = 'Access Denied: API Signature is not provided';
exports.API_KEY_INVALID = 'Access Denied: Invalid API Key';
exports.API_KEY_OUT_OF_SCOPE = 'Unauthorized Access. You are not allowed to access this service with this key';
exports.API_KEY_EXPIRED = 'Access Denied: API Key is expired';
exports.API_KEY_INACTIVE = 'Access Denied: API Key is frozen';
exports.API_SIGNATURE_INVALID = 'Access Denied: Invalid API Signature';
exports.ACCOUNT_NOT_VERIFIED = 'Account is not verified';
exports.INVALID_SYMBOL = (symbol) => `Invalid symbol: ${symbol}`;
exports.INVALID_COIN = (coin) => `Invalid coin: ${coin}`;
exports.INVALID_AMOUNT = (amount) => `Invalid amount: ${amount}`;
exports.WITHDRAWAL_DISABLED_FOR_COIN = (coin) => `Withdrawals are disabled for coin: ${coin}`;
exports.UPGRADE_VERIFICATION_LEVEL = (level) => `Verification level must be at or above ${level}`;
exports.INVALID_VERIFICATION_LEVEL = (level) => `Invalid verification level: ${level}`;
exports.NO_NEW_DATA = 'No new data given';
exports.SUPPORT_DISABLED = 'Cannot send email to support at this time';
exports.COMMUNICATOR_CANNOT_UPDATE = (value) => `Communicator operators cannot update value: ${value}`;
exports.MASK_VALUE_GIVEN = 'Masked value given';
exports.NO_DATA_FOR_CSV = 'No data to convert to CSV';
exports.USER_IS_VERIFIED = 'User is already verified';
exports.PROVIDE_USER_CREDENTIALS = 'Please provide a a user\'s kit id, network id, or email';
exports.PROVIDE_KIT_ID = 'Please provide a user\'s kit id';
exports.PROVIDE_NETWORK_ID = 'Please provide a user\'s network id';
exports.CANNOT_DEACTIVATE_ADMIN = 'Main admin account cannot be deactivated';
exports.USER_ALREADY_DEACTIVATED = 'User account is already deactivated';
exports.USER_NOT_DEACTIVATED = 'User account is not deactivated';
exports.CANNOT_CHANGE_ADMIN_ROLE = 'Main admin account role cannot be changed';
exports.PROVIDE_TABLE_NAME = 'Please provide a table name';
exports.INVALID_PLUGIN = (plugin) => `Invalid plugin: ${plugin}`;
exports.PLUGIN_ALREADY_ENABELD = (plugin) => `Plugin ${plugin} already enabled`;
exports.PLUGIN_ALREADY_DISABLED = (plugin) => `Plugin ${plugin} already disabled`;
