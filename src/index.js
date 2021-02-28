const express = require('express')
const projectRouter = require('./routes/project/index');
const taskRouter = require('./routes/task/index');
const userRouter = require('./routes/user/index');

require('./db/mongoose')

const app = express();

const port = process.env.PORT || 3001

app.use(express.json());
app.use(userRouter);
app.use(projectRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

module.exports = app;
