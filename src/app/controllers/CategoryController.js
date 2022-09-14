const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    };

    const category = await CategoriesRepository.create({
      name,
    });

    return response.json(category);
  };
};

module.exports = new CategoryController();
