import express from 'express';
// initialized/created express
const app = express();
const PORT=process.env.PORT || 3000;

// return information
app.get('/users',(req, res) => {
    res.json(
        {message: 'This is the GET Users path!',});
});

app.get('/product',(req, res) => {
    res.json(
        {
            message: 'This is the GET Product path!',}
);
});
app.post('/product',(req, res) => {
    res.json(
        {message: 'This is Product POST path and something was added!',}
);
});

app.patch('/product',(req, res) => {
    res.json(
        {message: 'This is the Product PATCH path and something was edited!',})
});

app.delete('/product',(req, res) => {
    res.json(
        {message: 'This is Product DELETE path and something was deleted!',}
);
});
app.post('/users',(req, res) => {
    res.json(
        {message: 'This is Users POST path and something was added!',});
});
app.patch('/users',(req, res) => {
    res.json(
        {message: 'this is the Users PATCH path and something was edited!',});
});
app.delete('/users',(req, res) => {
    res.json(
        {message: 'This is Product DELETE path and something was deleted!',});
});
// allows project to be an API
app.listen(PORT,()=> {
    console.log ('http://localhost:' + PORT)
    console.log ('Server is running...')
});
