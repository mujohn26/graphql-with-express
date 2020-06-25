
const resolvers = {
  Query: {
    async getStudent(root, { id }, { models }) {
      return models.Student.findByPk(id);
    },
    async getAllStudents(root, args, { models }) {
      return models.Student.findAll();
    },
    async getHobbies(root, { id }, { models }) {
      // eslint-disable-next-line no-return-await
      return await models.Hobbies.findByPk(id);
    }
  },
  Mutation: {
    async createStudent(root, { name, email }, { models }) {
      return models.Student.create({ name, email });
    },
    async createHobbies(root, { studentId, title }, { models }) {
      return models.Hobbies.create({ studentId, title });
    },
  },
  Student: {
    async hobbies(hobbies) {
      return hobbies.getHobbies();
    }
  },
  Hobbies: {
    async student(student) {
      return student.getStudent();
    }
  },

};

module.exports = resolvers;
