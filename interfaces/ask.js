const execSync = require('child_process').execSync;

module.exports = function askCreator(template = '') {
  let name = execSync('git config --global user.name', { encoding: 'utf-8' });
  let email = execSync('git config --global user.email', { encoding: 'utf-8' });

  name = (name && JSON.stringify(name.toString().trim()).slice(1, -1)) || ''
  email = (email && (' <' + email.toString().trim() + '>')) || ''

  return [
    {
      type   : 'input',
      name   : 'name',
      message: 'Project name',
      default: template,
      validate (input) {
        const done = this.async();
        if (input.trim().length === 0) {
          done('project name is empty');
          return;
        }
        done(null, true);
      }
    },
    {
      type   : 'input',
      name   : 'description',
      message: 'description',
      default: 'A React project'
    },
    {
      type   : 'input',
      name   : 'License',
      default: 'MIT'
    },
    {
      type   : 'input',
      name   : 'author',
      message: 'author',
      default: email
    },
    {
      type: 'list',
      name: 'cssPerprocessor',
      message: 'Whether or not to use css perprocessor?',
      choices: [
        {
          name: 'yes, use less',
          value: 'less',
          short: 'less'
        },
        {
          name: 'yes, use sass',
          value: 'sass',
          short: 'sass'
        },
        {
          name: 'no',
          value: 'none',
          short: 'none'
        }
      ]
    }
  ];
}
