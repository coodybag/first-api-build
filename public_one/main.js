document.querySelector('button').addEventListener('click', getBankAddy)

async function getBankAddy(){
    const bankAddy = document.querySelector('input').value
    try{
        const res = await fetch(`http://localhost:7000/api/banks/${bankAddy}`)
        const data = await res.json()

        // console.log(data)
        document.querySelector('.result').innerText = data.hqAddress
    }catch(err){
        console.log(err);
    }
}