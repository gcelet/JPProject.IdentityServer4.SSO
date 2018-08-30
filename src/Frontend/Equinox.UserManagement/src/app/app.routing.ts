import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./core";

import { PagesModule } from "./pages/pages.module";
import { AuthGuard } from "./core/auth/auth.guard";


export const routes: Routes = [
    
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "", 
        component: DefaultLayoutComponent,
        children: [
            { path: "", loadChildren: "app/management/management.module#ManagementModule" },
        ]
        
    },
    // {
    //     path: "management", 
    //     component: DefaultLayoutComponent,
    //     loadChildren: "app/views/views.module#ViewsModule" 
    // }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesModule,

    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})
export class AppRoutingModule { }
