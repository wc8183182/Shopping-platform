import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  router = inject(Router);

  goToProduct(){
    this.router.navigate(['/products']);
  }

  goToDiscount65(){
    this.router.navigate(['products/discount/65']);
  }

}
