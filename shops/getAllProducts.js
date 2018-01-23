'use strict';

const dynamodb = require('./dynamodb');
const request = require('request');

module.exports.get = (event, context, callback) => {

    var options = {
        method: 'GET',
        url: 'https://6hbxny1mx1.execute-api.us-east-1.amazonaws.com/dev/products',
        headers:
            {
                'content-type': 'application/json' },
        strictSSL:false,
        json: true };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        let result = body.filter((item) => { return item["shop_id"] == event.pathParameters.id} );
        console.log(result);
        const jsonResponse = {
            statusCode: 200,
            body: JSON.stringify(result)
        }
        callback(null, jsonResponse);
    });

};
