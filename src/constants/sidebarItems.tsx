import {
  ChartBarIcon,
  ViewColumnsIcon,
  ShoppingBagIcon,
  StarIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { USER_ROLE } from "./role";
export const SidebarItems = (role: string) => {
  const userDashboardNavigation = [
    {
      id: 1,
      name: "Dashboard",
      href: "/dashboard",
      icon: ViewColumnsIcon,
    },
    {
      id: 2,
      name: "My Bookings",
      href: "/booking",
      icon: ShoppingBagIcon,
    },
    {
      id: 3,
      name: "Profile",
      href: "/profile",
      icon: UserCircleIcon,
    },
    /* {
      id: 4,
      name: "Reviews",
      href: "/reviews",
      icon: StarIcon,
    },{
      id: 2,
      name: "My Cart",
      href: "/cart",
      icon: ShoppingBagIcon,
    }, */
  ];

  const adminDashboardNavigation = [
    ...userDashboardNavigation,
    {
      id: 6,
      name: "Manage Users",
      href: "/admin/users",
      icon: UsersIcon,
    },
    {
      id: 7,
      name: "Manage Bookings",
      href: "/admin/manage-booking",
      icon: ChartBarIcon,
    },
    {
      id: 8,
      name: "Manage Category",
      href: "/admin/manage-categories",
      icon: ChartBarIcon,
    },
    {
      id: 9,
      name: "Manage Vehicle",
      href: "/admin/manage-vehicles",
      icon: ChartBarIcon,
    },
  ];
  
  const superAdminDashboardNavigation = [
    ...adminDashboardNavigation,
    
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return adminDashboardNavigation;
  else if (role === USER_ROLE.ADMIN) return adminDashboardNavigation;
  else if (role === USER_ROLE.CUSTOMER) return userDashboardNavigation;
  else {
    return userDashboardNavigation;
  }
};
