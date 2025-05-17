interface Myprops {
  isLoggedIn: boolean;
}
function UserStatus({isLoggedIn}:Myprops)
{
    return( {isLoggedIn?<p>Welcome</p>:<p>Please Log in</p>});
}