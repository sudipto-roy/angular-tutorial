import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transform'
})
export class TransformPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    switch(args){
      case 'upper': return value.toUpperCase();
      case 'lower': return value.toLowerCase();
      case 'camelcase': 
        var words = value.split(" ");  
        for (var index = 0; index < words.length; index++) {
          words[index][0].toUpperCase;
          if(index === 0) continue;
          words[0]+=words[index];
        }
        return words[0];
    }
  }

}
