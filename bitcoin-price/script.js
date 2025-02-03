
let obj = {}

let mainRow = document.getElementById("main-row")

function getRates() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((data) => {
            return data.json()
        })
        .then((data) => {
            obj = data.bpi;
            console.log(obj)

            mainRow.innerHTML = `
            <div class="col-12">
                <h3 class="text-center" >Bitcoin </h3>
            </div>

            <div class="col-lg-4" >
                <div class="card px-3 py-3" >
                    <h4>${obj.USD.code}</h4>
                    <p>${obj.USD.symbol} <span>${obj.USD.rate}</span></p>
                    <p>${obj.USD.description}</p>
                    <p> ${obj.USD.rate_float}</p>
                </div>
            </div>
            <div class="col-lg-4" >
                <div class="card px-3 py-3" >
                    <h4>${obj.GBP.code}</h4>
                    <p>${obj.GBP.symbol}<span>${obj.GBP.rate}</span></p>
                    <p>${obj.GBP.description}</p>
                    <p> ${obj.GBP.rate_float}</p>
                </div>
            </div>
            <div class="col-lg-4" >
                <div class="card px-3 py-3" >
                    <h4>${obj.EUR.code}</h4>
                    <p>${obj.EUR.symbol} <span>${obj.EUR.rate}</span></p>
                    <p>${obj.EUR.description}</p>
                    <p> ${obj.EUR.rate_float}</p>
                </div>
            </div>
            `

        })
        .catch((err) => {
            console.log(err)
            mainRow.innerHTML = "<h3>something went wrong please try again later</h3>"
        })
}


// setTimeout(()=>{
    getRates()

// },5000)

