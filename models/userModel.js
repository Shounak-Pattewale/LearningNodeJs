// const users = {
//     {
//     id : 1,
//     name : "Shounak",
//     age : 20
//     },
//     {   id : 2,
//         name : "Bob",
//         age : 22
//     }
// };

const users = [
    {
        id:1,
        name:"Shounak"
    },
    {
        id:2,
        name:"Bob"
    }
];

exports.getUsers = () => {
    return users;
}