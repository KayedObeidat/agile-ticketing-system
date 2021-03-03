const express = require('express');
const Project = require('./models/project');
const Task = require('./models/task');
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

const main = async () => {
    const task = await Task.findById("603e39cc7ce0ce6210c14321")
    await task.populate('owner').execPopulate()
    console.log(task.owner)
}

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})

module.exports = app;
