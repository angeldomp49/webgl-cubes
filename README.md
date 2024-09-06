# Creative Cube 3D Hero Section #

## Usage ##

    npm i @makechtec/cube_3d_hero_section

html:

First include the css and js files:

    <link rel="stylesheet" href="node_modules/@makechtec/cube_3d_hero_section/dist/index.css"/>
    <script src="node_modules/@makechtec/cube_3d_hero_section/dist/index.js"></script>

then:

    <cube-hero-section
            id="root"
            data-background-image="assets/images/rectangle6.png"
    >
        <div class="hero-underlay hero-layer">
            <h1 id="hero-title1" class="hero-title">Los mejores productos digitales a un 70% de descuento.</h1>
            <p id="hero-text1" class="hero-text">
                En todos los productos seleccionados, pregunta por nuestrs promociones y contáctanos
                para pedidos especiales, ¡no dejes pasar esta oportunidad!
            </p>
        </div>
        <div class="hero-overlay hero-layer">
            <div class="empty-space" style="height: 20rem;"></div>
            <div class="hero-button-wrapper">
                <button id="cta" class="hero-button">Ver promociones</button>
            </div>
        </div>
    </cube-hero-section>

css:

    * {
        padding: 0;
        margin: 0;
        }
        
        .cube-hero-section{
        
        
        .hero-underlay{
        
            .hero-title{
              font-size: 4rem;
              font-family: 'Poppins', serif;
              color: #fff7f0;
              border-radius: 50px;
              text-shadow:  2px 2px 6px rgba(190, 190, 190, 0.42),
              -2px -2px 6px rgba(55, 24, 2, 0.61);
            }
        
            .hero-text{
              font-size: 1rem;
              font-family: 'Poppins', serif;
              color: #fff7f0;
              text-shadow:  2px 2px 6px rgba(190, 190, 190, 0.42),
              -2px -2px 6px rgba(55, 24, 2, 0.61);
            }
        }
        
        .hero-button-wrapper{
        display: flex;
        justify-content: center;
        z-index: 4;
        
            .hero-button {
              background-image: linear-gradient(to right, #FF512F 0%, #DD2476  51%, #FF512F  100%);
              margin: 10px;
              padding: 15px 45px;
              text-align: center;
              text-transform: uppercase;
              transition: 0.5s;
              background-size: 200% auto;
              color: white;
              box-shadow: 0 0 5px rgba(90, 19, 6, 0.49);
              border-radius: 20px;
              display: block;
            }
        
            .hero-button:hover {
              background-position: right center; /* change the direction of the change here */
              color: #fff;
              text-decoration: none;
            }
        
        }
        
        
        }
        
        .empty-space{
        display: block;
        background: transparent;
        width: 100%;
        }

then:

<img src="docs/assets/images/example1.png" alt="An image of 3D cubes front of some text and a button">

