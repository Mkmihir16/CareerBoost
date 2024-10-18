'use client'
import { Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
// import { getAuth } from "@clerk/nextjs/dist/types/server/createGetAuth.js";
import { useUser } from "@clerk/nextjs";
export default function App() {
  const user=useUser();
  // if(user.user){
  //   console.log(user.user);
  // }
  
  const menuItems = [
    "Jobs",
    "Company Review",
    "Log Out",
  ];

  return (  
    <Navbar disableAnimation isBordered>
      {/* Mobile Menu Toggle */}
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      {/* Mobile Brand */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">CareerBoost</p>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop Menu */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <AcmeLogo />
          <p className="font-bold text-inherit">CareerBoost</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Jobs
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link color="foreground" href="#">
            Company Reviews
          </Link>
        </NavbarItem>
      </NavbarContent>

      {/* Authentication Section */}
      <NavbarContent justify="end">
        {/* Show when user is signed out */}
        <SignedOut>
          <NavbarItem className="hidden lg:flex">

             <SignInButton mode="modal">
             <Button as={Link} variant="flat" color="default">Sign In</Button>
           </SignInButton>
            
          </NavbarItem>
          <NavbarItem>
            <SignUpButton mode="modal">
              <Button as={Link} color="warning" variant="flat">
                Sign Up
              </Button>
            </SignUpButton>
          </NavbarItem>
        </SignedOut>

        {/* Show when user is signed in */}
        <SignedIn>
          <NavbarItem>
           { user.user && <div className="flex">

            <UserButton />
            <p className="text-lg font-bold ml-1">Hii,{user.user.firstName+" "+user.user.lastName}</p>
            </div>}
          </NavbarItem>
        </SignedIn>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
