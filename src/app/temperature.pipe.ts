import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'customTemp',
  standalone: true
})
export class TemperaturePipe implements PipeTransform{
  transform(value: string | number, inputType: 'cel' | 'fah', outputType?: 'cel' | 'fah') {
    let val: number | string | null
    let outputTemp: number
    let symbol: 'C' | 'F'

    if(!value) { return value }

    if(typeof value === "string") {
      val = parseFloat(value)
    } else val = value

    if(inputType === 'cel' && outputType === 'fah') {
      outputTemp = val * (9 / 5) + 32
    } else if(inputType === 'fah' && outputType === 'cel') {
      outputTemp = (val - 32) * (5 / 9)
    } else outputTemp = val

    if(!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F'
    } else {
      symbol = outputType === 'cel' ? 'C' : 'F'
    }

    return `${outputTemp.toFixed(1)} ${symbol}`
  }

}
