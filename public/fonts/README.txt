=== VANGUARD CF FONT DIRECTORY ===

If you have downloaded the Vanguard CF font files (.woff2, .otf, or .ttf),
place them right here in this folder (`public/fonts/`) with names like:

- VanguardCF-Bold.woff2 (or VanguardCF-Bold.otf / .ttf)
- VanguardCF-Regular.woff2 (or VanguardCF-Regular.otf / .ttf)

The website CSS has already been configured to automatically check:
1. Your local operating system font registry: local('Vanguard CF'), local('VanguardCF'), local('Vanguard CF Bold')
2. This `public/fonts/` folder for self-hosted files
3. High-impact condensed geometric web font fallbacks (Antonio, Barlow Condensed, Syne)
