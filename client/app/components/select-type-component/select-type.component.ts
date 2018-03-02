import { Component, OnInit, NgModule, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';
import { ServiceTestService } from '../../service-test.service';

declare var jquery: any;
declare var $: any;


@Component({
  selector: 'app-select-type-component',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.css']
})
export class SelectTypeComponent implements OnInit {

  static hide: any;
  constructor(private ServiceTest: ServiceTestService){}


  // @Input() eventSend: EventEmitter<any> = new EventEmitter<any>();

  //  callEvent(quantity:string, label:string) {
  //    this.eventSend.emit(`Quantidade:${quantity}`);
  // }

  //  teste(): void {
  //    alert('foi');
  // // }

  ngOnInit(): void {

    throw new Error("Method not implemented.");
  }

  ngAfterViewInit() {

      $.fn.editable.defaults.mode = 'inline'; //'popup';  

      $(".flag-toggle").popover({
        toggle: 'popover',
        placement: 'bottom',
        title: 'Flag this content',
        html: true,
        content: function () {
          return $('#flag-content-wrapper').html();
        },
        //content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.',
        //trigger: 'focus',
      });

      $('[data-toggle="popover"]').popover();

      $('.flag').editable({
        title: 'Flag this content',
        placeholder: 'salut',
        placement: 'bottom',
        type: 'textarea',
        rows: '3',
        value: '',
        autotext: 'never',
        showbuttons: 'bottom', //false,
        validate: function (value) {
          if ($.trim(value) == '') return 'Please enter a reason for flagging this content';
        },

      });
      //$('.flag').editable();

      $('#firstname').editable({
        validate: function (value) {
          if ($.trim(value) == '') return 'This field is required';
        }
      });


  }

}