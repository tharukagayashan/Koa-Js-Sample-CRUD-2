const Router = require('@koa/router');
const { createUser, getAllUsers, getUser, updateUser, deleteUser } = require('../api/user.api');

const router = new Router({

    prefix: '/user'

})

router.post('/insert', async (ctx) => {

    const user = ctx.request.body;

    await createUser(user)
        .then((data) => {
            ctx.body = data.fullname + " Inserted Successfully";
        })
        .catch((err) => {
            ctx.body = err.message;
        })

})

router.get('/', async (ctx) => {

    await getAllUsers()
        .then((data) => {
            ctx.body = data;
        })
        .catch((err) => {
            ctx.body = err;
        })

})

router.get('/:id',async (ctx)=>{

    const id = ctx.params.id;

    await getUser(id)
    .then((data)=>{
        ctx.body = data;
    })
    .catch((err)=>{
        ctx.body = err;
    })

})

router.put('/update/:id',async (ctx)=>{

    const id = ctx.params.id;
    const user = ctx.request.body;

    await updateUser(id,user)
    .then((data)=>{
        ctx.body = data.fullname + " Updated";
    })
    .catch((err)=>{
        ctx.body = err;
    })

})

router.delete('/delete/:id',async (ctx)=>{

    const id = ctx.params.id;

    await deleteUser(id)
    .then((data)=>{
        ctx.body = data.fullname + " Deleted";
    })
    .catch((err)=>{
        ctx.body = err;
    })

})

module.exports = router;