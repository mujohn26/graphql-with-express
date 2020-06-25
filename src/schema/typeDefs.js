const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Student{
    id:Int!
    name:String!
    email:String!
    hobbies:[Hobbies!]!
}

type Hobbies{
    id:Int!
    title:String!
    Student:Student!

}

type Query{
    getStudent(id:Int!):Student
    getAllStudents:[Student!]!
    getHobbies(id:Int!):Hobbies
}

type Mutation{
createStudent(name: String!, email: String!): Student!
 createHobbies( StudentId: Int!, title: String!): Hobbies!
}

`;
module.exports = typeDefs;
