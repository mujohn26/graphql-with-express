import db from '../database/models';

const resolvers = {
  Query: {
    async getStudent(root, { id }, { models }) {
      return db.Student.findByPk(id);
    },
    async getAllStudents(root, args, { models }) {
      return db.Student.findAll();
    },
    async getHobbies(root, { id }, { models }) {
      return await db.Hobbies.findByPk(id);
    }
  },
  Mutation: {
    async createStudent(root, { name, email }, { models }) {
      return db.Student.create({ name, email });
    },
    async createHobbies(root, { StudentId, title }, { models }) {
      return db.Hobbies.create({ StudentId, title });
    },
  },
//   Student: {
//     async hobbies(hobbies) {
//       return hobbies.getHobbies();
//     }
//   },
//   Hobbies: {
//     async student(student) {
//       return student.getStudent();
//     }
//   },

};

module.exports = resolvers;
