import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
   var newArg
    console.log(value , args)

    //return (args[0]? newArg = args[0] : newArg ="*" )
    return value.split("").join(args[0] || "*");
  }

}
