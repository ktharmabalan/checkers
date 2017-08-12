const env = process.env;

export default {
  port: env.PORT || 3000,
  host: env.HOST || '0.0.0.0',
  mongodbUri: 'mongodb://localhost:27017/test',
  get serverUrl() {
    return `http://${this.host}:${this.port}`;
  }
};