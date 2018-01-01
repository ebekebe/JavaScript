const format = s => JSON.stringify(s, 0, 2);

let diary = {
  log: [
    {
      day: 1,
      activities: [
        'Jumping',
        'Running',
        'Swimming'
      ],
      transformed: false
    },
    {
      day: 2,
      activities: [
        'Jumping',
        'Climbing',
        'Swimming'
      ],
      transformed: true
    },
    {
      day: 3,
      activities: [
        'Sky Diving',
        'Running',
        'Climbing'
      ],
      transformed: true
    }
  ],
  // creating a function to add new entry since it is a process we will repeat
  write: function(d, a, t) {
    this.log.push({
      day: d,
      activities: a,
      transformed: t
    });
  }
};

// Adding a new entry
diary.write(4, ['Climbing', 'Base Jumping', 'Swimming'], true);

// create a new array of only the days we transformed
let transformed = diary.log.filter(day => day.transformed);
console.log(format(transformed));
