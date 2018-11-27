const header = require('./includes/header')
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
    <style>
        header{
         position: -webkit-sticky;
         position: static;
         top: 0;
         background: #00474f;
         color: #e7dacb;
         display: flex;
         justify-content: space-between;
         align-items: center;
         height: 50px;
         z-index: 100;
        }
        @media  (min-width:768px){
            .sidebar{
             position: -webkit-sticky;
             position: static;
             top: 4rem;
             z-index: 100;
             height: calc(100vh - 4rem);
             border-right: 1px solid rgba(0,0,0,0.1);
             order: 0;
             border-bottom: 1px solid rgba(0,0,0,0.1);
            }
            .cat-links{
             display: block!important;
             max-height: calc(100vh - 9rem);
             overflow-y: auto;
             padding-top: 1rem;
             margin-bottom: 1rem;
             margin-right:-15px;
             margin-left: -15px;
            }
            .sidebar-link{
             display: block;
             padding: 0.25rem 1.5rem;
             font-weight: 500;
             color: rgba(0,0,0,0.65);
            }
        }
        .sidebar .nav>li>a{
         display: block;
         padding: 0.25rem 1.5rem;
         font-size: 90%;
         color: rgba(0,0,0,0.65);
        }
        .sidebar-item.active>.sidebar-inner{
         display: block;
        }
        .card {
         margin-bottom: 1.5rem;
        }
        .switcher {
         position: relative;
         padding: 1rem 15px;
         margin-right: -15px;
         margin-left: -15px;
         border-bottom: 1px solid rgba(0,0,0,.05);
        }
        .sidebar-toggle {
         line-height: 1;
         color: #212529;
        }
        .p-0 {
         padding: 0!important;
        }
        .ml-3, .mx-3 {
         margin-left: 1rem!important;
        }
        .btn-link {
         font-weight: 400;
         color: #007bff;
         background-color: transparent;
        }
        
    </style>
    <body>
        ${header}
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-md-3 col-xl-2 sidebar">
                    <div class="collapse cat-links">
                        <div class="sidebar-item active">
                            <a href="/" class="sidebar-link">Links</a>
                            <ul class="nav sidebar-inner-active">
                                <li class="active sidebar-inner-active">
                                    <a href="/">Link1</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                            <div class="col-12 col-md-9 col-xl-9 py-md-5 content">
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543828357&di=63e8a6ebce84560c1ca5b4fe1e9bcf30&imgtype=jpg&er=1&src=http%3A%2F%2Ftp.yiaedu.com%2Fshowimg.php%3Furl%3Dhttp%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F867-1F330164643.jpg" data-video="http://video.iblack7.com/tgGnZRn3W4Ajw6PGcA_9Z.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="card">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543828357&di=63e8a6ebce84560c1ca5b4fe1e9bcf30&imgtype=jpg&er=1&src=http%3A%2F%2Ftp.yiaedu.com%2Fshowimg.php%3Furl%3Dhttp%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F867-1F330164643.jpg" data-video="http://video.iblack7.com/tgGnZRn3W4Ajw6PGcA_9Z.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="card">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543828357&di=63e8a6ebce84560c1ca5b4fe1e9bcf30&imgtype=jpg&er=1&src=http%3A%2F%2Ftp.yiaedu.com%2Fshowimg.php%3Furl%3Dhttp%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F867-1F330164643.jpg" data-video="http://video.iblack7.com/tgGnZRn3W4Ajw6PGcA_9Z.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="card">
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543828357&di=63e8a6ebce84560c1ca5b4fe1e9bcf30&imgtype=jpg&er=1&src=http%3A%2F%2Ftp.yiaedu.com%2Fshowimg.php%3Furl%3Dhttp%3A%2F%2Fuploads.xuexila.com%2Fallimg%2F1703%2F867-1F330164643.jpg" data-video="http://video.iblack7.com/tgGnZRn3W4Ajw6PGcA_9Z.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </body>
</html>
`