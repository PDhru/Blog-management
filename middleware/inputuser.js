const userInput = (req, res )=> {
    try {
        const {username, password} = req.body;

        if (username&&password) {
            next();
        }else{
            res.status(400).send('Please enter username and password');
            re.redirect("/login")
        }
    } catch (error) {
        console.log(err);
    }
}

module.exports = {userInput};