import {NedbServiceOptions, Service} from 'feathers-nedb';
import {Application} from '../../declarations';

export class Messages extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(options: Partial<NedbServiceOptions>, app: Application) {
    super(options);
  }
}
