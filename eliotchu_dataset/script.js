let years = []
let temps = []

async function getData() {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let arr=[]
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = row[1];
              years.push(year)
              temps.push(temp)
    })
    for(let i=0; i<temps.length;i++){
        temps[i]=parseFloat(temps[i])+14
        years[i]+=''
      }
        }
    
    async function chart(){
      const response = await fetch("ZonAnn.Ts+dSST.csv");
    const data = await response.text();
    const rows = data.split("\n").slice(1);
    let arr=[]
    rows.forEach((elem) => {
              const row = elem.split(",");
              const year = row[0];
              const temp = row[1];
              years.push(year)
              temps.push(temp+14)
    })
    for(let i=0; i<temps.length;i++){
      temps[i]=parseFloat(temps[i])+14
      years[i]+=''
    }
        getData()
        const ctx = document.getElementById('myChart')
        new Chart(ctx, {
            type: 'line',
            data: {
              labels: years,
              datasets: [{
                label: 'Global Average Temperature',
                data: temps,
                borderWidth: 0.5
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: false
                }
              }
            }
          });
    }
    //end of functions
    //call the function to test if you see the image on the left in the console
    chart()