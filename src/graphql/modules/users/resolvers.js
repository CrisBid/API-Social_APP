import db from '../../../config/database.js';
import shortid from 'shortid';

export default{
    Query: {
        Users: () =>  db('Users'),
        User: (_, {id}) => db('Users').where({ id }).first(),
    },
    Mutation: {
        async createUser (_, {input}){
            const id = shortid()
            await db('Users').insert({
                id: id,
                name: input.name,
                surname: input.surname,
                status: input.status,
                email: input.email,
                password: input.password
            })
            return await db('Users').where({id}).first()
        },
        deleteUser (_, {id}){return db('Users').where({id}).delete()},

        deleteAllUser (){return db('Users').delete()},
    },
};