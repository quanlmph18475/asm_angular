import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './interface/product';
@Pipe({
  name: 'searchbox'
})
export class SearchboxPipe implements PipeTransform {

  transform(data: IProduct[], searchText: string): IProduct[] {
    return data.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
  }
  // transform( { docs}: any, searchText: string): IProduct[] {
  //   return docs ? docs.filter((item: IProduct) => item.name.toLowerCase().includes(searchText.toLowerCase())) : []
  // }
}