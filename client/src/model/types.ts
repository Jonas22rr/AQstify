export interface global {}

export interface HeaderProps {
    header: string;
}

export interface NavigationBarProps {
    Nav1: string;
    Nav2: string;
    Nav3: string;
    Nav4: string;
    Nav5: string;
}

export interface LoginProps {
    userLogin: any;
}

export interface AppState {
    login: Boolean;
}

export interface ContactState {
    check: Boolean;
    nameInput: string;
    emailInput: string;
    messageInput: string;
}

export interface ContactProps {}

export interface PhotogalleryProps {}

export interface MemberDialogProps {
    onHide: any;
    member: string;
}

export interface Memberinfos {
    id: string;
    name: string;
    infoText: string;
}
