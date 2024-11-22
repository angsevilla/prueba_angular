import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
    return 'Hola Mundo';
  }

  getHeroDescription():string{
    // return this.name + '-' + this.age;
    return `${this.name} - ${this.age}` ;
  }

  changeHero():void{
    this.name='Spiderman';
  }

  changeEdad():void{
    this.age=35;
  }

  resetForm():void{
    this.name = "ironman";
    this.age = 45;
  }
}
