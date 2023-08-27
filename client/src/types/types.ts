export interface HeaderProps {
    id: string;
}

export interface NavigationBarProps {
    Nav1: string;
    Nav2: string;
    Nav3: string;
    Nav4: string;
    Nav5: string;
    language: any;
}

export interface NavigationBarState {
    language: string;
}

export interface LoginProps {
    userLogin: any;
}

export interface AppState {
    login?: Boolean;
    language?: String | null;
}

export interface ContactState {
    check?: Boolean;
    nameInput?: string;
    emailInput?: string;
    messageInput?: string;
}

export interface ContactProps { }

export interface PhotogalleryProps { }

export interface MemberDialogProps {
    show: boolean;
    onClose: any;
    member: string;
}

export interface MemberInfos {
    id: string;
    firstName: string;
    lastName: string;
    infoText: string;
}

export interface GetTransForClassComponentProps {
    id: string;
}

export interface RefObject {
    showToast: () => void;
}

export interface ErrorDialogProps {
    dialogText: string;
}
