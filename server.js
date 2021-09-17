const { Console } = require('console')
const express   =   require('express')
const fs = require('fs')

const HOSTNAME = "localhost"
const PORT = 4000

const DB_PATH = `${__dirname}/database/companies.json`
const app = express();

const getCompanies = (req, res) => {
    fs.readFile(DB_PATH, (error, data) => {
        if (error) {
            console.log(error)
            res.status(500).end();
        } else {
            res.status(200).send(JSON.parse(data))
        }
    })
}

const deleteCompany = (res, req) => {
    const { id } = req.params;

    fs.readFile(DB_PATH, (error, data) => {
        if (error) {
            console.log(error)
            res.status(500).end()
        }
        else {
            const companies = JSON.parse(data);
            const filterData = JSON.stringify(
                companies.filter(company => company.id != id),
                null,
                2
            )
        }

        fs.writeFileSync(DB_PATH, filterData);
        res.status(200).send(JSON.parse(filterData))

    })
}

app.get("/companies", getCompanies)

app.delete("/companies/:id", deleteCompany);

app.use((req, res) => {
    res.status(400).send("Not Found")
})

app.listen(PORT, HOSTNAME, () => {
    console.log("SERVER running")
})