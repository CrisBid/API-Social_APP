import db from '../../../config/database.js';
import shortid from 'shortid';

export default{
    Query: {
        GroupsMsgs: () =>  db('GroupsMsg'),
        GroupsMsg: (_, {id}) => db('GroupsMsg').where({ id }).first(),
    },
    Mutation: {
        async createGroupsMsg (_, {input}){
            const id = shortid()
            await db('GroupsMsg').insert({
                id: id,
                id_user: input.id_user,
                id_group: input.id_group,
                name_user: input.name_user,
                level_user: input.level_user,
                send_status: input.send_status,
                conteudo_msg: input.conteudo_msg,
            })
            return await db('GroupsMsg').where({id}).first()
        },
        deleteGroupsMsg (_, {id}){return db('GroupsMsg').where({id}).delete()},

        deleteAllGroupsMsg (){return db('GroupsMsg').delete()},
    },
};