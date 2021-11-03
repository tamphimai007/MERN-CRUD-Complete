const axios = require('axios')
const re = require('request')
const querystring = require('querystring');

exports.notify = async (req, res) => {
    try {
        // lineNoti()
        // let messages = [{ type: `text`, text: 'tam' }]
        // const config = {
        //     method: 'post',
        //     url: 'https://notify-api.line.me/api/notify',
        //     headers: {
        //         'Authorization': 'Bearer jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh',
        //     },
        //     data: querystring.stringify({
        //         message: 'something you would like to push',
        //     })
        // };
        // await axios(config)
        alertLine()
        function alertLine() {
            re({
                method: 'POST',
                uri: 'https://notify-api.line.me/api/notify',
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                auth: {
                    bearer: 'jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh',
                },
                form: {
                    message: "hello"
                },
                function(err, httpResponse, body) {
                    if (err) throw err;
                    res.send(body);
                }
            });
        }
        // function lineNoti() {
        //     axios({
        //         method: 'POST',
        //         url: 'https://notify-api.line.me/api/notify',
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //         },
        //         auth: {
        //             bearer: 'jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh',
        //         },
        //         form: {
        //             message: "hello"
        //         },
        //         function(err, httpResponse, body) {
        //             if (err) throw err;
        //             res.send(body);
        //         }
        //     });
        // }
    } catch (err) {
        console.log(err)
    }

}