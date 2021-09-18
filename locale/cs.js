var Faker = require('../lib');
var faker = new Faker({ locale: 'cs', localeFallback: 'en' });
faker.locales['cs'] = require('../lib/locales/cs');
faker.locales['en'] = require('../lib/locales/en');
module['exports'] = faker;