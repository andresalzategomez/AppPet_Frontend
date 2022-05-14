import { Component, OnInit } from '@angular/core';
import { InsertarComponent } from '../insertar/insertar.component';
import { InsertarService } from '../insertar/insertar.service';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-mascotas',
  templateUrl: './mascotas.component.html',
  styleUrls: ['./mascotas.component.scss'],
})
export class MascotasComponent implements OnInit {
  arrayCategory: any[] = [];
  arrayStatus: any[] = [];
  arrayMascotas: any[] = [];
  statusBuscar:string;
  idMascotas:string;

  constructor(
    private insertarService: InsertarService,
    private insertarComponent: InsertarComponent
  ) {}

  ngOnInit(): void {
    this.cargarMascostas();
    this.arrayCategory = this.insertarComponent.selectCategory();
    this.arrayStatus = this.insertarComponent.selectStatus();

    setTimeout(() => {
      this.arrayCategory = this.insertarComponent.selectCategory();
      this.arrayStatus = this.insertarComponent.selectStatus();
    }, 1000);
  }

  cargarMascostas() {
    this.arrayMascotas = this.insertarService.selectMascotasService(
      this.arrayMascotas
    );
  }

  selectMascotaByStatus(id: string) {
    this.arrayMascotas = this.insertarService.selectMascotaByStatusService(id);
    setTimeout(() => {
      this.arrayMascotas = this.insertarService.selectMascotaByStatusService(id);
    }, 1000);
  }

  selectMascotaById(id: string) {
    this.arrayMascotas = this.insertarService.selectMascotaByIdService(id);
    setTimeout(() => {
      this.arrayMascotas = this.insertarService.selectMascotaByIdService(id);
    }, 1000);
  }

  limpiarArrayMod(){
    this.insertarComponent.limpiarArrayMod();
  }

  ModificarMascota(
    pet:any
  ) {
    this.insertarComponent.modificarMascota(pet);
  }

  cambiarStatus(id:string){
  this.statusBuscar = id;
  console.log(id);  
  }

  cargarIdMasctoas(){
    let aux=""; 
    for (let i = 0; i < this.arrayMascotas.length; i++) {
      aux = aux + this.arrayMascotas[i].id_pet + "(" + this.arrayMascotas[i].name + ")";
      console.log(this.arrayMascotas[i].id_pet);
      }
      console.log(this.arrayMascotas.length);
      
    return aux;
  }
}
