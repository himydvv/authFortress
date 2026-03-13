const allowedOrigins = require('./allowedOrigins')

const allowedOriginsSet = new Set(allowedOrigins)

const corsOptions = {
    origin: (origin, callback) => {

        // Allow requests with no origin (Postman, curl, mobile apps)
        if (!origin) {
            return callback(null, true)
        }

        if (allowedOriginsSet.has(origin)) {
            return callback(null, true)
        }

        console.warn(`CORS blocked request from origin: ${origin}`)
        return callback(new Error("Not allowed by CORS"))
    },

    credentials: true, // allow cookies / auth headers

    optionsSuccessStatus: 200
}

module.exports = corsOptions