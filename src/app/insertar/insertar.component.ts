import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { InsertarService } from './insertar.service';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.scss'],
})
export class InsertarComponent implements OnInit {
  arrayCategory: any[] = [];
  arrayTag: any[] = [];
  arrayStatus: any[] = [];
  arrayMascotas: any[] = [];
  arrayMascotasMod: any[] = [];
  arrayVacio:any[]= [{id_pet:'', name:'', photoUrl: '', id_category: '', id_status: '', id_tag: ''}]

  constructor(
    private insertarService: InsertarService,
    private menuComponente: MenuComponent,
    private menuComponent: MenuComponent
  ) {}

  ngOnInit(): void {
    this.arrayCategory = this.selectCategory();
    this.arrayTag = this.selectTag();
    this.arrayStatus = this.selectStatus();
    this.selectMascostas()
    setTimeout(() => {
      this.arrayCategory = this.selectCategory();
      this.arrayTag = this.selectTag();
      this.arrayStatus = this.selectStatus();
    }, 1000);
    this.arrayMascotasMod = this.insertarService.getArrayMascotasMod();
    console.log("arrayMascotasMod", this.arrayMascotasMod, this.arrayMascotasMod.length);
  }

  selectCategory() {
    return this.insertarService.selectCategoryService();
  }

  selectTag() {
    return this.insertarService.selectTagService();
  }

  selectStatus() {
    return this.insertarService.selectStatusService();
  }

  selectMascostas() {
    this.arrayMascotas = this.insertarService.selectMascotasService(
      this.arrayMascotas
    );
  }

  guardarMascota(
    id:string,
    name: string,
    url: string,
    category: string,
    tag: string,
    status: string
  ) {
    if(id != ""){
      this.insertarService.ActualizarMascotaService(
        id,
        name,
        url,
        category,
        tag,
        status
      );
      alert('Mascota actualizada correctamente!');
      this.menuComponente.setStSelect(true);
      this.insertarService.setArrayMascotasMod(this.arrayVacio)
    }else{
      this.insertarService.GuardarMascotaService(
        name,
        url,
        category,
        tag,
        status
      );
      alert('Mascota creada correctamente!');
      this.menuComponente.setStSelect(true);
    }
    
  }

  eliminarMascota(id:string) {
    this.insertarService.eliminarMascotaService(id);
    alert('Mascota eliminada correctamente!');
    this.menuComponente.setStSelect(true);
  }

  limpiarArrayMod(){
    this.arrayMascotasMod = [];
  }

  modificarMascota(pet: any) {
    this.arrayMascotasMod[0] = pet;
    this.insertarService.setArrayMascotasMod(this.arrayMascotasMod);
    this.menuComponent.setStInsert(true,false);
  }
  // modificarMascota(
  //   name: string,
  //   photoUrl: string,
  //   idCategory: string,
  //   idTag: string,
  //   idStatus: string
  // ) {
  // }
}
