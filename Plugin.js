function Service() {
    // Registers the plugin
    const Custom = package.create('package', path.join(__dirname, '../../../../Custom/default.js'), 'Custom');

    // Enables the plugin
    Custom.config('package', 'Custom', 'enabled', true);

    // Returns if the plugin is enabled or not
    const enabled = Custom.strings.full.package.dev.self[1];

    // Additional Plugin Information
    Custom.config('package', 'Custom', 'author', 'Cassitydev');
    Custom.config('package', 'Custom', 'version', '0.1.0');
    Custom.config('package', 'Custom', 'repo', 'https://github.com/nxoscloud/Custom');
    Custom.config('package', 'Custom', 'description', '(Custom package for NextLanguage) A Custom testing package for NextLanguages v2.0-dev plugin system');

    // Optional Return value
    return Custom.strings
}