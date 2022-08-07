import db from '../../../config/database.js';
import shortid from 'shortid';

export default{
    Query: {
        Books: () => db('Books'),
        Book: (_, {id}) => db('Books').where({ id }).first(),
    },
    Mutation: {
        async createBook (_, {input}){
            const id = shortid()
            await db('Books').insert({
                id: id,
                title: input.title,
                author: input.author
            })
            return await db('users').where({ id }).first()
        },
        deleteBook (_, {id}){return db('Books').where({id}).delete()},

        deleteAllBook (){return db('Books').delete()},
    },
};