import db from '../../../config/database.js';
import shortid from 'shortid';

export default{
    Query: {
        Groups: () =>  db('Groups'),
        Group: (_, {id}) => db('Groups').where({ id }).first(),
    },
    Mutation: {
        async createGroup (_, {input}){
            const id = shortid()
            await db('Groups').insert({
                id: id,
                name: input.name,
                description: input.description,
                id_user_adm: input.id_user_adm,
            })
            return await db('Groups').where({id}).first()
        },
        deleteGroup (_, {id}){return db('Groups').where({id}).delete()},

        deleteAllGroup (){return db('Groups').delete()},
    },
};