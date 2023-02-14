const validateRequest = (req, res, next) => {
    let {title, content, author} = req.body;
    if(typeof title !== 'string') {
        res
        .status(422)
        .json({error: 'Title is required'})
    }

    if(typeof content !== 'string') {
        res
        .status(422)
        .json({error: 'Content section must be filled'})
    }

    if(typeof author !== 'string') {
        res
        .status(422)
        .json({error: 'Author name is required'})
    }
    next()
}; 

//GOOGLE
const isLoggedIn = (req, res, next) => {
    req.user ? next() : res.sendStatus(401);
}
module.exports = { validateRequest, isLoggedIn }