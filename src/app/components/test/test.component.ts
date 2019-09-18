import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html'
})
export class TestComponent implements OnInit {

  heroes: any[] = []
  termino: string;

  constructor( private activateRoute: ActivatedRoute,
               private _heroesService: HeroesService) {

              }

    ngOnInit() {

         this.activateRoute.params.subscribe( params => {
           this.termino = params['termino'];
           this.heroes= this._heroesService.buscarHeroes( params['termino'] );
           console.log(this.heroes);
        } );

    }

  }


