module.exports = {
    getRaces: (req, res) => {
        let db = req.app.get('db');
        db.get_races().then(races => {
            res.status(200).send(races)
        })
    },
    getRace: (req, res) => {
        let db = req.app.get('db');
        db.races.find({ num: [req.params.num] }).then(race => {
            res.status(200).send(race)
        })
    },
    addRace: (req, res) => {
        const { num, abbrev, race_name, circuit, year, winner, nationality, team, mfg, flag_url, winner_abbrev, winner_short, mfg_abbrev, mfg_logo_url } = req.body;
        let db = req.app.get('db');
        db.add_race([num, abbrev, race_name, circuit, year, winner, nationality, team, mfg, flag_url, winner_abbrev, winner_short, mfg_abbrev, mfg_logo_url]).then(newRace => {
            res.status(200).send(newRace)
        })
    }
}