import { Setting } from './../settings.model';
import { SettingsService } from './../settings.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-create',
  templateUrl: './settings-create.component.html',
  styleUrls: ['./settings-create.component.css']
})
export class SettingsCreateComponent implements OnInit {

  setting: Setting = {
    name: "",
    price: NaN
  }

  constructor(private settingsService: SettingsService, private router:Router) { }

  ngOnInit(): void {

  }

  createSetting(): void {
    this.settingsService.create(this.setting).subscribe(() => {
      this.settingsService.showMessage('Operação executada com sucesso!')
      this.router.navigate(['/settings'])
    })
  }

  cancel(): void {
    this.router.navigate(['/settings'])
  }

}
