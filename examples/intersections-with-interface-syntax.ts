interface IEvent {
  date: number;
  location: string;
}

interface IConcert extends IEvent {
  band: string;
}

interface IConference extends IEvent {
  keynoteSpeaker: string;
}

const conference: IConference = {
  date: 20210901,
  location: 'New York',
  keynoteSpeaker: 'Bill Gates',
};
