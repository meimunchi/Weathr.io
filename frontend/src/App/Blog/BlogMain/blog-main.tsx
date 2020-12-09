import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './blog-main.css'
import { Link } from 'react-router-dom'
import seis from "../../../assets/seis.jpg"
import hurricane from "../../../assets/hurricane.jpg"

function BlogMain() {

    //BlogMain template built for Bootstrap by twitter user @mdo.
    //BlogMain template adapted from Bootstrap.
  return (
    <div>
        <body>
        <div className="container">

            <div className="jumbotron p-4 p-md-5 text-black rounded" id={"jumbotron"}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Tornado 101</h1>
                    <p className="lead my-3">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Tornado strikes.</p>
                    <p className="lead mb-0"><Link to="/blog/536308ed-22f7-4c82-a366-4617ede5f8ed" className="text-black font-weight-bold">Continue reading...</Link>
                    </p>
                </div>
            </div>

            <div className="row mb-2">
                <div className="col-md-6">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static" id={"featured"}>
                            <h3 className="mb-0">Hurricane 101</h3>
                            <p className="card-text mb-auto">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Hurricane strikes.</p>

                            <Link to="/blog/f592d182-8e43-4a7f-817a-8b3ba9952b78" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={hurricane} width="200" height="250" ></img>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static" id={"featured"}>
                            <h3 className="mb-0">Earthquake 101</h3>
                            <p className="mb-auto">This article will provide you with valuable information about
                        how to prepare for, act during, and recover after an Earthquake strikes.</p>
                            <Link to="/blog/a4913a0a-2c02-4a08-acbd-35ce8b027c62" className="stretched-link">Continue reading</Link>
                        </div>
                        <div className="col-auto d-none d-lg-block">
                            <img src={seis} width="200" height="250" ></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <main role="main" className="container">
            <div className="row">
                <div className="col-md-8 blog-main">
                    <h3 className="pb-4 mb-4 font-italic border-bottom">
                        Other Blogs
                    </h3>

                    <div className="blog-post">
                        <h2 className="blog-post-title">Blizzard 101</h2>
                        <p className="blog-post-meta">by John Dillon</p>

                        <p>This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Blizzard strikes.</p>

                        <Link to="/blog/35b19bf5-ea32-4f95-86bb-57384fd63048" className="stretched-link">Continue reading here</Link>
                    </div>


                    <div className="blog-post">
                        <h2 className="blog-post-title">Flood 101</h2>
                        <p className="blog-post-meta">by Colin Adams</p>

                        <p>This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Flood strikes.</p>

                        <Link to="/blog/ef3efa7e-9a6a-4283-8c28-ec59205145a3" className="stretched-link">Continue reading here</Link>

                    </div>


                    <div className="blog-post">
                        <h2 className="blog-post-title">Wildfire 101</h2>
                        <p className="blog-post-meta">by Colin Adams</p>

                        <p>This article will provide you with valuable information about
                        how to prepare for, act during, and recover after a Wildfire strikes.</p>

                        <Link to="/blog/9fb71b54-c879-49a6-810c-0620ce08eca9" className="stretched-link">Continue reading here</Link>
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
