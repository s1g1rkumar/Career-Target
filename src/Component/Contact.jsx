import React from 'react';
import '../CSS/Contact.css'

function Contact() {
  return (
    <>
    <div className="container-fluid bg">
      <div class="container pt-5">
    <div class="text-center mb-3">
        <h2>Contact us</h2>
    </div>
    <div class="row g-2">
        <div class="col-md-4">
            <div class="card">
               {/* <img src="https://i.imgur.com/xuGJbnU.png" width="40" alt='none'/> */}
               <i class="fas fa-map-marker-alt icon"></i>
                <h5 style={{color:'white'}}>Address</h5>
                <p style={{color:'white'}}>JRU, Kamre, Ranchi</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
               {/* <img src="https://i.imgur.com/TNKflal.png" width="40" alt='none'/> */}
               <i class="fas fa-envelope icon"></i>
                <h5 style={{color:'white'}}>Email</h5>
                <p style={{color:'white'}}>contact@careertarget.com</p>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card"> 
            {/* <img src="https://i.imgur.com/pZLFSO3.png" width="40" alt='none'/> */}
            <i class="fas fa-phone-alt icon"></i>
                <h5 style={{color:'white'}}>Phone</h5>
                <p style={{color:'white'}}>9876543210</p>
            </div>
        </div>
    </div>
</div>
<div className="contact pb-5">
<div class="wrapper rounded d-flex align-items-stretch">
    <div class="bg-yellow">
        <div class="text-white"> <span class="far fa-envelope env"></span> </div>
        <div class="pt-5 cursive"> Please describe your idea here</div>
        <div class="pt-sm-5 pt-5 cursive mt-sm-5"> We need your email to reach you back </div>
    </div>
    <div class="contact-form">
        <div class="h3">Hire Us</div>
        <form>
            <div class="form-group pt-3"> <label for="message">Message</label> <textarea name="message" class="form-control" required></textarea> </div>
            <div class="d-flex align-items-center flex-wrap justify-content-between pt-4">
                <div class="form-group pt-lg-2 pt-3"> <label for="name">Your Name</label> <input type="text" name="name" class="form-control" required/> </div>
                <div class="form-group pt-lg-2 pt-3"> <label for="name">Your Email</label> <input type="email" name="email" class="form-control" required/> </div>
            </div>
            <div class="d-flex align-items-center flex-wrap justify-content-between pt-lg-5 mt-lg-4 mt-5">
                <div class="btn btn-default"> Cancel </div>
                <div class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal"> Submit </div>
            </div>
        </form>
    </div>
</div> 
<div class="modal fade" id="myModal" tabindex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">Thank You <span class="fas fa-heart"></span> </h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="ps-2">Thank You for sharing your views with us. We will get back to you as soon as possible.</div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
    </>
  )
}

export default Contact
