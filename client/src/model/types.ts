export interface global{}

export interface HeaderProps {
    id : string
    header? : string
}

export interface NavigationBarProps {
    Nav1 : string
    Nav2 : string
    Nav3 : string
    Nav4 : string
    Nav5 : string
}

export interface LoginProps {
    userLogin: any
}

export interface AppState {
    login : Boolean
}

export interface ContactState{
    check: Boolean
    nameInput:string
    emailInput: string
    messageInput: string
}

export interface ContactProps{}

export interface PhotogalleryProps{}