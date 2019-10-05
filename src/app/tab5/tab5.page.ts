import { Component, OnInit, Input } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-tab5',
  templateUrl: 'tab5.page.html',
  styleUrls: ['tab5.page.scss']
})
export class Tab5Page implements OnInit{

    @Input() searchIdeas = ['ferguson', 'Manual', 'Byron', 'Calderon', 'Lolita'];
    itemsSearchAvalaible = [
      {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Alfreds Futterkiste",
            "last_name": "Lawson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Ana Trujillo Emparedados y helados",
            "last_name": "Ferguson",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Berglunds snabbköp",
            "last_name": "Funke",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Blauer See Delikatessen",
            "last_name": "Fields",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "Blondel père et fils",
            "last_name": "Edwards",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Drachenblut Delikatessend",
            "last_name": "Howell",
            "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        },
        {
          "id": 13,
          "email": "centro.howell@reqres.in",
          "first_name": "Centro comercial Moctezuma Byron",
          "last_name": "catalina",
           "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"
        }
    ];
    
    searchingPosts = false;
    itemsSearchFound = null;
    valueToSearch = new BehaviorSubject('');

  constructor() {}


  getValueObservable(){
    return this.valueToSearch.asObservable();
  }

  ngOnInit(){
    this.getValueObservable().pipe(
      map(search_term => search_term),
      debounceTime(1000),
      distinctUntilChanged()
    )
    .subscribe(async value=>{
       console.log('value', value);
        this.searchingPosts = true;
        if (value.length === 0) {
            this.searchingPosts = false;
            console.log('No buscar valor vacio');
            this.itemsSearchFound = null;
            return;
        }
        await setTimeout(async ()=>{
            const items_found = await this.itemsSearchAvalaible.filter(user => {
              const search_term = new RegExp(value.toLowerCase(), 'g');
              return user.first_name.toLowerCase().search(search_term) != -1;
            });
            this.itemsSearchFound = items_found;
            console.log('Valor encontrado', items_found);
            if (this.itemsSearchFound.length === 0) {
              console.log('No hay coincidencias');
            } else {
                console.log(`Hay ${this.itemsSearchFound.length} coincidencias`);
            }
            this.searchingPosts = false;
        }, 2000); 
     });
  }

  async searchPosts(event) {

          this.valueToSearch.next(event.detail.value);
    
    
     /*.map(event => event.target.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe({
        next: function(value) {
          console.log(value);
        }
      });
        if (valor.length === 0) {
            this.searchingPosts = false;
            this.itemsSearchFound = [];
            return;
        }
        this.searchingPosts = true;
        await setTimeout(async ()=>{
            
            this.itemsSearchFound = await this.itemsSearchAvalaible.filter(user => {
              const search_term = new RegExp(valor.toLowerCase(), 'g');
            return user.first_name.toLowerCase().search(search_term) != -1;
            });
           
            if (this.itemsSearchFound.length === 0) {
              console.log('No hay coincidencias');
            } else {
                console.log(`Hay ${this.itemsSearchFound.length} coincidencias`);
            }
             this.searchingPosts = false;
        }, 900)*/
       
        
        
        /*const valor: string = event.detail.value;
        if (valor.length === 0) {
            this.searchingEvents = false;
            this.eventsBusqueda = [];
            return;
        }
        this.searchingEvents = true;
        this.postService.searchPosts(valor, environment.eventsSlug).pipe(
            finalize(() => {
                this.searchingEvents = false;
            })
        ).subscribe((res: any) => {
            console.log('events search', res);
            this.eventsBusqueda = res.data;
            if (res.data.length === 0) {
                this.utilsService.showToast('No hay coincidencias');
            } else {
                this.utilsService.showToast(`Hay ${res.data.length} coincidencias`);
            }
        }, err => {
                console.log('Ocurrio un error al buscar eventos', err);
                this.utilsService.showToast('Ocurrio un error al buscar eventos');
        });*/
    }

}
