import { Injectable } from '@angular/core';
import swal, { SweetAlertOptions } from 'sweetalert2';
import { sweetAlertOptions } from "@shared/default-values/notification-sweetalert-options";

@Injectable({providedIn: 'root'})
export class NotificationService {

  sweetAlertOptions: SweetAlertOptions = {}

  error(title: string, message: string) {
    let html = `
    <div style="text-align: left;">
      <p style="font-weight: 400;color: #cc563d; margin-bottom: 1px;">${title}</p>
      <p style="width: 100%;">${message}</p>
    </div>`;

    swal.fire({
      ...sweetAlertOptions,
      html: html,
      icon: 'error',
    });
  }

  info(title: string, message: string) {
    let html = `
    <div style="text-align: left;">
      <p style="font-weight: 400;color: #299cdb; margin-bottom: 1px;">${title}</p>
      <p style="width: 100%;">${message}</p>
    </div>`;

    swal.fire({
      ...sweetAlertOptions,
      html: html,
      icon: 'info',
    });
  }

  success(title: string, message: string) {
    let html = `
    <div style="text-align: left;">
      <p style="font-weight: 400;color: #28c76f; margin-bottom: 1px;">${title}</p>
      <p style="width: 100%;">${message}</p>
    </div>`;

    swal.fire({
      ...sweetAlertOptions,
      html: html,
      icon: 'success',
    });

  }

}
