import AppBar from './components/baseLayout/AppBar';
import Sidebar from './components/baseLayout/SideBar';
import DashboardScreen from './components/dashboard/DashboardScreen';

const App = () => {
   return (
      <div className="wrapper w-screen flex items-center justify-center flex-col">
         <div className="page-wrapper min-h-screen flex w-full">
            <Sidebar />
            <div className="page-wrapper w-full">
               <AppBar />
               <DashboardScreen />
            </div>
         </div>
      </div>
   );
};

export default App;
