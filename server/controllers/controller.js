module.exports = {
    getRaces: (req, res) => {
        let db = req.app.get('db');
        db.get_races().then(races => {
            res.status(200).send(races)
        })
    },
    getRace: (req, res) => {
        let db = req.app.get('db');
        db.races.find({ id: [req.params.id] }).then(race => {
            res.status(200).send(race)
        })
    }
}