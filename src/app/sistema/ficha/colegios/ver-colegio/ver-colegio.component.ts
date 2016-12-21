import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location }       from '@angular/common';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';

import { ColegiosService } from '../../../../services/sistema/ficha/colegios.service';
import { Colegio } from '../colegio';

@Component({
  selector: 'app-ver-colegio',
  templateUrl: './ver-colegio.component.html',
  styleUrls: ['./ver-colegio.component.css']
})
export class VerColegioComponent implements OnInit {
  @ViewChild('modal')
  modal: ModalComponent;

  id: number;
  private sub: any;

  colegio: Colegio;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private location: Location,
              private colegiosService: ColegiosService,) {
  }

  ngOnInit() {
    this.colegio = new Colegio();

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.route.params
      .switchMap((params: Params) => this.colegiosService.getColegio(+params['id']))
      .subscribe((colegio) => {
        this.colegio = colegio;
      });
  }

  goBack(): void {
    this.location.back();
  }

  goToEdit(id: number){
    console.log(this.route);
    this.router.navigate(['./editar-colegio',id],{relativeTo: this.route.parent});

  }

  modalOpen(): void {
    this.modal.open();
  }

  modalClose(): void {
    this.deleteColegio();
  }

  modalDismiss(): void {
    this.modal.dismiss();
  }

  deleteColegio(): void {
    this.colegiosService.deleteColegio(this.colegio.id).subscribe(()=>{
      this.modalClose();
      this.goBack();
    });
  }
}
