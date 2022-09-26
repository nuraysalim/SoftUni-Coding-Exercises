function factory(library, orders) {
    let res = [];
    let index = 0;

 for (const obj of orders) {

    for (const [key, value] of Object.entries(obj)) {
            if (key === 'template') {
                res.push(value);
                continue;
            }

            for (const nameOfOrder of value) {
                (res[index])[nameOfOrder] = library[nameOfOrder];                
            }
            index++;
        }
    }

    return res;

}

const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  

  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];
  const products = factory(library, orders);
  console.table(products);