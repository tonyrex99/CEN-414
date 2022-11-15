$(document).ready(function(){

$("body").prepend(`<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: sticky; top: 0;  z-index:100;">
      <div class="container" >
        <a class="navbar-brand" href="#">Panthera</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="cart.html">Cart <span class="badge badge-success badge-pill" id="cartbadge"></span></a>
            </li>
			   <li class="nav-item">
              <a class="nav-link" href="contact.html">Contacts</a>
            </li>            
          
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
   `);

});