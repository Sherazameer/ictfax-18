export class Transmission {
  program_id: number = 0;
  title: string = '';
  transmission_id: number = 0;
  service_flag: number = 0;
  account_id: number = 0;
  phone: number = 0;
  email: string = '';
  contact_id: number = 0;
  origin: string = '';
  direction: string = '';
  status: string = '';
  response: string = '';
  program_type: string = '';
  try_allowed: any;
  fax_from: any;
  fax_to: any;
  job_id: any;
  result: any;
  last_run:any;

  contact?: {
    phone:any;
  }
  contact_phone:any;
}

export class SMSProgram {
  program_id: number = 0;
  text_id: number = 0;
  name: string = '';
}

export class TemplateProgram {
  program_id: number = 0;
  template_id: number = 0;
  name: string = '';
}

export class DocumentProgram {
  program_id: number = 0;
  document_id: number = 0;
  name: string = '';
}

export class VoiceCallProgram {
  program_id: number = 0;
  recording_id: number = 0;
  name: string = '';
}

export class Program {
  program_id: number = 0;
  parent_id: number = 0;
  name: string = '';
  type: string = '';
  text_id: number = 0;
  template_id: number = 0;
  document_id: number = 0;
  contact_id: number = 0;
  recording_id: number = 0;
}

export class IVRProgram {
  program_id: number = 0;
  name: string = '';
}