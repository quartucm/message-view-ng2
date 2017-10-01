export class Message {
  id: number;
  content: string;
  isStarred: boolean;
  handle: string;
  timestamp: string;
  avatar: string;
  source: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
    console.log(values);
  }

}
