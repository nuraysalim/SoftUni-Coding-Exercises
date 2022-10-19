function ticket(array, sortingCriteria) {

class Ticket {
    constructor(destination, price, status) {
    this.destination = destination,
    this.price = price,
    this.status = status
    }  
};

    let tickets = [];

for (const city of array) {
    let [destination, price, status] = city.split('|');
    let newTicket = new Ticket(destination, Number(price), status);
    tickets.push(newTicket);
};

let sorted;

sortingCriteria !='price' ? sorted = tickets.sort((a,b) => {
  return  a[sortingCriteria].localeCompare(b[sortingCriteria])}) :
  sorted = tickets.sort((a, b) => a - b);

  return sorted;
}
console.log(ticket(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'))

