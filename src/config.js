var config = {};

config.mytesla = {};

config.mytesla.username = process.env.MYTESLA_USER || 'username';
config.mytesla.password = process.env.MYTESLA_PASSWORD || 'password';

module.exports = config;