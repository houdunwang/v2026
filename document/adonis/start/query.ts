import emitter from '@adonisjs/core/services/emitter'
import chalk from 'chalk';

emitter.on('db:query', function (query) {
  console.log(chalk.bgHex('#16a085').white(`${chalk.bgGray('DB Query')} : ${query.sql} `));
  console.log('');
})
