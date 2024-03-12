import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { ProductComponent } from './product/product.component';
import { SigninComponent } from './customer/signin/signin.component';
import { SellerDashboardComponent } from './customer/seller/seller-dashboard/seller-dashboard.component';
import { BuyerDashboardComponent } from './customer/buyer/buyer-dashboard/buyer-dashboard.component';
import { CheckoutComponent } from './customer/buyer/checkout/checkout.component';
import { PageNotFoundComponent } from './shared/layouts/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:"",redirectTo:"/",pathMatch:"full"},
    {path:"",component:HomeComponent},
    {path:"my-profile",component:UserComponent},
    {path:"contact-us",component:ContactComponent},
    //admin
    {path:"",children:[
        {path:"admin-login",component:LoginComponent}
    ]},
    {path:"",children:[
        {path:"admin-dashboard",component:DashboardComponent},
        {path:"admin/user",component:UserCrudComponent},
        {path:"admin/product",component:ProductComponent}
    ]},
    {path:"",children:[
        {path:"sign-in",component:SigninComponent},
        {path:"sign-up",component:SigninComponent}
    ]},
    {path:"",children:[
        {path:"seller-dashboard",component:SellerDashboardComponent},
        {path:"seller/product",component:ProductComponent}
    ]},
    {path:"",children:[
        {path:"buyer-dashboard",component:BuyerDashboardComponent},
        {path:"checkout",component:CheckoutComponent}
    ]},
    {path:"**",component:PageNotFoundComponent}
];
