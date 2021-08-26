const listTasks = [
  {
    task: 'Book dentist appointment',
    date: 'Mon, 23 Aug 2021 12:32:08 GMT',
  },
  {
    task: 'Fix refrigerator',
    date: 'Mon, 23 Aug 2021 12:54:08 GMT',
  },
  {
    task: 'Walk dog',
    date: 'Tue, 26 Aug 2021 12:54:08 GMT',
  },
];

function onDeleteTask(taskName: string): void {
  const position = listTasks.map((item) => item.task).indexOf(taskName);
  console.log(position);
  listTasks.splice(-1, 1);
  console.log(listTasks);
}

onDeleteTask('Fix refrigerator');
