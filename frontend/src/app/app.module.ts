import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';
import { FooterComponent } from './components/template/footer/footer.component';

import { HomeComponent } from './views/home/home.component';

import { BlueIceDirective } from './directives/blue-ice.directive';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HttpClientModule } from '@angular/common/http';
import { ProductsCreateComponent } from './components/products/products-create/products-create.component';
import { ProductsComponent } from './views/products/products.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductsReadComponent } from './components/products/products-read/products-read.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

/** Para colocar moeda do jeito correto----------- */
import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)
/**----------------------------------------------- */

import { registerLocaleData  } from '@angular/common';
import { ProductsUpdateComponent } from './components/products/products-update/products-update.component';
import { ProductsDeleteComponent } from './components/products/products-delete/products-delete.component';
import { VendasComponent } from './views/vendas/vendas.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent, 
    NavComponent,
    HomeComponent,
    BlueIceDirective,
    ProductsComponent,
    ProductsCreateComponent,
    ProductsReadComponent,
    ProductsUpdateComponent,
    ProductsDeleteComponent,
    VendasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
