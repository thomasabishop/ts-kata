type CommonEventType = {
  date: number;
  location: string;
};

type Concert = CommonEventType & {
  band: string;
};

type Conference = CommonEventType & {
  keynoteSpeaker: string;
};

const concert: Concert = {
  date: 20210901,
  location: 'New York',
  band: 'The Byrds',
};
