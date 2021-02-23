'use strict';
/*
- Complete the function names `computeEarnings`. It should take an array of
  tasks and an hourly rate as arguments and return a formatted Euro amount
  (e.g: `€11.34`) comprising the total earnings.
- Use the `map` array function to take out the duration time for each task.
- Multiply each duration by a hourly rate for billing and sum it all up.
- Make sure the program can be used on any array of objects that contain a
  `duration` property with a number value.
*/
const mondayTasks = [
  {
    name: 'Daily standup',
    duration: 30, // specified in minutes
  },
  {
    name: 'Feature discussion',
    duration: 120,
  },
  {
    name: 'Development time',
    duration: 240,
  },
  {
    name: 'Talk to different members from the product team',
    duration: 60,
  },
];

const hourlyRate = 25;

function computeEarnings(
  /* TODO parameter(s) go here */ mondayTasks,
  hourlyRate
) {
  // TODO complete this function
  let timeSum = 0;

  const allTime = mondayTasks.map((x) => x.duration);

  for (const x of allTime) {
    timeSum += x;
  }
  const timeInHour = (timeSum / 60) * hourlyRate;
  return '€' + timeInHour.toFixed(2);
}

// example use case 1
const earnings = computeEarnings(mondayTasks, hourlyRate);
console.log(`Total earnings: ${earnings}`); // -> "Total earnings: €187.5"
/*
// example use case 2
const earnings = computeEarnings(
  [
    {
      name: 'walked 3 dogs',
      duration: 230,
    },
    {
      name: 'cooked 4 bowls of soup',
      duration: 185,
    },
    {
      name: 'cleaned 5 dirty dishes',
      duration: 95,
    },
  ],
  hourlyRate
);
console.log(`Total earnings: ${earnings}`); // -> "Total earnings: €212.5"
*/
// ! Do not change or remove the code below
module.exports = {
  computeEarnings,
  mondayTasks,
  hourlyRate,
};
