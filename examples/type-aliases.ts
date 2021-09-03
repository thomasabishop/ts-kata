let Age: {
  name: string;
  yearOfBirth: number;
  currentYear: number;
  ageNow: () => number;
};

let thomas: typeof Age;

thomas = {
  name: 'Thomas',
  yearOfBirth: 1988,
  currentYear: 2021,
  ageNow: function () {
    return this.currentYear - this.yearOfBirth;
  },
};
