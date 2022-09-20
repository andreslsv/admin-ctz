import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { MatDrawer } from '@angular/material/sidenav';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { ApiService } from 'app/core/api/api.service';
import { Subject, takeUntil } from 'rxjs';
import { CambiarEstadoComponent } from '../despachos/cambiar-estado/cambiar-estado.component';
import { ConcretoComponent } from '../tipo-concreto/concreto/concreto.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @ViewChild('drawer') drawer: MatDrawer;
  drawerMode: 'over' | 'side' = 'side';
  drawerOpened: boolean = true;
  panels: any[] = [];
  dataUsers: any[] = [];
  dataRoles: any[] = [];
  selectedPanel: string = 'usuarios';
  private _unsubscribeAll: Subject<any> = new Subject<any>();




  

      /**
     * Get the details of the panel
     *
     * @param id
     */
       getPanelInfo(id: string): any
       {
           return this.panels.find(panel => panel.id === id);
       }


           /**
     * Navigate to the panel
     *
     * @param panel
     */
    goToPanel(panel: string): void
    {
        this.selectedPanel = panel;

        // Close the drawer on 'over' mode
        //if ( this.drawerMode === 'over' )
        //{
            //this.drawer.close();
        //}
    }




  constructor(private _formBuilder: FormBuilder,public _dialog: MatDialog, private _apiService: ApiService, private _fuseMediaWatcherService: FuseMediaWatcherService,private _changeDetectorRef: ChangeDetectorRef,) { }

  ngOnInit(): void {
    



    this.panels = [
      {
          id         : 'usuarios',
          icon       : 'heroicons_outline:user-circle',
          title      : 'Usuarios',
          description: 'Gestiona y visualiza la lista de usuarios registrados',
          link: "detalle"
      },
      {
          id         : 'roles',
          icon       : 'heroicons_outline:identification',
          title      : 'Roles',
          description: 'Asigna roles a los usuarios según sus asignaciones',
          link: "roles"
      }
      /*
      {
          id         : 'permisos',
          icon       : 'heroicons_outline:lock-closed',
          title      : 'Permisos',
          description: 'Añade o elimina permisos a los usuarios según sus roles',
          link: "abc"
      }
      */
  ];


  // Subscribe to media changes
  this._fuseMediaWatcherService.onMediaChange$
  .pipe(takeUntil(this._unsubscribeAll))
  .subscribe(({matchingAliases}) => {

      // Set the drawerMode and drawerOpened
      if ( matchingAliases.includes('lg') )
      {
          this.drawerMode = 'side';
          this.drawerOpened = true;
      }
      else
      {
          this.drawerMode = 'over';
          this.drawerOpened = false;
      }

      // Mark for check
      this._changeDetectorRef.markForCheck();
  });




    



    
  }










}
