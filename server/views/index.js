const header = require('./includes/header')
const script = require('./includes/script')
const style = require('./includes/style')
module.exports = `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <title>Koa Server HTML</title>   
        ${style}       
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
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" data-video="http://vt1.doubanio.com/201811261803/5a7275d05ba8d5c80a632d9d65a3f987/view/movie/M/302180664.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="card">
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" data-video="http://vt1.doubanio.com/201811261807/062f0787ca9410b1e26cde80434ba02e/view/movie/M/402380253.mp4" alt="" class="card-img-top">
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
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" data-video="http://vt1.doubanio.com/201811261758/0e6e8562be579b704b8415f7862522bb/view/movie/M/402330315.mp4" alt="" class="card-img-top">
                            <div class="card-body">
                                <h4 class="card-title">这是电影标题</h4>
                                <p class="card-desc">这是电影描述</p>
                            </div>
                            <div class="card-footer">1 天前更新</div>
                        </div>
                    </div>
                    <div class="col-md-6">
                         <div class="card">
                            <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519070834.webp" data-video="http://vt1.doubanio.com/201811261758/0e6e8562be579b704b8415f7862522bb/view/movie/M/402330315.mp4" alt="" class="card-img-top">
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
        <div id="myModal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div id="videoModal" class="modal-content">
                
                </div>
            </div> 
        </div>
        ${script}
        <script>
            var player=null;
            $(document).ready(function() {
              $('#myModal').on('hidden.bs.modal',function(e) {
                if (player && player.pause) {
                    player.pause()
                } 
              })
              $('.card-img-top').click(function(e) {
                var video = $(this).data('video')
                var image = $(this).attr('src')
                $('#myModal').modal('show')
                if (!player){
                    player = new DPlayer({
                        container:document.getElementById('videoModal'),
                        screenshot:true,
                        video:{
                        url:video,
                        pic:image,
                        thumbnails:image
                        }
                    })
                } else {
                    player.switchVideo({
                        url:video,
                        pic:image,
                        thumbnails:image
                    })
                }
              })
            })
        </script>
    </body>
</html>
`