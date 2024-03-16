import React from "react";
import './About.css';
import AboutChef1 from '../utils/img/about-chef1.jpg'
import AboutChef2 from '../utils/img/about-chef2.webp'
import { ImageGallery } from '../components/ImageGallery';
import { Reviews } from '../components/Reviews';



function About() {
    return (
        <div className="about-page">
            <header className="mt-5">
                <div className="container h-100 d-flex align-items-center justify-content-center">
                    <h1 className="text-light">About</h1>
                </div>
            </header>
            <div className="container my-5">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, ullam iusto cumque sunt repellat, dolorum odio hic deserunt architecto eius perferendis repellendus ipsum voluptas? Omnis tenetur nisi quos, aspernatur error quaerat vel odio, mollitia, perferendis nulla minus voluptate beatae ducimus. Nihil voluptates, quod ea fuga quam necessitatibus minima cumque sed.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit animi deleniti quia odio distinctio, at obcaecati, ratione quidem, quae voluptates iste doloremque. Quibusdam eum tenetur est rem hic, quaerat saepe quam pariatur ipsum minima, dolores magnam aliquam! Voluptatibus, neque facere corporis debitis quasi, dolore placeat dignissimos quae repellat labore porro necessitatibus tenetur asperiores voluptatum excepturi modi eos rem! Omnis rerum libero doloribus consequatur optio! Quod repellat, vel velit, unde eius at molestiae aperiam aspernatur in labore, excepturi similique dolore corporis?</p>
                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutChef1} className="img-fluid my-4" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <img src={AboutChef2} className="img-fluid my-4" alt="" />
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo facilis, exercitationem iste recusandae odit cumque consequuntur soluta tempora asperiores, magni dolorem rem ipsam dolor eveniet ipsa unde dignissimos repellendus ex quis omnis ullam odio? Nesciunt, nobis fuga ratione laboriosam labore fugiat suscipit, quos illum temporibus aperiam optio ut iste tempora blanditiis facilis corporis dignissimos ex. Ratione ullam ipsam deserunt voluptates doloremque autem, asperiores repudiandae nemo, animi minus quam. Laboriosam quis laborum illum repellat placeat vitae nobis perspiciatis voluptatem molestiae commodi. At maxime pariatur repellendus blanditiis reiciendis id possimus quisquam dolores.</p>
            </div>


            <div className="bg-dark text-light">
                <ImageGallery />
            </div>

            <div className="my-5">
                <Reviews />
            </div>
        </div>
    )
}

export default About;