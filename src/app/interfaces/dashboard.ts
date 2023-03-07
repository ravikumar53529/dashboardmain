export interface Dashboard {
   token:'string',
   user:DashboardChild,
   expiresIn:string
}

export interface DashboardChild{
    username:'string'
}