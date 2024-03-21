import { NavLink } from 'react-router-dom';


function NotFoundPage() {

return (
    <>
<section class="h-screen">
<div class="bg-blue-100  text-green-700 p-4 flex flex-col items-center justify-center" role="alert" >
  <p class="font-bold"> 404 Not Found</p>
  <p class="font-bold">Check your URL path!</p>
</div>

<div class="p-4 flex flex-col items-center justify-center" role="alert">
    <img src="./error.png" alt="" />
  <NavLink to="/">Home page</NavLink>
</div>

</section>
    </>
);
}

export default NotFoundPage

