const express = require('express');
const router = express.Router();
const requestIp = require('request-ip');
router.get('/create-org', (req, res) => {
    res.send('Create org ENDPOINT')
});

/* localhost:8000/api/update */
router.get('/update-org', (req, res) => {
    res.send('Update org ENDPOINT')
});

router.get('/tam', (req, res) => {
    const ipInfo = req.ipInfo;
    function getClientIp(req) {
        var ipAddress;
        // The request may be forwarded from local web server.
        var forwardedIpsStr = req.header('x-forwarded-for');
        if (forwardedIpsStr) {
            // 'x-forwarded-for' header may return multiple IP addresses in
            // the format: "client IP, proxy 1 IP, proxy 2 IP" so take the
            // the first one
            var forwardedIps = forwardedIpsStr.split(',');
            ipAddress = forwardedIps[0];
        }
        if (!ipAddress) {
            // If request was not forwarded
            ipAddress = req.connection.remoteAddress;
        }
        return ipAddress;
    };

    const clientIp = requestIp.getClientIp(req); /* localhost:8000/api/create */
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    res.send(ipInfo)
})
module.exports = router;