const options = {
    swaggerDefinition: {
        info: {
            version: "1.0.0",
            title: "Bedu Shop"
        },
    },
    apis: ['./routes/*.js'],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "HTTP",
                schema: "Bearer",
                bearerFormat: "JWT"
            }
        }
    }
}

module.exports = options;