import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {
  titulo:string ="hola soy un titulo";
  dinero:number = 2400;
  ganancias:number = 0.54;
  fecha:Date = new Date("03/24/2020");
  textoLargo:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et hic voluptatibus, possimus saepe dicta qui dolorum rem fuga molestias cum illum placeat, laboriosam sunt culpa suscipit quibusdam voluptate molestiae at?"
  constructor() { }

  ngOnInit(): void {
  }

}
