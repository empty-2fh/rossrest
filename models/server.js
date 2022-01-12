require( 'dotenv' ).config();

const cors = require( 'cors' );
const express = require( 'express' );

class Server

{

    constructor()
    
    {

        this.app = express();
        this.port = process.env.PORT;
        this.usersRoute = '/api/users';

        // Middlewares

        this.middlewares();

        // Routes

        this.routes();

    }

    middlewares()
    
    {

        // CORS

        this.app.use( cors() );

        // Read and parse body

        this.app.use( express.json() );

        // Public directory

        this.app.use( express.static( 'public' ) );

    }

    routes()
    
    {

        this.app.use( this.usersRoute, require( '../routes/users' ) );

    }

    listen()
    
    {

        this.app.listen( this.port, () => console.log( 'Server running on http://localhost:' + this.port ) );

    }

}

module.exports = Server;