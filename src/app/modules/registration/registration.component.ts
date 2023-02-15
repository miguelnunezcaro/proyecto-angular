import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {
  // Tallas para el atributo size del modelo Person
  sizes = ['XS','S','M','L','XL'];

  // Datos de ejemplo para la persona
  model = new Person(1, 'Miguel','Núñez Caro','miguel1248498@gmail.com',this.sizes[2],'CAIRS');

  //Control de formulario enviado por defecto a falso
  submitted = false;

  // Una vez que el formulario se envía entonces se establece a enviado.
  onSubmit() { this.submitted = true; }

  // Método para inicializar una nueva persona:

  newPerson () {
    this.model = new Person(2,'','','','');
  };

}
