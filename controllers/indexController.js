module.exports = {
    index: (req, res) => {
        return res.render('index', {
             title: 'Comisión 21'
             });
    },
    about : (req,res) => res.render('about')

}