export class BaseModel<T> {
  value:T;
  key:string;
  label:string;
  validators:any[];
  validatorMessages:{};
  order:number;
  controlType:string;
  width: string;

  constructor(options:{
    value?:T,
    key?:string,
    label?:string,
    validators?:any[],
    validatorMessages?:{},
    order?:number,
    controlType?:string,
    width?:string;
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validators = options.validators || [];
    this.validatorMessages = options.validatorMessages || {};
    this.order = options.order === undefined ? 1 : options.order;
    this.controlType = options.controlType || '';
    this.width = options.width || '320px';
  }
}