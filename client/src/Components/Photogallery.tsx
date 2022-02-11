import React from "react";
import Header from "./Header";
import Gallery from "react-photo-gallery";
import { photos } from "../photos";
import { PhotogalleryProps as Props } from "../model/types";

class Photogallery extends React.Component {
    constructor(props: Props) {
        super(props);
        this.state = {};
        this.onPhotoClick = this.onPhotoClick.bind(this);
    }
    //@ts-ignore
    async onPhotoClick(event) {
        window.open(event.target.src, "_self");
    }

    render() {
        return (
            <div>
                <Header id="photogallery" header="Fotogalerie" />
                <Gallery photos={photos} onClick={this.onPhotoClick} />
            </div>
        );
    }
}

export default Photogallery;
