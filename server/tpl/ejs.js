module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Koa Server HTML</title>
        <link href="https://cdn.bootcss.com/twitter-bootstrap/4.1.0/css/bootstrap.min.css" rel="stylesheet">     
        <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>   
        <script src="https://cdn.bootcss.com/twitter-bootstrap/4.1.0/js/bootstrap.bundle.js"></script>        
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h1>Hi <%= you %></h1>
                    <p>This is <%= me %></p>
                </div>
                <div class="col-md-4">
                    <p>测试静态HTML页面</p>
                </div>
            </div> 

        </div>
    </body>
</html>
`