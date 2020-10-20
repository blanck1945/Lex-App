module.exports = {
    env: {
        MONGO_URL: "mongodb+srv://blanck1945:Bianchi1933@node-rest-shop.ojsgx.mongodb.net/law?retryWrites=true&w=majority"
    },
    async headers() {
        return [
            {
                // mathching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
                    { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
                ]
            }
        ]
    }
}