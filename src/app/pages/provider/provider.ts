export class Provider {
  provider_id: number = 0;
  name: string = '';
  gateway_flag: number = 0;
  // service_flag: number = 0;
  node_id: number = 0;
  host: number = 0;
  port: number = 0;
  username: string = '';
  password: string = '';
  dialstring: string = '';
  prefix: number = 0;
  settings: string = '';
  register: boolean = false;
  weight: number = 0;
  type: any;
  active: any;
}