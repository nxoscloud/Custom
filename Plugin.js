function Service() {
    // Registers the plugin
    const Custom = package.create('package', path.join(__dirname, '../../../../Custom/default.js'), 'Custom');

    // Enables the plugin
    Custom.enabled = true;

    // Additional Plugin Information
    Custom.author = 'Cassitydev';
    Custom.version = '0.1.1';
    Custom.repository = 'https://github.com/nxoscloud/Custom';
    Custom.description = '(Custom package for NextLanguage) A Custom testing package for NextLanguages v2.0-dev plugin system';
    
    // Optional Return value
    return Custom.strings
}