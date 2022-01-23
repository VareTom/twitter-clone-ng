export class MenuItem {
  icon: string;
  text?: string;
  
  constructor(json: any) {
    this.icon = json.icon;
    this.text = json.text ?? '';
  }
}