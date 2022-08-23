module.exports = {
    root: true,
    ignorePatterns: ['projects/**/*'],
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: ['tsconfig.json', 'e2e/tsconfig.json'],
                tsconfigRootDir: __dirname,
                createDefaultProgram: true,
            },
            extends: [
                'plugin:@angular-eslint/ng-cli-compat',
                'plugin:@angular-eslint/ng-cli-compat--formatting-add-on',
                'plugin:@angular-eslint/template/process-inline-templates',
            ],
            rules: {
                '@angular-eslint/component-selector': [
                    'error',
                    {
                        type: 'element',
                        prefix: 'ngx',
                        style: 'kebab-case',
                    },
                ],
                '@angular-eslint/directive-selector': [
                    'error',
                    {
                        type: 'attribute',
                        prefix: 'ngx',
                        style: 'camelCase',
                    },
                ],
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/dot-notation': 'off',
                '@typescript-eslint/explicit-member-accessibility': [
                    'off',
                    {
                        accessibility: 'explicit',
                    },
                ],
                'brace-style': ['error', '1tbs'],
                'comma-dangle': ['error', 'always-multiline'],
                'id-blacklist': 'off',
                'id-match': 'off',
                'max-len': [
                    'error',
                    {
                        code: 120,
                    },
                ],
                'no-underscore-dangle': 'off',
                'valid-typeof': 'error',
                'comma-dangle': 'off',
                '@typescript-eslint/comma-dangle': 'off',
                '@typescript-eslint/naming-convention': 'off',
                'max-len': 'off',
            },
        },
        {
            files: ['*.html'],
            extends: ['plugin:@angular-eslint/template/recommended'],
            rules: {},
        },
    ],
};
