const express = require('express')
const app = express()
const PORT = 7000
const cors = require('cors') //Cross-origin requests

app.use(cors())

let banks = {
    'access bank nigeria ltd': {
        'name': 'Access Bank Nigeria Ltd',
        'hqAddress': '1655 Oyin Jolayemi Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.accessbankplc.com'
    },
    'diamond bank plc': {
        'name': 'Diamond Bank Plc',
        'hqAddress': 'Plot 1261, Adeola Hopewell Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.diamondbank.com'
    },
    'ecobank nigeria plc': {
        'name': 'EcoBank Nigeria Plc',
        'hqAddress': '2, Ajose Adeogun Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.ecobank.com'
    },
    'enterprise bank limited': {
        'name': 'Enterprise Bank Limited',
        'hqAddress': 'Plot 143, Ahmadu Bello Way',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.enterprisebank.com'
    },
    'fidelity bank plc': {
        'name': 'Fidelity Bank Plc',
        'hqAddress': 'Plot 1261, Adeola Hopewell Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.fidelitybank.com'
    },
    'first bank plc': {
        'name': 'First Bank Plc',
        'hqAddress': 'Samuel Asabia House, 35 Marina',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.firstbanknigeria.com'
    },
    'fcmb plc': {
        'name': 'First City Monument Bank Plc',
        'hqAddress': 'Primrose Tower, 17A Tinubu Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.fcmb-ltd.com'
    },
    'guaranty trust bank plc': {
        'name': 'Guaranty Trust Bank Plc',
        'hqAddress': '635 Akin Adesola Street',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.gtbank.com'
    },
    'keystone bank limited': {
        'name': 'Keystone Bank Limited',
        'hqAddress': 'Bank PHB House, 1 Bank PHB Crescent',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.keystonebankng.com'
    },
    'stanbic ibtc bank ltd': {
        'name': 'Stanbic IBTC Bank Ltd',
        'hqAddress': 'IBTC Place, Walter Carrington Crescent',
        'hqLocation': 'Victoria Island, Lagos',
        'contactMail': 'www.ibtc.com'
    },
    'unknown': {
        'name': 'Unknown',
        'hqAddress': 'Unknown',
        'hqLocation': 'Unknown',
        'contactMail': 'Unknown'
    }

}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/server.html')
})
app.get('/api/banks/:bankName', (req, res)=>{
    const bankAddy = req.params.bankName.toLowerCase()
     //use cos of spaces, dot notation will not work
    if(banks[bankAddy]){
        res.json(banks[bankAddy])
    }else{
        res.json(banks['unknown'])
    }
})
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})