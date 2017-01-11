import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Component({
  selector: 'app-by-tipo-ensenanza',
  templateUrl: './by-tipo-ensenanza.component.html',
  styleUrls: ['./by-tipo-ensenanza.component.css']
})
export class ByTipoEnsenanzaComponent implements OnInit {
  @Input('docs') docs: string[];
  @Output() onSelect = new EventEmitter<any>();

  public selectData: Array<Select2OptionData>;
  public selectOptions: Select2Options;
  public disabledSelect: boolean;
  public selectValue = [];
  selected: any;
  selectedHolder: any;

  constructor() { }

  ngOnInit() {
    this.selectData = [
      {
        id: 'opt1',
        text: 'Options 1'
      },
      {
        id: 'opt2',
        text: 'Options 2'
      },
      {
        id: 'opt3',
        text: 'Options 3'
      },
      {
        id: 'opt4',
        text: 'Options 4'
      }
    ];

    this.selectOptions = {
      multiple: true,
      closeOnSelect: false,
      placeholder: 'Seleccione Tipo de Enseñanza',
      allowClear: true,
    };

    this.disabledSelect = false;
  }

  selectAll(){
    if(!(this.disabledSelect)){
      this.selectedHolder = this.selected;
      let selectedBuffer = [];
      for (let option of this.selectData){
        selectedBuffer.push(option.id);
      }
      this.selected = selectedBuffer;
    } else {

      if(this.selectedHolder){
        this.selected = this.selectedHolder;
      } else {
        this.selected = [];
      }

    }
    this.disabledSelect = !(this.disabledSelect);
    this.emitSelection();
  }

  selectChanged(e: any){
    this.selected = e.value;
    this.emitSelection();
  }

  emitSelection(){
    this.onSelect.emit(this.selected);
  }
}
