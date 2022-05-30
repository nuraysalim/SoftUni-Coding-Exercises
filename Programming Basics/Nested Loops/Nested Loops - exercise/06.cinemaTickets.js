function cinemaTickets(input) {
  let index = 0;
  let movieName = input[index];
  index++;
  let freeSeats = Number(input[index]);
  index++;
  let takenSeats = 0;

  let standardTicketCounter = 0;
  let studentTicketCounter = 0;
  let kidTicketCounter = 0;

  while (movieName !== "Finish") {
    let kindOfTicket = input[index];
    index++;

    while (kindOfTicket !== "End") {
      takenSeats++;
      switch (kindOfTicket) {
        case "standard":
          standardTicketCounter++;
          break;
        case "student":
          studentTicketCounter++;
          break;
        case "kid":
          kidTicketCounter++;
          break;
      }
      if (takenSeats === freeSeats) {
        break;
      }
      kindOfTicket = input[index];
      index++;
    }
    let perOfFullness = (takenSeats / freeSeats) * 100;
    console.log(`${movieName} - ${perOfFullness.toFixed(2)}% full.`);
    takenSeats = 0;
    movieName = input[index];
    index++;
    freeSeats = Number(input[index]);
    index++;
  }

  let totalTickets =
    standardTicketCounter + studentTicketCounter + kidTicketCounter;

  console.log(`Total tickets: ${totalTickets}`);
  console.log(
    `${((studentTicketCounter / totalTickets) * 100).toFixed(
      2
    )}% student tickets.`
  );
  console.log(
    `${((standardTicketCounter / totalTickets) * 100).toFixed(
      2
    )}% standard tickets.`
  );
  console.log(
    `${((kidTicketCounter / totalTickets) * 100).toFixed(2)}% kids tickets.`
  );
}
//cinemaTickets(["Taxi", "10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"])
cinemaTickets([
  "The Matrix",

  "20",

  "student",

  "standard",

  "kid",

  "kid",

  "student",

  "student",

  "standard",

  "student",

  "End",

  "The Green Mile",

  "17",

  "student",

  "standard",

  "standard",

  "student",

  "standard",

  "student",

  "End",

  "Amadeus",

  "3",

  "standard",

  "standard",

  "standard",

  "Finish",
]);
