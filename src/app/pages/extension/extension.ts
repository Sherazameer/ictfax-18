export class Extension {
  account_id: number = 0;
  username: string = '';
  passwd: string = '';
  passwd_pin: string = '';
  first_name: string = '';
  last_name: string = '';
  phone: number = 0;
  email: string = '';
  address: string = '';
  active: number = 0;
  type: any;
  settings? : {
    emailtofax_coversheet: any;
  }
}

export class Settings {
  value:any;
}