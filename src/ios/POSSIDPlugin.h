#import <Cordova/CDV.h>

@interface POSSIDPlugin : CDVPlugin

- (void)getConnectedSSID:(CDVInvokedUrlCommand*)command;

@end