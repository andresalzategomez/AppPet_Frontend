import { Injectable } from '@angular/core';
import { ConsumeApi } from '../consumeApi.service';
import { InsertarComponent } from './insertar.component';

@Injectable()
export class InsertarService {
  arrayPet: any[]=[];
  arrayCategory: any[]=[];
  arrayTag: any[]=[];
  arrayStatus: any[]=[];
  ArrayMascotaStatus:any=[];
  ArrayMascotaId:any=[];
  ArrayMascotasMod:any[]=[];
  constructor(private consumeApi: ConsumeApi){}

  selectCategoryService():any {
    this.consumeApi.selecCategory().subscribe((category) => {
      this.arrayCategory = category.result;
    });
   
    return this.arrayCategory;
  }
  selectTagService():any {
    this.consumeApi.selecTag().subscribe((tag) => {
      this.arrayTag = tag.result;
    });
   
    return this.arrayTag;
  }
  selectStatusService():any {
    this.consumeApi.selecStatus().subscribe((status) => {
      this.arrayStatus = status.result;
    });
   
    return this.arrayStatus;
  }

  selectMascotaByStatusService(id:string):any {
    this.consumeApi.selecMascotaByStatus(id).subscribe((status) => {
      this.ArrayMascotaStatus = status.result;
      console.log(this.ArrayMascotaStatus);
    });
   
    return this.ArrayMascotaStatus;
  }

  selectMascotaByIdService(id:string):any {
    this.consumeApi.selecMascotaById(id).subscribe((id) => {
      this.ArrayMascotaId = id.result;
      console.log(this.ArrayMascotaId);
    });
   
    return this.ArrayMascotaId;
  }

  

  selectMascotasService(arrayMascotas:any[]){
    this.consumeApi.selectMascotas().subscribe((pet) => {
      for (let i = 0; i < pet.result.length; i++) {
        arrayMascotas.push(pet.result[i]) 
      }
    });
    return arrayMascotas;
  }

  GuardarMascotaService(name:string, url:string, category:string, tag:string, status:string){
    let respuesta:Boolean=false;
    this.consumeApi.GuardarMascota(name, url, category, tag, status)
    .subscribe((data) => {
      console.log(data.message);
  })
  }

  ActualizarMascotaService(id:string, name:string, url:string, category:string, tag:string, status:string){
    let respuesta:Boolean=false;
    this.consumeApi.ActualizarMascota(id, name, url, category, tag, status)
    .subscribe((data) => {
      console.log(data.message);
  })
  }

  setArrayMascotasMod(arrayAux:any[]){
    this.ArrayMascotasMod = arrayAux;
  }

  getArrayMascotasMod(){
    return this.ArrayMascotasMod;
  }

  eliminarMascotaService(id:string){
    this.consumeApi.EliminarMascota(id)
    .subscribe((data) => {
      console.log(data.message);      
  })
  }
}
