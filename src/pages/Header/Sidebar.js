import DashboardIcon from '@mui/icons-material/Dashboard';
import SchoolIcon from '@mui/icons-material/School';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PushPinIcon from '@mui/icons-material/PushPin';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';



const Sidebar  = [
        {
            name: 'Courses',
            path: "/courses",
            logo: (<DashboardIcon />)
        },
        {
            name: 'Schools',
            path: "/schools",
            logo: (<SchoolIcon />)
        },
        {
            name: 'Students',
            path: "/students",
            logo: (<PeopleIcon />),
        },
        {
            name: 'Subjects',
            path: "/subjects",
            logo: (<MenuBookIcon />),
        },
        {
            name: 'Materials',
            path: "/materials",
            logo: (<PushPinIcon />),
        },
        {
            name: 'Videos',
            path: "/videos",
            logo: (<OndemandVideoIcon />),
        },
        {
            name: 'Subscriptions',
            path: "/subcriptions",
            logo: (<SubscriptionsIcon />),
        },
        {
            name: 'Notifications',
            path: "/notifications",
            logo: (<NotificationsActiveIcon />),

        }
    ]
export default Sidebar;
