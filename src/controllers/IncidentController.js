const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const incidents = await connection('incidents').select('*');
    
    response.json({ incidents });
  },

  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;

    const [id] = await connection('incidents').insert({
      ong_id,
      title,
      description,
      value
    });

    return response.json({ id });
  }
}
