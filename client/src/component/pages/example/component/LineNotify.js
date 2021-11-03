import React, { useEffect } from 'react'
import axios from 'axios'


//token jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh

const LineNotify = () => {

    useEffect(() => {
        // notify();
    }, [])
    const notify = async () => {
        const result = await axios({
            method: "post",
            url: "https://notify-api.line.me/api/notify",
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/x-www-form-urlencoded",
            },
            auth: {
                Bearer: 'jiwPgGLuE5Q60fPTt9SkTTfLz5Xycb6CfCgoVWwlqPh'
            },
            data: 'hello'
        })
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    // function HeaderActivity() {
    //     re({
    //       method: 'POST',
    //       uri: 'https://notify-api.line.me/api/notify',
    //       header: {
    //         'Content-Type': 'application/x-www-form-urlencoded',
    //       },
    //       auth: {
    //         bearer: 'MgPk4Eyo4rHz6rAHfw3WZK3J12aSHPljEsdE1ig15z4',
    //       },
    //       form: {
    //         message: "สรุปกิจกรรมวันนี้ " + count + " กิจกรรม"
    //       },
    //       function(err, httpResponse, body) {
    //         if (err) throw err;
    //         res.send(body);
    //       }
    //     });
    //   }
    return (
        <div>
            <h1>line</h1>
        </div>
    )
}

export default LineNotify
