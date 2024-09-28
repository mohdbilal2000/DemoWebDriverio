exports.config = {
    runner: 'local',
    port: 4723,  // Port for Appium
    path: '/wd/hub',  // Default Appium server path
    specs: [
        './test/specs/**/*.js'  // Path to test scripts
    ],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '15', // Change this to match your emulator version
        'appium:deviceName': 'Pixel_8a_For_Testing', // Ensure this matches the emulator name
        'appium:app': 'C:/Users/mohdb/Downloads/Android-NativeDemoApp-0.4.0.apk',
        'appium:automationName': 'UiAutomator2',
        'appium:noReset': true,
    }],
    services: [['appium', {
        command: 'appium',
        appiumCommandTimeout: 120 // Increase this value as needed
    }]],
    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    }
};
