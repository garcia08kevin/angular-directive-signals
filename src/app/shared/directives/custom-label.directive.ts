import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;
  private _color : string = 'red';
  private _message? : ValidationErrors | null;

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set message(value: ValidationErrors | null | undefined ) {
    this._message = value;
    this.htmlElement!.nativeElement.innerHTML = this.setText();
  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    console.log('OnInit directive')
  }

  setStyle():void{
    if(!this.htmlElement) return;
    this.htmlElement!.nativeElement.style.color = this._color;
  }

  setText():string{
    if(!this.htmlElement) return '';
    if(!this. _message) return '';
    const errors = Object.keys(this._message);
    for (const key of errors)
    switch(key){
      case 'minlength': {
        const caracterMinimo: number = this._message['minlength'].requiredLength;
        const caracteresActuales: number = this._message['minlength'].actualLength
        return `El campo requere minimo ${caracterMinimo - caracteresActuales} caracteres`
      }
      case 'email': {
        return 'Debes introducir un email'
      }
      case 'required':{
        return 'Este campo es obligatorio'
      }
      default:{
        return ''
      }
    }
    return '';
  }

}
