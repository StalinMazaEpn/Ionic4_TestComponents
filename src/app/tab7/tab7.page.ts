import { Component, Input } from '@angular/core';

interface IFilterOptions {
  id: any;
  name: string;
}
interface IFilterFields {
  name: string;
  value: any;
  options: IFilterOptions[];
}
interface IBasicFilter {
  [key: string]: IFilterFields;
}



@Component({
  selector: 'app-tab7',
  templateUrl: 'tab7.page.html',
  styleUrls: ['tab7.page.scss']
})
export class Tab7Page {

  @Input() data: any = [
    { id: 1, name: 'lr1', subcategory_id: 1, state: 0 },
    { id: 2, name: 'lr2', subcategory_id: 2, state: 1 },
    { id: 3, name: 'lr3', subcategory_id: 3, state: 0 },
    { id: 4, name: 'lr4', subcategory_id: 4, state: 1 },
    { id: 5, name: 'lr5', subcategory_id: 4, state: 1 },
    { id: 6, name: 'lr6', subcategory_id: 1, state: 0 },
    { id: 7, name: 'lr7', subcategory_id: 2, state: 1 },
    { id: 8, name: 'lr8', subcategory_id: 3, state: 0 },
    { id: 9, name: 'lr9', subcategory_id: 3, state: 1 },
    { id: 10, name: 'lr10', subcategory_id: 4, state: 0 }
  ];

  @Input() filters: IBasicFilter = {
    subcategory_id: {
      name: 'Subcategoria',
      value: "",
      options: [
        { id: 1, name: 'Transporte y Tránsito' },
        { id: 2, name: 'Seguridad' },
        { id: 3, name: 'Protección Animal' },
        { id: 4, name: 'Espacios Verdes' }
      ]
    },
    state: {
      name: 'Estado',
      value: "",
      options: [
        //{ id: "", name: 'Todas'},
        { id: 1, name: 'Atendidos' },
        { id: 0, name: 'Pendientes' }
      ]
    }
  };

  dataFiltered: any = [];
  filtersToApply: any = {};

  constructor() {
    this.dataFiltered.push(...this.data);
  }

  applyFilter(event, type) {
    console.log('type', type);
     for (const prop in this.filters){
          if(prop === type){
             console.log(`obj.${prop} = ${this.filters[prop]}`);
              console.log(`event`, event.detail.value);
              console.log(`type`, type);
              this.filters[prop].value = event.detail.value;
              this.filtersToApply[prop] = this.filters[prop].value;
          }
         
     }
    console.log('filters to aply', this.filtersToApply);
    this.dataFiltered = this.filterData(this.data, this.filtersToApply);
  }

  filterData(items: any[], filter: { [key: string]: any }) {
    console.log('items: ', items);
    console.log('filter: ', filter);
    //Recorrer los Filtros a Aplicar
    for (const prop in filter) {
      console.log(`obj.${prop} = ${filter[prop]}`);
      //Verifico si la propiedad tiene valor "" ya que si lo tiene quiere decir que se solicita el arreglo sin filtrar por la propiedad actual
      if(filter[prop] !== ""){
        items = items.filter(item => {
                return item.hasOwnProperty(prop) && item[prop] === filter[prop];
              });
      }
    }
    //Verificar si se debe filtrar por subcategorias
   /* if (filter.subcategory_id !== "") {
      items = items.filter(item => {
        return item.hasOwnProperty('subcategory_id') && item.subcategory_id === filter.subcategory_id;
      });
    }*/
    //Verificar si se debe filtrar por state
    /*if (filter.state !== "") {
      items = items.filter(item => {
        return item.hasOwnProperty('state') && item.state === filter.state;
      });
    }*/
    return items;
  }

}