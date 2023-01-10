/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    baseUrl: 'https://stage.c2u.io:2001',
    baseUrlOidc: 'https://stage.c2u.io:2021',
    catalogUrl: 'https://stage.c2u.io:28001',
    identificationUrl: 'https://stage.c2u.io:2002',
    contragentUrl: 'https://stage.c2u.io:17001',
    supportCenterUrl: 'https://stage.c2u.io:29001',
    creditApplicationUrl: 'https://stage.c2u.io:2003',
    socialFundUrl: 'https://stage.c2u.io:2012',
    blackListPersonUrl: 'https://stage.c2u.io:2010',
    taxInspectionUrl: 'https://stage.c2u.io:1703',
    localCreditBureauUrl: 'https://stage.c2u.io:8090',
};
