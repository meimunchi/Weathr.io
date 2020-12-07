import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './blog-main.css'

function BlogMain() {

    //BlogMain template built for Bootstrap by twitter user @mdo.
    //BlogMain template adapted from Bootstrap.
  return (
    <div>
        <body>
        <div className="container">

            <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Tornado 101</h1>
                    <p className="lead my-3">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Tornado strikes.</p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a>
                    </p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Hurricane 101</h3>
                            <p className="card-text mb-auto">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Hurricane strikes.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"/>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <h3 className="mb-0">Blizzard 101</h3>
                            <p className="mb-auto">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Blizzard strikes.</p>
                            <a href="#" className="stretched-link">Continue reading</a>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <svg className="bd-placeholder-img" width="200" height="250"
                                 xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice"
                                 focusable="false" role="img" aria-label="Placeholder: Thumbnail">
                                <title>Placeholder</title>
                                <rect width="100%" height="100%" fill="#55595c"/>
                                <text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">
                        From the Firehose
                    </h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">Sample blog post</h2>
                        <p className="blog-post-meta">January 1, 2014 by <a href="#">Mark</a></p>

                        <p>This blog post shows a few different types of content that’s supported and styled with
                            Bootstrap. Basic typography, images, and code are all supported.</p>
                        <hr></hr>
                            <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur
                                ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                                vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit
                                amet fermentum.</p>
                            <blockquote>
                                <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna
                                    mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                                    elit.</p>
                            </blockquote>
                            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus
                                sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                            <h2>Heading</h2>
                            <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est
                                non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi
                                leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <pre><code>Example code block</code></pre>
                            <p>Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                                euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa.</p>
                            <h3>Sub-heading</h3>
                            <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis
                                euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut
                                fermentum massa justo sit amet risus.</p>
                            <ul>
                                <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                                <li>Donec id elit non mi porta gravida at eget metus.</li>
                                <li>Nulla vitae elit libero, a pharetra augue.</li>
                            </ul>
                            <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                                augue.</p>
                            <ol>
                                <li>Vestibulum id ligula porta felis euismod semper.</li>
                                <li>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                                    mus.
                                </li>
                                <li>Maecenas sed diam eget risus varius blandit sit amet non magna.</li>
                            </ol>
                            <p>Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at
                                lobortis.</p>
                    </div>


                    <div className="blog-post">
                        <h2 className="blog-post-title">Another blog post</h2>
                        <p className="blog-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>

                        <p>Cum sociis natoque penatibus et magnis <a href="#">dis parturient montes</a>, nascetur
                            ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                            vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet
                            fermentum.</p>
                        <blockquote>
                            <p>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna
                                mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id
                                elit.</p>
                        </blockquote>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit
                            amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non
                            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus,
                            porta ac consectetur ac, vestibulum at eros.</p>
                    </div>


                    <div className="blog-post">
                        <h2 className="blog-post-title">New feature</h2>
                        <p className="blog-post-meta">December 14, 2013 by <a href="#">Chris</a></p>

                        <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean
                            lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod.
                            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
                            justo sit amet risus.</p>
                        <ul>
                            <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</li>
                            <li>Donec id elit non mi porta gravida at eget metus.</li>
                            <li>Nulla vitae elit libero, a pharetra augue.</li>
                        </ul>
                        <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit
                            amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
                        <p>Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra
                            augue.</p>
                    </div>

                </div>



                <aside className="col-md-4 blog-sidebar">
                    <div className="p-4 mb-3 bg-light rounded">
                        <h4 className="font-italic">About</h4>
                        <p className="mb-0">This page serves to provide our valued
                            users with valuable information about how to prepare for,
                            act during, and recover after a natural disaster.</p>
                    </div>
                </aside>



            </div>


        </main>
        </body>
    </div>
  )
}

export default BlogMain
